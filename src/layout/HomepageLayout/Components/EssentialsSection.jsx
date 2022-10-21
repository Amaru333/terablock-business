import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UIImageCard from "../../../widgets/UICard/UIImageCard";

import EssentialsSectionStyle from "../Styles/EssentialsSection.module.css";

function EssentialsSection() {
  const essential_details = [
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-2.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-3.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-4.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-4.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];

  const NewsCard = ({ image, title, description }) => {
    return (
      <div className="card shadow p-2" style={{ width: "18rem", zIndex: 2 }}>
        <img src={image} className="card-img" />
        <div className="pt-3">
          <h5 className="card-title fw-bold">{title}</h5>
          <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
            <span className="fw-bold border rounded px-2 border-success">
              <span className="text-success">• </span> Beginner
            </span>
            <span style={{ color: "#5a5b5b" }}>18 mins</span>
          </div>
          <p className="card-text mt-3" style={{ color: "#5a5b5b", fontSize: "14px" }}>
            {description} . . . <span style={{ color: "#0251ff", fontWeight: "600" }}>read more</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="pb-5" style={{ backgroundColor: "#f5f6fa" }}>
      {/* <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}> */}
      <div className="text-center mt-5 px-4 px-md-5 pb-3">
        <h3 className="pt-5" style={{ color: "#1b2b6b" }}>
          <b>Learn the essentials</b>
        </h3>
        <p style={{ color: "#5a5b5b" }}>Learn crypto through simple explanations, guides, tutorials, and market updates</p>
      </div>
      <div className={["d-flex ps-5 ms-0 ms-md-5", EssentialsSectionStyle.horizontal_scroll].join(" ")}>
        {essential_details.map((item, index) => (
          <div className="pe-5 mb-3" key={index}>
            <NewsCard title={item.title} image={item.image} description={item.description} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <UIButton type="primary">Get Started</UIButton>
        <UIButton>Learn More</UIButton>
      </div>
      {/* </div> */}
    </div>
  );
}

export default EssentialsSection;
