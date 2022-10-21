import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";
import UIGraph from "../../../widgets/UIGraph/UIGraph";
import InvestmentGraphStyle from "../Styles/InvestmentGraph.module.css";

function InvestmentGraph() {
  const width = useScreenSize().width;

  const coinlist_data = [
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/images/coinslists/eth.png",
      title: "Ethereum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/images/coinslists/usdt.png",
      title: "Tether",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
    {
      image: "./assets/images/coinslists/btc.png",
      title: "Binance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/images/coinslists/e-cash.png", "./assets/images/coinslists/btc.png", "./assets/images/coinslists/ripple.png", "./assets/images/coinslists/xss.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
  ];

  const CoinsCard = ({ data }) => {
    return (
      <div className="pb-5 h-100">
        <div className="card shadow px-3 mb-3 pt-3 bg-white rounded mx-0 border-primaryText h-100" style={{ "--bs-border-opacity": 0.25, zIndex: 1 }}>
          <div className="d-flex">
            <div>
              <img src={data.image} style={{ width: "48px" }} className="mb-2 text-center" />
              <div>
                <p className="text-primaryTextGray mb-0 text-center" style={{ fontSize: "12px", fontWeight: "500" }}>
                  Min. Amt
                </p>
                <p className="fw-bold text-primaryDark mb-2">{data.min_amount}</p>
              </div>
              <div>
                <p className="text-primaryTextGray mb-0 text-center" style={{ fontSize: "12px", fontWeight: "500" }}>
                  2Y AP
                </p>
                <p className="fw-bold text-success mb-0">{data.cagr}</p>
              </div>
            </div>
            <div className="ms-3">
              <div className="d-flex flex-column">
                <h5 className="fw-bold text-primaryDark mb-0">{data.title}</h5>
                <div style={{ display: "flex" }}>
                  <img src={`/assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                  <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                    {data.volatile} Volatile
                  </p>
                </div>

                {/* <div className="d-flex align-items-center">
                <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                  <img src={`/assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                  <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                    {data.volatile} Volatile
                  </p>
                </div>
              </div> */}
              </div>
              <div className="mt-2">
                {data.coin_images?.map((image, index) => (
                  <img src={image} className="me-2 my-1" key={index} style={{ width: "32px" }} />
                ))}
              </div>
              <p className="text-cardDescriptionColor mb-0" style={{ fontSize: "14px" }}>
                {data.description}
              </p>

              <div className="d-flex justify-content-between text-center align-items-center">
                {/* <div>
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
              </div> */}
                {/* {width > 1000 ? (
                <div className="d-flex align-items-center">
                  <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                    <img src={`/assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                    <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                      {data.volatile} Volatile
                    </p>
                  </div>
                </div>
              ) : ( */}
                <div style={{ width: "3rem" }}></div>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-investmentGraphBg flex flex-column justify-content-center align-items-center pb-4">
        <h3 className="text-white text-center fw-bold pt-5 px-1">
          <b>Long term investing is the key to sustainable crypto wealth</b>
        </h3>
        <p className="text-center text-white mt-4 px-2">Slide the coin and see how your crypto could have grown over time with systematic and periodic investing</p>
        <div className={["m-auto border border-1 rounded border-white px-4 py-2 my-5", InvestmentGraphStyle.half_container].join(" ")} style={{ "--bs-border-opacity": 0.2 }}>
          <p className="text-white mt-2">Monthly Deposit</p>
          <div className={InvestmentGraphStyle.slide_container}>
            <input type="range" min="1" max="200" className={InvestmentGraphStyle.slider} />
          </div>
          <div className="d-flex flex-row justify-content-between mt-2">
            <p className="text-white">$0</p>
            <p className="text-white">$200</p>
          </div>
        </div>
        {/* <div className={["row m-auto mt-3", InvestmentGraphStyle.half_container].join(" ")}> */}
        {/* <div className={["col bg-white me-3 px-2 py-3 rounded", InvestmentGraphStyle.flex].join(" ")}>
            <div>
              <div className={InvestmentGraphStyle.circle}></div>
            </div>
            <div className="ms-2 d-flex flex-column justify-content-between">
              <p className="mb-0 fs-6 text-investmentGraphBg">Savings account</p>
              <p className="mb-0 fs-5">$12,000</p>
            </div>
          </div>
          <div className={["col bg-white px-2 py-3 rounded", InvestmentGraphStyle.flex].join(" ")}>
            <div>
              <div className={InvestmentGraphStyle.circle} style={{ backgroundColor: "rgba(37, 74, 199, 0.6)" }}></div>
            </div>
            <div className="ms-2 d-flex flex-column justify-content-between">
              <p className="mb-0 fs-6 text-investmentGraphBg">Crypto Investing account after 5 years</p>
              <p className="mb-0 fs-5">$58,000</p>
            </div>
          </div> */}
        <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
          <div className="row mx-3 mx-md-4">
            {coinlist_data.map((coins) => (
              <div className="col-12 col-md-3">
                <CoinsCard data={coins} />
              </div>
            ))}
          </div>

          {/* <div className="col-12 col-md-6 col-xl-4">
            <CoinsCard data={coinlist_data[0]} />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <CoinsCard data={coinlist_data[0]} />
          </div> */}
        </div>
        {/* </div> */}
      </div>
      <div className={["p-0 p-sm-1 p-md-4", InvestmentGraphStyle.graph_background].join(" ")}>
        <UIGraph />
      </div>
      <div>
        <p className={["text-cardDescriptionColor m-auto text-center", InvestmentGraphStyle.half_container].join(" ")}>
          Chart is the comparison between the past five year performance of Bitcoin (BTC) and Ethereum (ETH) and savings account with an interest rate of 0.07% yearly. Investing in cryptocurrencies involves risk of loss and performance is not guaranteed.
        </p>
      </div>
    </div>
  );
}

export default InvestmentGraph;
