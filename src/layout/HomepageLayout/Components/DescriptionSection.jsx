import React from "react";

function DescriptionSection() {
  return (
    <div className="bg-primaryBlue py-5">
      <div className="row mx-0">
        <div className="col-12 col-md-3 d-flex flex-column ps-5 text-center text-md-start justify-content-center">
          <h2 className="fw-bolder text-textLightGray">The Powerful,</h2>
          <h2 className="fw-bolder text-white" style={{ "--bs-border-opacity": 0.77 }}>
            TeraBlock<span className="text-primaryViolet">.</span>
          </h2>
        </div>
        <div className="col-12 col-md-3 px-5 pt-4">
          <div className="bg-white p-4 rounded h-100 text-center text-md-start">
            <h3 className="fw-bolder">Non Custodial</h3>
            <p className="text-cardDescriptionColor fs-6">Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
          </div>
        </div>
        <div className="col-12 col-md-3 px-5 pt-4">
          <div className="bg-white p-4 rounded text-center text-md-start">
            <h3 className="fw-bolder">Completely de-Googled</h3>
            <p className="text-cardDescriptionColor fs-6">We don't cross-associate wallets and don't even ask for your email addresses.</p>
          </div>
        </div>
        <div className="col-12 col-md-3 px-5 pt-4">
          <div className="bg-white p-4 rounded text-center text-md-start">
            <h3 className="fw-bolder">Completely de-Googled</h3>
            <p className="text-cardDescriptionColor fs-6">We don't cross-associate wallets and don't even ask for your email addresses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
