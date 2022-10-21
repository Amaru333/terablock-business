import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";
import UICard from "../../widgets/UICard/UICard";

function BuyCryptoTable() {
  const screenSize = useScreenSize();
  const tableData = [
    {
      name: "BNB",
      image: "./assets/images/bnb.png",
      symbol: "BNB",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Bitcoin",
      image: "./assets/images/bnb.png",
      symbol: "BTC",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Ethereum",
      image: "./assets/images/bnb.png",
      symbol: "ETH",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Terra",
      image: "./assets/images/bnb.png",
      symbol: "LUNA",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
  ];
  if (screenSize.width > 768) {
    return (
      <div>
        <UICard>
          {/* <p className="fw-bolder text-center fs-5 mt-3">Trending Market</p> */}
          <div className="row text-black border-bottom mt-3 text-center mx-4" style={{ fontWeight: "600", fontSize: "14px" }}>
            <p className="col-3 col-md-5 mb-2 text-start">Name</p>
            {/* <p className="col mb-2">Symbol</p> */}
            <p className="col mb-2">Price</p>
            <p className="col mb-2">Change</p>
            <p className="col mb-2">Chart</p>
            <p className="col mb-2">Trade</p>
          </div>
          {tableData.map((data, index) => (
            <div className={`row mx-4 text-center align-items-center justify-content-center my-2 pb-2 ${index < tableData?.length - 1 && "border-bottom"}`} key={index}>
              <div className="col-3 col-md-5 d-flex flex-row align-items-center">
                <div>
                  <img src={data.image} />
                </div>
                <p className="mb-0 ms-2" style={{ fontWeight: 600, color: "#1b2b6b" }}>
                  {data.name}
                </p>
                <p className="mb-0 ms-2" style={{ fontWeight: 400, color: "#1b2b6b", fontSize: "14px" }}>
                  {data.symbol}
                </p>
              </div>
              {/* <p className="col mb-0 text-primaryTextGray">{data.symbol}</p> */}
              <p className="col mb-0" style={{ fontWeight: 600, color: "#1b2b6b" }}>
                {data.last_price}
              </p>
              <p className="col mb-0 text-success d-flex justify-content-center" style={{ fontWeight: 600 }}>
                {/* <img src="./assets/icons/up-square.svg" className="me-1" /> */}
                {data.change}
              </p>
              <p className="col mb-0 text-tableDataColor" style={{ fontWeight: 500 }}>
                {/* {data.market_cap} */}
              </p>
              <div className="col d-flex justify-content-center">
                <p className="text-white mb-0" style={{ padding: "5px 35px", borderRadius: "8px", fontWeight: 600, backgroundColor: "#0251ff" }}>
                  Buy
                </p>
              </div>
            </div>
          ))}
        </UICard>
      </div>
    );
  } else {
    return (
      <div>
        <UICard>
          <p className="fs-4 fw-bolder border-bottom pb-2 mb-0">Trending Market</p>
          {tableData.map((data, index) => (
            <div className="row" key={index}>
              <div className="col d-flex flex-row align-items-center">
                <div>
                  <img src={data.image} />
                </div>
                <p className="mb-0 ms-0 text-tableDataColor ps-1" style={{ fontWeight: 600 }}>
                  {data.name}
                </p>
              </div>
              <div className="col text-end align-self-center">
                <p className="mb-0 text-tableDataColor" style={{ fontWeight: 500 }}>
                  {data.last_price}
                </p>
                <p className="mb-0 text-success d-flex justify-content-end" style={{ fontSize: "10px", fontWeight: 600 }}>
                  <img src="./assets/icons/up-square.svg" className="me-0" style={{ width: "10px" }} />
                  {data.change}
                </p>
              </div>
              <div className="col d-flex justify-content-center">
                <p className="bg-white rounded text-primaryBlue px-4 border border-primaryBlue mt-3 pb-1" style={{ fontWeight: 600 }}>
                  {" "}
                  Buy{" "}
                </p>
              </div>
            </div>
          ))}
        </UICard>
      </div>
    );
  }
}

export default BuyCryptoTable;
