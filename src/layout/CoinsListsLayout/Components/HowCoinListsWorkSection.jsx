import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

import HowCoinsWorkStyle from "../Styles/HowCoinsWork.module.css";

function HowCoinListsWorkSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  return (
    // <div className="py-5 position-relative bg-white px-0 px-md-2 px-xl-5">
    //   <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
    //     <h3 className="text-primaryTextDark fw-bold">
    //       <b>
    //         How CoinsLists work<span className="text-primaryViolet">.</span>
    //       </b>
    //     </h3>
    //     <p className="text-primaryTextGray fs-6">Get to know the people and communities pushing the crypto economy forward</p>
    //   </div>
    //   <div className="d-flex row mx-0">
    //     <div className="col-12 col-md-6 d-flex justify-content-center">
    //       <img src="/assets/images/coinslists/coinlist-iphone.png" style={{ zIndex: 1, maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
    //     </div>
    //     <div className="col-12 col-md-6 justify-content-center px-5 align-self-center">
    //       <div className="d-flex flex-row">
    //         <div style={{ width: "1px", backgroundColor: "rgba(0, 82, 255, 0.14)" }}></div>
    //         <div>
    //           <div className="d-flex align-items-center position-relative mb-4">
    //             <div className={HowCoinsWorkStyle.inactive_box}></div>
    //             <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Set up your wallet</h5>
    //           </div>
    //           <div className="d-flex align-items-center position-relative my-4">
    //             <div className={HowCoinsWorkStyle.active_box}></div>
    //             <div>
    //               <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Deposit money</h5>
    //               <p className="ms-4 mb-0 mt-2 text-primaryTextGray" style={{ fontSize: "16px", width: width > 767 ? "75%" : "98%" }}>
    //                 You can add money to your wallet by transferring Crypto from an existing exchange account or buy Crypto via TeraBlock Buy using your bank Debit or Credit Card at the click of a button.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="d-flex align-items-center position-relative my-4">
    //             <div className={HowCoinsWorkStyle.inactive_box}></div>
    //             <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Browse CoinsLists</h5>
    //           </div>
    //           <div className="d-flex align-items-center position-relative my-4">
    //             <div className={HowCoinsWorkStyle.inactive_box}></div>
    //             <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Allocate your funds</h5>
    //           </div>
    //           <div className="d-flex align-items-center position-relative mt-4">
    //             <div className={HowCoinsWorkStyle.inactive_box}></div>
    //             <h5 className="ms-4 mb-0 text-primaryDark fw-bolder">Enjoy your returns!</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "95%" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h3 className="text-primaryTextDark fw-bold">
            <b>How does it work?</b>
          </h3>
          <p style={{ color: "#5a5b5b" }}>Follow a guided three steps process to build your diversified crypto portfolio in under 10mins!</p>
        </div>
        <div className="row mx-0 mx-md-1 mx-xl-3 mt-5 position-relative">
          <div className="col-12 col-md-4 px-3 px-md-0">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/images/8.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "64px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">1</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Create Web3 wallet</p>
              <p className="fs-6 text-primaryTextGray text-center text-md-start">Follow simple step-by-step guided process to create a new Web3 wallet or connect an existing wallet.</p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/images/9.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "64px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">2</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Buy</p>
              <p className="fs-6 text-primaryTextGray text-center text-md-start">Buy accepted cryptocurrencies through convenient payment methods or select from your existing funds.</p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/images/10.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "64px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">3</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">CoinsList Selection</p>
              <p className="fs-6 text-primaryTextGray text-center text-md-start">After one-click CoinsList selection and funds allocation, our Web3 multi-protocol automation will buy and transfer cryptocurrencies to your wallet on the respective blockchain.</p>
            </UICard>
          </div>
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "1rem" }} />}
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2 mb-5">
          <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
          <UIButton type="">Discover CoinsLists</UIButton>
        </div>
      </div>
    </div>
  );
}

export default HowCoinListsWorkSection;
