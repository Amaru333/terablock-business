import React from "react";
import CoinsListCard from "../../../common/Cards/CoinsListCard";

function RecentlyViewedSection() {
  const coinlist_data = [
    {
      image: "/assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "/assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "/assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
  ];
  return (
    <div className="py-5">
      <div className="text-center mb-2 px-3">
        <h2 className="text-primaryTextDark">
          <b>
            Recently Viewed<span className="text-primaryViolet">.</span>
          </b>
        </h2>
        <p className="text-primaryTextGray fs-6 py-3">You&apos;ve recently viewed the following CoinsLists.</p>
      </div>
      <div className="row mx-3 mx-md-4">
        {coinlist_data.map((data, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={index}>
            <CoinsListCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewedSection;
