import React from "react";

function AboutTerablockSection() {
  return (
    <div className="primary-gradient py-5 px-2 px-md-5">
      <h1 className="text-white text-center px-3 px-md-0">What makes TeraBlock better?</h1>
      <div className="row mx-0 pt-5">
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/diversified.png" />
            <p className="text-white my-2 fw-normal fs-5">Diversified investing.</p>
            <p className="text-white fs-6 fw-light">Create your own portfolio, or invest in decetralised staking pools to earn attractive interest rates.</p>
          </div>
        </div>
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/transparent-pricing.png" />
            <p className="text-white my-2 fw-normal fs-5">Transparent pricing.</p>
            <p className="text-white fs-6 fw-light">Keep things simple with no extra subscription or management fees, only pay standard trading fees.</p>
          </div>
        </div>
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/investing-easy.png" />
            <p className="text-white my-2 fw-normal fs-5">Making investing easy.</p>
            <p className="text-white fs-6 fw-light">Simplest platform to start trading cryptocurrencies with no prior experience.</p>
          </div>
        </div>
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/track-finance.png" />
            <p className="text-white my-2 fw-normal fs-5">Track your finances.</p>
            <p className="text-white fs-6 fw-light">Connect all Web3 wallets and manage your decentalised financial life in one place.</p>
          </div>
        </div>
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/buy-crypto.png" />
            <p className="text-white my-2 fw-normal fs-5">Buy crypto instantly.</p>
            <p className="text-white fs-6 fw-light">Easily buy cryptocurrencies with bank card directly to a web3 wallet. </p>
          </div>
        </div>
        <div className="col-6 col-md-4 pb-5">
          <div className="px-0 px-md-4">
            <img src="./assets/images/non-custodial.png" />
            <p className="text-white my-2 fw-normal fs-5">Non custodial.</p>
            <p className="text-white fs-6 fw-light">Your crypto in your control! You retain full custody of your funds at all times.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTerablockSection;
