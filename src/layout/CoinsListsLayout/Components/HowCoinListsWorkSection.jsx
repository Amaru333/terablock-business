import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

import HowCoinsWorkStyle from "../Styles/HowCoinsWork.module.css";

function HowCoinListsWorkSection() {
  const width = useScreenSize().width;
  return (
    <div className="py-5 position-relative bg-white px-0 px-md-2 px-xl-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            How CoinsLists work<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray fs-6">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="d-flex row mx-0">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/coinslists/coinlist-iphone.png" style={{ zIndex: 1, maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
        <div className="col-12 col-md-6 justify-content-center px-5 align-self-center">
          <div className="d-flex flex-row">
            <div style={{ width: "1px", backgroundColor: "rgba(0, 82, 255, 0.14)" }}></div>
            <div>
              <div className="d-flex align-items-center position-relative mb-4">
                <div className={HowCoinsWorkStyle.inactive_box}></div>
                <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Set up your wallet</h5>
              </div>
              <div className="d-flex align-items-center position-relative my-4">
                <div className={HowCoinsWorkStyle.active_box}></div>
                <div>
                  <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Deposit money</h5>
                  <p className="ms-4 mb-0 mt-2 text-primaryTextGray" style={{ fontSize: "16px", width: width > 767 ? "75%" : "98%" }}>
                    You can add money to your wallet by transferring Crypto from an existing exchange account or buy Crypto via TeraBlock Buy using your bank Debit or Credit Card at the click of a button.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center position-relative my-4">
                <div className={HowCoinsWorkStyle.inactive_box}></div>
                <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Browse CoinsLists</h5>
              </div>
              <div className="d-flex align-items-center position-relative my-4">
                <div className={HowCoinsWorkStyle.inactive_box}></div>
                <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Allocate your funds</h5>
              </div>
              <div className="d-flex align-items-center position-relative mt-4">
                <div className={HowCoinsWorkStyle.inactive_box}></div>
                <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Enjoy your returns!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowCoinListsWorkSection;
