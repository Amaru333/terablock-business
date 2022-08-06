import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import FeaturedInStyles from "../Styles/FeaturedIn.module.css";

function FeaturedInSection() {
  const ImageCard = ({ image }) => {
    return (
      <div className="card shadow p-3 mb-3 mb-md-5 bg-white rounded mx-0 mx-md-4 border-white d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
        <div>
          <img src={image} className="w-100" />
        </div>
      </div>
    );
  };
  const images = [
    "./assets/images/product_featured/coin-telegraph.png",
    "./assets/images/product_featured/daily-hodl.png",
    "./assets/images/product_featured/news-btc.png",
    "./assets/images/product_featured/yahoo-finance.png",
    "./assets/images/product_featured/coin-telegraph.png",
    "./assets/images/product_featured/daily-hodl.png",
    "./assets/images/product_featured/news-btc.png",
    "./assets/images/product_featured/yahoo-finance.png",
  ];
  return (
    <div className="pb-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark">
          <b>
            We are featured in<span className="text-primaryViolet">.</span>
          </b>
        </h3>
      </div>
      <div className="row mx-3 mx-md-4">
        {images.map((image) => (
          <div className="col-6 col-md-3">
            <ImageCard image={image} />
          </div>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-center">
        <img src="./assets/icons/left-block-arrow.svg" />
        <img src="./assets/icons/right-block-arrow.svg" />
      </div>
      {/* <div className="px-5 mx-5" style={{ position: "relative" }}>
        <img src="./assets/images/featured-bg.png" className="w-100" />
        <div style={{ position: "absolute" }}>
          <h3>
            Start your crypto journey,
            <br /> today!
          </h3>
          <UIButton type="secondary">Get started</UIButton>
        </div>
      </div> */}

      <div className={FeaturedInStyles.start_journey}>
        <div className="ms-0 ms-md-2 ms-md-5 pb-2 text-center text-md-start">
          <p className="text-white mb-4 pt-3 fs-4 fs-md-1 fw-bold">
            Start your crypto journey, <br />
            today!
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <UIButton type="secondary">Get started</UIButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedInSection;
