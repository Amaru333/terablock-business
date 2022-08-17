import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function CoinsListSection() {
  const width = useScreenSize().width;
  const DataCard = ({ data }) => {
    return (
      <UICard>
        <div className="d-flex">
          <div>
            <img src={data.image} />
          </div>
          <div className="ms-3">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold text-primaryDark mb-0 mb-md-3">{data.title}</h4>
              {width < 1001 && (
                <div className="d-flex align-items-center">
                  <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                    <img src={`./assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                    <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                      {data.volatile} Volatile
                    </p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-cardDescriptionColor">{data.description}</p>
            <div>
              {data.coin_images.map((image, index) => (
                <img src={image} className="me-2 me-md-3 mb-3" key={index} style={{ width: "32px" }} />
              ))}
            </div>
            <div className="d-flex justify-content-between text-center align-items-center">
              <div>
                <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                  4Yr. CAGR
                </p>
                <p className="fw-bold text-success mb-0">{data.cagr}</p>
              </div>
              <div>
                <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                  Min. Amount
                </p>
                <p className="fw-bold text-primaryDark mb-0">{data.min_amount}</p>
              </div>
              {width > 1000 ? (
                <div className="d-flex align-items-center">
                  <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                    <img src={`./assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                    <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                      {data.volatile} Volatile
                    </p>
                  </div>
                </div>
              ) : (
                <div style={{ width: "3rem" }}></div>
              )}
            </div>
          </div>
        </div>
      </UICard>
    );
  };

  const coinlist_data = [
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png", "./assets/images/coinslists/coin-5.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
  ];
  return (
    <div className="pb-5 position-relative">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            Coins you shouldn't miss<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray fs-6">CoinsList empowers you to see the possibilities of consistent simplified investments and helps you realize your financial goals.</p>
      </div>
      <div className="row mx-3 mx-md-4">
        {coinlist_data.map((data, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={index}>
            <DataCard data={data} />
          </div>
        ))}
      </div>
      {width > 768 && (
        <>
          <div className="d-flex flex-row justify-content-center">
            <img src="./assets/icons/left-block-arrow.svg" />
            <img src="./assets/icons/right-block-arrow.svg" />
          </div>
          <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", right: "3rem" }} />
          <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "9rem", left: "3rem" }} />
        </>
      )}
    </div>
  );
}

export default CoinsListSection;
