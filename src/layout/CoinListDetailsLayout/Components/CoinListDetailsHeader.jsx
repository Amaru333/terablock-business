import React from "react";

function CoinListDetailsHeader() {
  const coin_images = ["/assets/images/coinslists/e-cash.png", "/assets/images/coinslists/btc.png", "/assets/images/coinslists/ripple.png", "/assets/images/coinslists/xss.png", "/assets/images/coinslists/coin-5.png"];
  return (
    <div className="py-5">
      <div className="row mx-0">
        <div className="col-12 col-md-7">
          <div className="d-flex flex-column-reverse flex-md-row justify-content-center mx-3 mx-md-2 mx-xl-5">
            <div className="align-self-center align-self-md-start pb-5 pt-2 pb-md-0 pt-md-0">
              <img src="/assets/images/coinslists/binance-xl.png" />
            </div>
            <div className="ms-0 ms-md-5 text-center text-md-start">
              <h2 className="text-primaryTextDark">
                <b>
                  Binance Coin<span className="text-primaryViolet">.</span>
                </b>
              </h2>
              <p className="text-primaryTextGray">At TeraBlock we look at investing as everyone's basic fundamental right. It should not be exclusive to high net worth individuals and sophisticated investors.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column align-items-center">
          <div className="d-flex">
            <div>
              <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                4Yr. CAGR
              </p>
              <p className="fw-bold text-success mb-0">24.44%</p>
            </div>
            <div className="d-flex align-items-center ms-5">
              <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: "rgba(255, 153, 153, 0.48)", borderStyle: "solid", backgroundColor: "white" }}>
                <img src={`/assets/images/coinslists/High-volatile.svg`} style={{ width: "18px" }} />
                <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "14px", color: "#D40707" }}>
                  High Volatile
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {coin_images.map((image, index) => (
              <img src={image} className="me-2 me-md-3 mb-3" key={index} style={{ width: "32px" }} />
            ))}
          </div>
        </div>
      </div>
      <img src="/assets/icons/3x4.svg" className="ms-5 mt-4" style={{ width: "35px" }} />
    </div>
  );
}

export default CoinListDetailsHeader;
