import React from "react";
import BuyCryptoTable from "../../../common/Table/BuyCryptoTable";
import { useScreenSize } from "../../../functions/useScreenSize";

function BuyCryptoSection() {
  const width = useScreenSize().width;
  return (
    <div className="bg-white pt-5">
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>Buy crypto straight into your Web3 wallet!</b>
        </h3>
        <p className="text-primaryTextGray">Purchase a range of cryptocurrencies securely to your web3 wallet with over 16 payment methods in 180 countries!</p>
      </div>
      <div className="" style={{ textAlign: "-webkit-center" }}>
        <div className="py-0" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "69%" : width > 940 ? "82%" : width > 940 ? "93%" : "95%" }}>
          <div style={{ maxWidth: "1700px" }}>
            <BuyCryptoTable />
            {/* {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0rem" }} />}
          <img src="/assets/icons/rectangle-blue.svg" style={{ width: "50px", position: "absolute", top: "-1rem", right: "0rem" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCryptoSection;
