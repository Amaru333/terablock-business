import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UIImageCard from "../../../widgets/UICard/UIImageCard";

import EssentialsSectionStyle from "../Styles/EssentialsSection.module.css";

function EssentialsSection() {
  const essential_details = [
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-2.png",
      title: "What is Web3 Wallet?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-3.png",
      title: "What is TeraBlock?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-4.png",
      title: "What are crypto?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-4.png",
      title: "What are crypto?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];
  return (
    <div className="pb-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="text-center mt-5 px-4 px-md-5 pb-3">
        <h3 className="pt-5" style={{ color: "#1b2b6b" }}>
          <b>Learn the essentials</b>
        </h3>
        <p style={{ color: "#5a5b5b" }}>Learn crypto through simple explanations, guides, tutorials, and market updates</p>
      </div>
      <div className={["d-flex ps-5 ms-0 ms-md-5", EssentialsSectionStyle.horizontal_scroll].join(" ")}>
        {essential_details.map((item, index) => (
          <div className="pe-5" key={index}>
            <UIImageCard title={item.title} image={item.image} description={item.description} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <UIButton type="primary">Get Started</UIButton>
        <UIButton>Learn More</UIButton>
      </div>
    </div>
  );
}

export default EssentialsSection;
