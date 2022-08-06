import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function AboutUsHeaderSection() {
  const width = getScreenSize().width;
  return (
    <div>
      <div className="pt-5 position-relative">
        <div className="row mx-0">
          <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-around text-center pe-4 text-md-start">
            <h1 className="text-primaryTextDark">
              We are a team of Creators & Innovators<span className="text-primaryViolet">.</span>
            </h1>
            <p className="text-primaryTextGray mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {width > 768 && (
              <div className="mt-4">
                <UIButton type="primary">Know more</UIButton>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img src="./assets/images/about-us-header.png" className={width < 768 ? "w-100 mx-5 px-2" : "w-75"} />
          </div>
          {width < 768 && (
            <div className="d-flex justify-content-center mt-5">
              <UIButton type="primary">Know more</UIButton>
            </div>
          )}
        </div>
        <div className="bg-primaryBlue" style={width > 768 ? { width: "10vw", height: "25vh", position: "fixed", top: 0, right: 0, zIndex: -1 } : { width: "15vw", height: "10vh", position: "absolute", right: 0, bottom: "10%", zIndex: -1 }}></div>
      </div>
      <img src="./assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" />
    </div>
  );
}

export default AboutUsHeaderSection;
