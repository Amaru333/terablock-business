import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function GetStartedSection() {
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
      <div className="row mx-0 mx-md-5 mt-5">
        <div className="col-12 col-md-4 px-0 px-sm-3 px-md-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/connect-wallet.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">1</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2">Connect Web3 wallet</p>
            <p className="fs-6 text-primaryTextGray">Follow simple step by step process to create a new Web3 wallet or connect an existing wallet.</p>
          </UICard>
        </div>
        <div className="col-12 col-md-4 px-0 px-sm-3 px-md-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/add-funds.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">2</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2">Add fund to your wallet</p>
            <p className="fs-6 text-primaryTextGray">Easily buy cryptocurrencies with a bank card or transfer funds to your web3 wallet.</p>
          </UICard>
        </div>
        <div className="col-12 col-md-4 px-0 px-sm-3 px-md-3">
          <UICard>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <img src="./assets/icons/trading.svg" className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">3</h1>
            </div>
            <p className="fs-4 fw-bolder text-primaryBlue mt-2">Start trading instantly</p>
            <p className="fs-6 text-primaryTextGray">You're good to go! Set up recurring buys for your investments and discover what TeraBlock has to offer.</p>
          </UICard>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2 mb-5">
        <UIButton type="primary">Get Started</UIButton>
      </div>
    </div>
  );
}

export default GetStartedSection;
