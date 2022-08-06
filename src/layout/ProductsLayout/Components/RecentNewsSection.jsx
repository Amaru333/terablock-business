import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UIImageCard from "../../../widgets/UICard/UIImageCard";
import RecentNewsStyles from "../Styles/RecentNews.module.css";

function RecentNewsSection() {
  const news_details = [
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      image: "./assets/images/learn-image-1.png",
      title: "What is Bitcoin & Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];
  return (
    <div className="pb-4">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark">
          <b>
            Recent News<span className="text-primaryViolet">.</span>
          </b>
        </h3>
      </div>
      <div className={["d-flex ps-5 ms-0 ms-md-5", RecentNewsStyles.horizontal_scroll].join(" ")}>
        {news_details.map((item) => (
          <div className="pe-5">
            <UIImageCard title={item.title} image={item.image} description={item.description} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-5">
        <UIButton type="primary">Learn More</UIButton>
      </div>
    </div>
  );
}

export default RecentNewsSection;
