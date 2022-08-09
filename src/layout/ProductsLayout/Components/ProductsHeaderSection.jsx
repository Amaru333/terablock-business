import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import { getScreenSize } from "../../../functions/getScreenSize";

function ProductsHeaderSection() {
  const width = getScreenSize().width;
  return (
    <div>
      <div className="row mx-0">
        <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-around text-center pe-4 text-md-start">
          <h1 className="text-primaryTextDark">
            TeraBlock products built for all<span className="text-primaryViolet">.</span>
          </h1>
          <p className="text-primaryTextGray mb-0">Truly decentralised app that gives you the tools, inspiration, and support you need to become a better crypto investor.</p>
          {width > 768 && (
            <>
              <UIButton type="primary">Get Started</UIButton>
              <img src="./assets/icons/3x4.svg" style={{ width: "30px" }} />
            </>
          )}
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product-header.png" className={width < 768 ? "w-100" : ""} />
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
