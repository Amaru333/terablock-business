import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function GetStartedSection() {
  const width = useScreenSize().width;
  return (
    <div>
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Build your truly decentralised crypto portfolio<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Get started in a few minutes with these easy steps.</p>
      </div>
      <div className="row mx-5 mx-md-1 mx-xl-5 mt-5 position-relative">
        <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/connect-wallet.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">1</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Connect Web3 wallet</p>
            <p className="fs-6 text-primaryTextGray text-center text-md-start">Follow simple step by step process to create a new Web3 wallet or connect an existing wallet.</p>
          </UICard>
        </div>
        <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/add-funds.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">2</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Add fund to your wallet</p>
            <p className="fs-6 text-primaryTextGray text-center text-md-start">Easily buy cryptocurrencies with a bank card or transfer funds to your web3 wallet.</p>
          </UICard>
        </div>
        <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/trading.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">3</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Start trading instantly</p>
            <p className="fs-6 text-primaryTextGray text-center text-md-start">You&apos;re good to go! Set up recurring buys for your investments and discover what TeraBlock has to offer.</p>
          </UICard>
        </div>
        {width > 768 && <img src="./assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "1rem" }} />}
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2 mb-5">
        <UIButton type="primary">Get Started</UIButton>
      </div>
    </div>
  );
}

export default GetStartedSection;
