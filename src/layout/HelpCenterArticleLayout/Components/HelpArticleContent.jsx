import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

import HelpArticleContentStyle from "../Styles/HelpArticleContent.module.css";

function HelpArticleContent() {
  const width = useScreenSize().width;
  const StepOne = () => {
    return (
      <div>
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 1: Download MetaMask wallet
        </p>
        <p className="mb-4 fs-5-4">
          Go to <a href="https://metamask.io/">https://metamask.io/</a> and click on “Download”. Choose your preferred browser or mobile application and install the MetaMask extension.
        </p>
        <p className="fs-5-4">MetaMask supports iOS, Android native apps along with Chrome, Firefox, Brave and Edge browser extensions.</p>
        <div className="">
          <img src="/assets/images/help_center/step-1.png" style={{ width: "100%", objectFit: "contain", maxWidth: "600px" }} />
          <br />
          <br />
          <img src="/assets/images/help_center/step-1-2.png" style={{ width: "100%", objectFit: "contain", maxWidth: "600px" }} />
        </div>
      </div>
    );
  };
  const StepTwo = () => {
    return (
      <div className="mt-4">
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 2: MetaMask wallet installation
        </p>
        <p className="mb-4 fs-5-4">Click on the MetaMask extension and click on “Get Started”.</p>
        <div className="">
          <img src="/assets/images/help_center/step-2.png" style={{ width: "100%", objectFit: "contain", maxWidth: "600px" }} />
          <br />
        </div>
        <p className="mb-0 mt-3 fs-5-4">You can either import an existent wallet using the seed phrase or create a new one.</p>
        <div className="">
          <br />
          <img src="/assets/images/help_center/step-2-1.png" style={{ width: "100%", objectFit: "contain", maxWidth: "600px" }} />
        </div>
      </div>
    );
  };
  const StepThree = () => {
    return (
      <div className="mt-4">
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 3: How to create a new MetaMask wallet
        </p>
        <p className="mb-4 fs-5-4">Click on “Create a Wallet” and on the next window click on “I agree” if you would like to help improve MetaMask or click on “No Thanks” to proceed.</p>
        <div className="">
          <img src="/assets/images/help_center/step-3.png" style={{ width: "100%", objectFit: "contain", maxWidth: "600px" }} />
        </div>
      </div>
    );
  };
  const StepFour = () => {
    return (
      <div className="mt-4">
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 4: Create a strong password for your wallet.
        </p>
        <p className="mb-4 fs-5-4">Click on “Create a Wallet” and on the next window click on “I agree” if you would like to help improve MetaMask or click on “No Thanks” to proceed.</p>
        <div className="">
          <img src="/assets/images/help_center/step-4.png" style={{ width: "100%", objectFit: "contain", maxWidth: "400px" }} />
        </div>
      </div>
    );
  };
  const StepFive = () => {
    return (
      <div className="mt-4">
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 5: Securely store the seed phrase for your wallet
        </p>
        <p className="mb-4 fs-5-4">Click on “Click here to reveal secret words” to show the seed phrase.</p>
        <p className="fs-5-4">
          MetaMask requires that you store your seed phrase in a safe place. It is the only way to recover your funds should your device crash or your browser reset. We recommend you write it down. The most common method is to write your 12-word phrase on a piece of paper and store it safely in a place where only you have access. Note: if you lose
          your seed phrase, MetaMask can&apos;t help you recover your wallet and your funds will be lost forever.
        </p>
        <p className="fs-5-4">Never share your seed phrase or your private key to anyone or any site, unless you want them to have full control over your funds.</p>
        <div className="">
          <img src="/assets/images/help_center/step-5.png" style={{ width: "100%", objectFit: "contain", maxWidth: "400px" }} />
        </div>
        <p className="fs-5-4 mt-3 mb-0">Click on “Next”.</p>
      </div>
    );
  };
  const StepSix = () => {
    return (
      <div className="mt-4">
        <p className="article-title fs-6-5 mb-2" style={{ fontWeight: 500 }}>
          Step 6: Seed phrase confirmation
        </p>
        <p className="mb-4 fs-5-4">Confirm your secret backup phrase by clicking on each word in the order in which the words were presented on the previous screen. Click on “Confirm” to proceed.</p>
      </div>
    );
  };

  const WalletHelpList = () => {
    return (
      <div className={HelpArticleContentStyle.wallet_help_list_container}>
        <div className={HelpArticleContentStyle.wallet_help_header}>
          <img src="/assets/images/help_center/wallet-icon.svg" />
          <p className="mb-0 px-2 align-items-center">Wallet Management</p>
          <img src="/assets/images/help_center/dropdown.svg" />
        </div>
        <p className={HelpArticleContentStyle.wallet_list_active}>How to create a MetaMask Wallet</p>
        <p className={HelpArticleContentStyle.wallet_list_inactive}>Transfer BNC to MetaMask</p>
        <p className={HelpArticleContentStyle.wallet_list_inactive}>Getting started with Staking</p>
      </div>
    );
  };

  return (
    <div className={"bg-white py-5 px-3 px-md-5 poppins"}>
      <div className="px-0 px-md-2 px-xl-5">
        <div className={`row mx-0`}>
          <div className={`col-12 col-xl-8 px-0 border-bottom`} style={{ paddingBottom: width > 1201 ? "1rem" : "0rem" }}>
            <p className="mb-2 lexend" style={{ color: "#1B2D5B", fontSize: width > 768 ? "36px" : "16px", fontWeight: 700 }}>
              How to create a MetaMask Wallet
            </p>
            <p className="text-darkGray fs-5-4">MetaMask is a cryptocurrency wallet used to interact with the Ethereum blockchain. It can be accessed through an app or through a browser extension.</p>
            <div className="text-darkGray mt-5">
              <StepOne />
              <StepTwo />
              <StepThree />
              <StepFour />
              <StepFive />
              <StepSix />
            </div>
          </div>
          <div className={`col-12 col-xl-4 d-md-flex bulletin-card-justify`}>
            {width > 1199 && (
              <div>
                <WalletHelpList />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpArticleContent;
