import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import { useScreenSize } from "../../../functions/useScreenSize";

function ProductsHeaderSection() {
  const width = useScreenSize().width;
  return (
    <div className="px-0 px-md-2 px-xl-5">
      <div className="row mx-0">
        <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-around text-center pe-4 text-md-start">
          <h1 className="text-primaryTextDark fw-bold" style={{ fontSize: width > 768 ? "58px" : "23px", width: width > 768 ? "75%" : "100%" }}>
            TeraBlock products built for all<span className="text-primaryViolet">.</span>
          </h1>
          <p className="text-primaryTextGray mb-0 mb-md-5">Truly decentralised app that gives you the tools, inspiration, and support you need to become a better crypto investor.</p>
          {width > 768 && (
            <>
              <UIButton type="primary">Get Started</UIButton>
              <img src="/assets/icons/3x4.svg" style={{ width: "30px" }} className="mt-5" />
            </>
          )}
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="/assets/images/product-header.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
        {width < 768 && (
          <div className="d-flex justify-content-center mt-2">
            <UIButton type="primary">Get Started</UIButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsHeaderSection;
