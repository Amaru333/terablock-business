import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";
import UIGraph from "../../../widgets/UIGraph/UIGraph";
import InvestmentGraphStyle from "../Styles/InvestmentGraph.module.css";

function InvestmentGraph() {
  const width = useScreenSize().width;

  const coinlist_data = [
    {
      image: "./assets/icons/homepage/4.png",
      title: "High Capitalisation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/icons/homepage/coins/1.png", "./assets/icons/homepage/coins/2.png", "./assets/icons/homepage/coins/3.png", "./assets/icons/homepage/coins/4.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
    {
      image: "./assets/icons/homepage/5.png",
      title: "Metaverse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/icons/homepage/coins/5.png", "./assets/icons/homepage/coins/6.png", "./assets/icons/homepage/coins/7.png", "./assets/icons/homepage/coins/8.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Low",
    },
    {
      image: "./assets/icons/homepage/6.png",
      title: "Play2Earn",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/icons/homepage/coins/9.png", "./assets/icons/homepage/coins/10.png", "./assets/icons/homepage/coins/11.png", "./assets/icons/homepage/coins/12.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "Med",
    },
    {
      image: "./assets/icons/homepage/7.png",
      title: "DeFi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      coin_images: ["./assets/icons/homepage/coins/13.png", "./assets/icons/homepage/coins/1.png", "./assets/icons/homepage/coins/1.png", "./assets/icons/homepage/coins/2.png"],
      cagr: "24.44%",
      min_amount: "$4,234",
      volatile: "High",
    },
  ];

  const CoinsCard = ({ data, index }) => {
    return (
      <div className="pb-5 h-100">
        <div className="card shadow px-3 mb-3 pt-3 bg-white rounded mx-0 h-100" style={{ "--bs-border-opacity": 0.25, zIndex: 1, border: index == 0 ? "3px solid #ffa900" : "none" }}>
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
                <h6 className="fw-bold text-primaryDark mb-1">{data.title}</h6>
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

  const [value, setValue] = useState(1);
  const increment = () => {
    if (value < 10 && value >= 0) {
      setValue(parseInt(value) + 1);
    } else if (value >= 10 && value < 996) {
      setValue(parseInt(value) + 5);
    }
  };

  const decrement = () => {
    if (value <= 10 && value >= 1) {
      setValue(parseInt(value) - 1);
    } else if (value > 10 && value <= 1000) {
      setValue(parseInt(value) - 5);
    }
  };

  console.log(value);

  return (
    <div>
      <div className="flex flex-column justify-content-center align-items-center pb-4" style={{ backgroundColor: "#0251ff" }}>
        <h3 className="text-white text-center pt-5 px-1">Long term investing is the key to sustainable crypto wealth</h3>
        <p className="text-center text-white mt-4 px-2">Slide the coin and see how your crypto could have grown over time with systematic and periodic investing</p>
        <div className={["m-auto rounded border-white px-4 py-2 my-5", InvestmentGraphStyle.half_container].join(" ")} style={{ "--bs-border-opacity": 0.2 }}>
          <div className="d-flex flex-row justify-content-between mt-2">
            <p className="text-white">Monthly Deposit</p>
            <p className="text-white">$100,000</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-white border border-white rounded-circle px-2 fw-bold me-2" style={{ height: "23px", lineHeight: "20px", cursor: "pointer" }} onClick={decrement}>
              -
            </span>
            <input type="range" min="0" max="1000" className={InvestmentGraphStyle.slider} value={value} onChange={(e) => setValue(e.target.value)} />
            <span className="text-white border border-white rounded-circle fw-bold ms-2" style={{ height: "24px", lineHeight: "20px", padding: "0 7px", cursor: "pointer" }} onClick={increment}>
              +
            </span>
          </div>
          {/* <div className="d-flex flex-row justify-content-between mt-2">
            <p className="text-white">Monthly Deposit</p>
            <p className="text-white">$2000</p>
          </div> */}
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
        <div className="py-4" style={{ maxWidth: "1350px", margin: "auto" }}>
          <div className="row mx-3 mx-md-4">
            {coinlist_data.map((coins, index) => (
              <div className="col-12 col-md-3">
                <CoinsCard data={coins} index={index} />
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
        <p className={["text-black m-auto text-center", InvestmentGraphStyle.half_container].join(" ")}>
          The chart compares the past five-year performance of <b>High Capitalisation CoinsList</b> and savings bank account with an interest rate of 0.07% yearly. Investing in cryptocurrencies involves the risk of loss, and performance is not guaranteed.
        </p>
      </div>
    </div>
  );
}

export default InvestmentGraph;
