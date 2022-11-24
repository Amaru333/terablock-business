import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import HorizontalCardsStyle from "./HorizontalCards.module.css";

function HorizontalCards({ data, description_1, description_2, title }) {
  const DifficultyTag = ({ level }) => {
    const color = {
      Beginner: "#00C077",
      Intermediate: "#FFA216",
      Advanced: "#F92626",
    };
    return (
      <span className="fw-bold rounded px-2" style={{ border: `1px solid ${color[level]}` }}>
        <span style={{ color: color[level] }}>• </span> {level}
      </span>
    );
  };
  const NewsCard = ({ image, title, description, difficulty, time }) => {
    return (
      <div className="card shadow p-2" style={{ width: "18rem", zIndex: 2 }}>
        <img src={image} className="card-img" />
        <div className="pt-3">
          <h5 className="card-title fw-bold">{title}</h5>
          <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
            <DifficultyTag level={difficulty} />
            <div className="d-flex align-items-center">
              <img src="/assets/icons/time.svg" />
              <span style={{ color: "#5a5b5b", marginLeft: "5px" }}>{time} mins</span>
            </div>
          </div>
          <p className="card-text mt-3" style={{ color: "#5a5b5b", fontSize: "14px" }}>
            {description} . . . <span style={{ color: "#0251ff", fontWeight: "600" }}>read more</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="pb-5 bg-white border-bottom">
      <div className="text-center px-4 px-md-5 pb-3">
        <h3 className="pt-5" style={{ color: "#1b2b6b" }}>
          <b>{title}</b>
        </h3>
        <p className="m-0" style={{ color: "#5a5b5b" }}>
          {description_1}
        </p>
        <p className="mb-5" style={{ color: "#5a5b5b" }}>
          {description_2}
        </p>
      </div>
      <div className={["d-flex ps-5 ms-0 ms-md-5", HorizontalCardsStyle.horizontal_scroll].join(" ")}>
        {data?.map((item, index) => (
          <div className="pe-5 mb-3" key={index}>
            <NewsCard title={item.title} image={item.image} description={item.description} time={item.time} difficulty={item.difficulty} />
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