import React from "react";
import BuyCryptoTable from "../../../common/Table/BuyCryptoTable";
import { getScreenSize } from "../../../functions/getScreenSize";

function BuyCryptoSection() {
  const width = getScreenSize().width;
  return (
    <div>
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Buy crypto instantly to your Web3 wallet<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Securely buy, sell, invest, track and transfer cryptocurrencies</p>
      </div>
      <div className="mx-4 mx-md-1 mx-xl-5 position-relative">
        <BuyCryptoTable />
        {width > 768 && <img src="./assets/icons/4x5.svg" style={{ width: "50px", position: "absolute", bottom: "2rem", left: "0rem" }} />}
        <img src="./assets/icons/rectangle-blue.svg" style={{ width: "50px", position: "absolute", top: "-1rem", right: "0rem" }} />
      </div>
    </div>
  );
}

export default BuyCryptoSection;
