import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UIImageCard from "../../../widgets/UICard/UIImageCard";
import RecentNewsStyles from "../Styles/RecentNews.module.css";

function RecentNewsSection() {
  const width = useScreenSize().width;
  const news_details = [
    {
      image: "/assets/images/learn-image-1.png",
      title: "What is Bitcoin & Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "/assets/images/learn-image-1.png",
      title: "What is Bitcoin & Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "/assets/images/learn-image-1.png",
      title: "What is Bitcoin & Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "/assets/images/learn-image-1.png",
      title: "What is Bitcoin & Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "/assets/images/learn-image-1.png",
      title: "What is Bitcoin & Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];
  return (
    <div className="py-5 position-relative bg-white px-0 px-md-2 px-xl-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h2 className="text-primaryTextDark fw-bold">
          <b>
            Recent News<span className="text-primaryViolet">.</span>
          </b>
        </h2>
      </div>
      <div className={["d-flex ps-5 ms-0 ms-md-5", RecentNewsStyles.horizontal_scroll].join(" ")}>
        {news_details.map((item, index) => (
          <div key={index} className="pe-5 pb-3">
            <UIImageCard title={item.title} image={item.image} description={item.description} />
          </div>
        ))}
      </div>
      {width > 768 && (
        <div className="d-flex justify-content-center my-5">
          <UIButton type="primary">Learn More</UIButton>
        </div>
      )}
      {width < 768 && (
        <>
          <img src="/assets/icons/6x4-blue.svg" style={{ position: "absolute", bottom: "40%", right: "10%", zIndex: 0 }} />
          <img src="/assets/icons/6x4-blue.svg" style={{ position: "absolute", bottom: "20%", left: "5%", zIndex: 0 }} />
        </>
      )}
    </div>
  );
}

export default RecentNewsSection;
