import React from "react";
import CoinsListCard from "../../../common/Cards/CoinsListCard";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function CoinsListSection() {
  const width = useScreenSize().width;

  const CoinListCard = ({ data }) => {
    return (
      <UICard>
        <div className="d-flex align-items-center">
          <div style={{ width: "5%" }}>
            <img src={data.image} style={{ width: "60px" }} />
          </div>
          <div className="ms-3" style={{ width: "40%" }}>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold text-primaryDark mb-0" style={{ fontSize: "18px" }}>
                  {data.title}
                </p>
              </div>
              <p className="text-cardDescriptionColor mb-0">{data.description}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ width: "20%" }}>
            {data.coin_images.map((image, index) => (
              <div>
                <img src={image} className="me-2 me-md-3" key={index} style={{ width: "32px" }} />
              </div>
            ))}
          </div>
          <div style={{ width: "15%" }}>
            <div className="d-flex justify-content-evenly text-center align-items-center">
              <div>
                <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                  Min. Amount
                </p>
                <p className="fw-bold text-primaryDark mb-0">{data.min_amount}</p>
              </div>
              <div>
                <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                  {data.apr}Yr. APR
                </p>
                <p className="fw-bold text-success mb-0">{data.cagr}</p>
              </div>
              {/* {width > 1000 ? (
              <div className="d-flex align-items-center">
                <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                  <img src={`/assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                  <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                    {data.volatile} Volatile
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ width: "3rem" }}></div>
            )} */}
            </div>
          </div>
          <div style={{ width: "20%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <UIButton>View CoinsList</UIButton>
          </div>
        </div>
      </UICard>
    );
  };

  const coinlist_data = [
    {
      image: "/assets/icons/homepage/4.png",
      title: "High Capitalisation",
      description: "A portfolio of high capitalization cryptocurrencies.",
      coin_images: ["/assets/icons/homepage/coins/15.png", "/assets/icons/homepage/coins/10.png", "/assets/icons/homepage/coins/1.png", "/assets/icons/homepage/coins/6.png"],
      cagr: "3,875%",
      min_amount: "$100",
      apr: "5",
      volatile: "Low",
    },
    {
      image: "/assets/icons/homepage/5.png",
      title: "Metaverse",
      description: "A portfolio of cryptocurrencies revolutionising Metaverse ecosystem.",
      coin_images: ["/assets/icons/homepage/coins/12.png", "/assets/icons/homepage/coins/13.png", "/assets/icons/homepage/coins/7.png", "/assets/icons/homepage/coins/5.png"],
      cagr: "2,877%",
      min_amount: "$250",
      volatile: "High",
      apr: "2",
    },
    {
      image: "/assets/icons/homepage/6.png",
      title: "Play2Earn",
      description: "A portfolio of leading cryptocurrencies of Play-to-Earn games.",
      coin_images: ["/assets/icons/homepage/coins/16.png", "/assets/icons/homepage/coins/14.png", "/assets/icons/homepage/coins/3.png", "/assets/icons/homepage/coins/8.png"],
      cagr: "2,861%",
      min_amount: "$250",
      volatile: "High",
      apr: "2",
    },
    {
      image: "/assets/icons/homepage/7.png",
      title: "DeFi",
      description: "A portfolio of innovative businesses in DeFi ecosystem.",
      coin_images: ["/assets/icons/homepage/coins/4.png", "/assets/icons/homepage/coins/11.png", "/assets/icons/homepage/coins/2.png", "/assets/icons/homepage/coins/9.png"],
      cagr: "458.9%",
      min_amount: "$250",
      volatile: "Med",
      apr: "2",
    },
  ];
  // {
  //   image: "/assets/images/coinslists/eth.png",
  //   title: "Ethereum",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  //   coin_images: ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"],
  //   cagr: "24.44%",
  //   min_amount: "$4,234",
  //   volatile: "Low",
  // },
  // {
  //   image: "/assets/images/coinslists/usdt.png",
  //   title: "Tether",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  //   coin_images: ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"],
  //   cagr: "24.44%",
  //   min_amount: "$4,234",
  //   volatile: "Med",
  // },
  return (
    <div className="py-5 position-relative px-0 px-md-2 px-xl-5 text-white" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center pt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="fw-bold">
          <b>Popular CoinsLists</b>
        </h3>
        <p className="fs-6">Looking to start with small investment? Bullish on Metaverse? Choose from diversified CoinsLists.</p>
      </div>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-3 mx-md-4">
          {coinlist_data.map((data, index) => (
            <div className="col-12" key={index}>
              <CoinListCard data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* {width > 768 && (
        <>
          <div className="d-flex flex-row justify-content-center">
            <img src="/assets/icons/left-block-arrow.svg" />
            <img src="/assets/icons/right-block-arrow.svg" />
          </div>
          <img src="/assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", right: "3rem" }} />
          <img src="/assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", left: "3rem" }} />
        </>
      )} */}
    </div>
  );
}

export default CoinsListSection;
