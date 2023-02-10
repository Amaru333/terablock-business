import { useRouter } from "next/router";
import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function GetStartedSection() {
  const width = useScreenSize().width;
  const router = useRouter();
  const [buttonText, setButtonText] = useState("Get Started");
  const openNewTab = (link) => {
    window.open(link, "_blank");
  }
  return (
    <div>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "80%" : "95%" }}>
        <div className="text-center mt-5 px-4 px-md-5">
          <h2 className="text-primaryTextDark fw-bold">
            <b>Smart investing with CoinsLists</b>
          </h2>
          <p style={{ color: "#5a5b5b" }}>
            Follow a guided step-by-step process to build your crypto portfolio with CoinsLists in under <b>15mins.</b>
          </p>
        </div>
        <div className="row mx-0 mt-5 position-relative">
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-2">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/icons/homepage/8.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "60px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">1</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Create Web3 wallet</p>
              <p style={{ color: "#5a5b5b", textAlign: "justify" }} className="fs-6">
                Follow simple step-by-step guided process to create a new Web3 wallet or connect an existing wallet.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-2">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/icons/homepage/10.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "60px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">2</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Select CoinsLists</p>
              <p style={{ color: "#5a5b5b", textAlign: "justify" }} className="fs-6">
                We curate and optimise the most sought after crypto assets as CoinLists, so you can wisely invest in a range of crypto with ease.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-2">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <img src="/assets/icons/homepage/9.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "60px" }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">3</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Buy with a bank card</p>
              <p style={{ color: "#5a5b5b", textAlign: "justify" }} className="fs-6">
                Buy directly to your Web3 wallet through more than 16 payment accepted methods in 180 countries.
              </p>
            </UICard>
          </div>
          {/* {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "1rem" }} />} */}
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2 mb-5">
          <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
          <UIButton onClick={() => router.push("/coinslists")}>Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default GetStartedSection;
