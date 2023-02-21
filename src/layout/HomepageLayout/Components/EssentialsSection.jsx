import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UIButton from "../../../widgets/UIButtons/UIButton";
import Link from 'next/link'
import EssentialsSectionStyle from "../Styles/EssentialsSection.module.css";

function EssentialsSection() {
  const router = useRouter();
  const [essential_details, setEssentialDetails] = useState([])
  const openNewTab = (link) => {
    window.open(link, "_blank");
  }
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts/?key=0489294cc94510ae9335da2c7f&&filter=tag:learn&include=tags").then((res) => {
      setEssentialDetails(res.data.posts);
      console.log(res, 'cryptoBasis from api....')
    });
  }, [router]);
  const DifficultyTag = ({ level }) => {
    const color = {
      Beginner: "#00C077",
      Intermediate: "#FFA216",
      Advanced: "#F92626",
    };
    return (
      <span className="rounded px-2" style={{ border: `1px solid ${color[level]}`, fontWeight: "700" }}>
        <span style={{ color: color[level] }}>• </span> {level}
      </span>
    );
  };
  const [buttonText, setButtonText] = useState("Get Started");
  const NewsCard = ({ image, title, description, difficulty, time, slug, id }) => {
    return (
      <Link href={`learn/${slug}`}>
        <div className="card position-relative" style={{ width: "18rem", zIndex: 2, borderRadius: "16px", padding: "12px", boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.06)", minHeight: '420px', cursor: 'pointer' }}>
          <img src={image} className="card-img" />
          <div className="pt-3 text-truncate-container">
            <h5 className="card-title" style={{ fontWeight: "600" }}>
              {title}
            </h5>
            <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
              <DifficultyTag level={difficulty} />
              <div className="d-flex align-items-center">
                <img src="/assets/icons/time.svg" />
                <span style={{ color: "#797979", marginLeft: "5px", fontWeight: "600" }}>{time} mins</span>
              </div>
            </div>
            <p className={"card-text mt-3 truncate"} style={{ color: "#707070", fontSize: "14px", width: '250px' }}>
              {description}
            </p>
            <span style={{ color: "#0052FF", fontWeight: "700" }} className='position-absolute bottom-0 pb-2'>Read More →</span>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div className="pb-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="py-4" style={{ marginLeft: "0px" }}>
        <div className="text-center px-4 px-md-5 pb-3">
          <h2 className="pt-5 fw-bold" style={{ color: "#1b2b6b" }}>
            <b>Learn the essentials</b>
          </h2>
          <p style={{ color: "#5a5b5b" }}>Learn crypto through simple explanations, guides, tutorials, and market updates</p>
        </div>
        <div className={["d-flex ps-5", EssentialsSectionStyle.horizontal_scroll].join(" ")}>
          {essential_details.map((item, index) => (
            <div className="pe-3 pe-md-5 mb-3" key={index}>
              <NewsCard title={item.title} image={item.feature_image} description={item.excerpt} time={item.reading_time} difficulty={item.tags[1]?.name} slug={item.slug} id={item.id} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
          <UIButton onClick={() => router.push("/learn")}>Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default EssentialsSection;
