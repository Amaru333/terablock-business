import React from "react";
import UIGraph from "../../../widgets/UIGraph/UIGraph";
import InvestmentGraphStyle from "../Styles/InvestmentGraph.module.css";

function InvestmentGraph() {
  return (
    <div>
      <div className="bg-investmentGraphBg flex flex-column justify-content-center align-items-center pb-4">
        <h3 className="text-white text-center pt-5 px-1">
          <b>
            Investing is the key to building wealth<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-center text-white mt-4 px-2">Slide the coin and see how your crypto investment could have grown over the last five years</p>
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
        <div className={["row m-auto mt-3", InvestmentGraphStyle.half_container].join(" ")}>
          <div className={["col bg-white me-3 px-2 py-3 rounded", InvestmentGraphStyle.flex].join(" ")}>
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
          </div>
        </div>
      </div>
      <div className={["p-2 p-md-5", InvestmentGraphStyle.graph_background].join(" ")}>
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
