import React from "react";
import BuyCryptoTable from "../../../common/Table/BuyCryptoTable";

function BuyCryptoSection() {
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
      <div className="mx-4 mx-md-5">
        <BuyCryptoTable />
      </div>
    </div>
  );
}

export default BuyCryptoSection;
