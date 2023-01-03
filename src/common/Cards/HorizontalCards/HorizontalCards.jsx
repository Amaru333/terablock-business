import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import Link from 'next/link'

import HorizontalCardsStyle from "./HorizontalCards.module.css";

function HorizontalCards({ data, description_1, description_2, title  }) {
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
  const NewsCard = ({ image, title, description, difficulty, time, slug }) => {
    return (
      <div className="card" style={{ width: "18rem", zIndex: 2, borderRadius: "16px", padding: "12px", boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.06)" , minHeight:'420px'  , cursor:'pointer'}}>
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
          <p className={"card-text mt-3 test relative"} style={{ color: "#707070", fontSize: "14px", width:'250px'}}>
            {description}
          </p>
          <Link href={`/${slug}`}>
          <span style={{ color: "#0052FF", fontWeight: "700" }}>Read More →</span>
          </Link>
        </div>
      </div>
    );
  };
  let x = data.map((el) => (
    console.log(el?.tags[1]?.name , 'testinggggg')
  ))
  // console.log(x)
  return (
    <div className="pb-5 bg-white border-bottom">
      <div className="text-center px-4 px-md-5 pb-3">
        <h2 className="pt-5" style={{ color: "#1b2b6b" }}>
          <b>{title}</b>
        </h2>
        <p className="m-0" style={{ color: "#5a5b5b" }}>
          {description_1}
        </p>
        <p className="mb-5" style={{ color: "#5a5b5b" }}>
          {description_2}
        </p>
      </div>
      <div className={["d-flex ps-3 ps-md-5 ms-0 ms-md-5", HorizontalCardsStyle.horizontal_scroll].join(" ")}>
        {data?.map((item, index) => (
          <div className="pe-3 pe-md-5 mb-3" key={index}>
            <NewsCard title={item.title} image={item.feature_image} description={item.excerpt} time={item.reading_time} difficulty={item.id == "63abe3754dba2f1ec0e19f41" ? item.tags[1]?.name : item.tags[0]?.name ? item.id == "63abe3754dba2f1ec0e19f48" ? item.tags[4]?.name : item.tags[0]?.name : item.tags[1]?.name} slug={item.slug}/>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <UIButton type="primary">Explore more</UIButton>
      </div>
    </div>
  );
}

export default HorizontalCards;
