import React from "react";
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
        <p className="text-center text-white mt-4">Slide the coin and see how your crypto investment could have grown over the last five years</p>
        <div className={["m-auto border border-1 rounded border-white px-4 py-2", InvestmentGraphStyle.half_container].join(" ")} style={{ "--bs-border-opacity": 0.2 }}>
          <p className="text-white">Monthly Deposit</p>
        </div>
        <div className={["row m-auto mt-3", InvestmentGraphStyle.half_container].join(" ")}>
          <div className={["col bg-white me-3 px-2 py-3 rounded", InvestmentGraphStyle.flex].join(" ")}>
            <div>
              <div className={InvestmentGraphStyle.circle}></div>
            </div>
            <div className="ms-2">
              <p className="mb-0 fs-6 text-investmentGraphBg">Savings account</p>
              <p className="mb-0 fs-5">$12,000</p>
            </div>
          </div>
          <div className={["col bg-white px-2 py-3 rounded", InvestmentGraphStyle.flex].join(" ")}>
            <div>
              <div className={InvestmentGraphStyle.circle}></div>
            </div>
            <div className="ms-2">
              <p className="mb-0 fs-6 text-investmentGraphBg">Crypto Investing account after 5 years</p>
              <p className="mb-0 fs-5">$58,000</p>
            </div>
          </div>
        </div>
      </div>
      <div>GRAPH</div>
      <div>
        <p className={["text-cardDescriptionColor m-auto text-center", InvestmentGraphStyle.half_container].join(" ")}>
          Chart is the comparison between the past five year performance of Bitcoin (BTC) and Ethereum (ETH) and savings account with an interest rate of 0.07% yearly. Investing in cryptocurrencies involves risk of loss and performance is not guaranteed.
        </p>
      </div>
    </div>
  );
}

export default InvestmentGraph;
