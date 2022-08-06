import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";

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

      <StartCryptoJourneyCard />
    </div>
  );
}

export default FeaturedInSection;
