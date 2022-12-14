import React from "react";

function DescriptionSection() {
  return (
    <div className="primary-gradient py-5 px-0 px-md-2 px-xl-5">
      <div className="row mx-0">
        <div className="col-12 col-xl-3 d-flex flex-column ps-5 text-center text-md-start justify-content-center">
          <h2 className="fw-bolder text-textLightGray fw-bolder">The Powerful,</h2>
          <h2 className="fw-bolder text-white fw-bolder" style={{ "--bs-border-opacity": 0.77 }}>
            TeraBlock<span className="text-primaryViolet">.</span>
          </h2>
        </div>
        <div className="col-12 col-xl-3 px-5 pt-4">
          <div className="bg-white p-4 rounded h-100 text-center text-md-start">
            <h2 className="fw-bolder">Non Custodial</h2>
            <p className="text-cardDescriptionColor fs-6">Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
          </div>
        </div>
        <div className="col-12 col-xl-3 px-5 pt-4">
          <div className="bg-white p-4 rounded text-center text-md-start">
            <h2 className="fw-bolder">Completely de-Googled</h2>
            <p className="text-cardDescriptionColor fs-6">We don&apos;t cross-associate wallets and don&apos;t even ask for your email addresses.</p>
          </div>
        </div>
        <div className="col-12 col-xl-3 px-5 pt-4">
          <div className="bg-white p-4 rounded text-center text-md-start">
            <h2 className="fw-bolder">Completely de-Googled</h2>
            <p className="text-cardDescriptionColor fs-6">We don&apos;t cross-associate wallets and don&apos;t even ask for your email addresses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
