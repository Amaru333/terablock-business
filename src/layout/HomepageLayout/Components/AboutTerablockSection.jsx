import React from "react";

function AboutTerablockSection() {
  return (
    <div className="py-5 px-2 px-md-5" style={{ backgroundColor: "#0251ff" }}>
      <div className="py-4" style={{ maxWidth: "1320px", margin: "auto" }}>
        <h3 className="text-white text-center px-3 px-md-0 pt-md-5">
          <b>What makes TeraBlock better?</b>
        </h3>
        <div className="row mx-0 pt-5">
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Investing.svg" />
              <p className="text-white my-2 fw-normal fs-5">Investing made simple</p>
              <p className="text-white fs-6 fw-light">The simplest one-stop decentralised finance (DeFi) platform to help you benefit from the cryptocurrency revolution.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Portfolio-3.svg" />
              <p className="text-white my-2 fw-normal fs-5">Complete Portfolio Overview</p>
              <p className="text-white fs-6 fw-light">Track multiple wallets across blockchains and get a unified overview of your entire Web3 wealth with the wallet manager.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/BuyCrypto-1.svg" />
              <p className="text-white my-2 fw-normal fs-5">Easily Buy Crypto</p>
              <p className="text-white fs-6 fw-light">Purchase a range of cryptocurrencies directly to your web3 wallet with over 16 payment methods in 180 countries.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Swap.svg" />
              <p className="text-white my-2 fw-normal fs-5">Multichain Swap</p>
              <p className="text-white fs-6 fw-light">Innovative multichain liquidity aggregator to help you easily exchange your crypto assets at the best rates in the market across blockchains.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Automation-2.svg" />
              <p className="text-white my-2 fw-normal fs-5">Automation</p>
              <p className="text-white fs-6 fw-light">Multi-protocol automation to help you easily navigate through the complexities of Defi.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Decentralized.png" />
              <p className="text-white my-2 fw-normal fs-5">Decentralised</p>
              <p className="text-white fs-6 fw-light">We don't track your data or cross-associate wallets. We do not store your private keys or seed phrase.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Non-Custodial.svg" />
              <p className="text-white my-2 fw-normal fs-5">Non-Custodial</p>
              <p className="text-white fs-6 fw-light">Nobody can suspend your wallet, freeze your money, or stop your transactions. You are always in control of your crypto!</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Fee.svg" />
              <p className="text-white my-2 fw-normal fs-5">0% advisory fees</p>
              <p className="text-white fs-6 fw-light">Keep more money in your portfolio with no advisory fee, only the fees associated with trading expenses.</p>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-5">
            <div className="px-0 px-md-4">
              <img src="/assets/images/Secure.svg" />
              <p className="text-white my-2 fw-normal fs-5">Secure</p>
              <p className="text-white fs-6 fw-light">Smart contracts are independently audited by leading cybersecurity firms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTerablockSection;
