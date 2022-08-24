import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function AboutUsHeaderSection() {
  const width = useScreenSize().width;
  return (
    <div className="pb-5 px-0 px-md-2 px-xl-5">
      <div className="pt-5 position-relative">
        <div className="row mx-0" style={{ zIndex: 1 }}>
          <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-around text-center pe-4 text-md-start">
            <h1 className="text-primaryTextDark">
              We are a team of Creators & Innovators<span className="text-primaryViolet">.</span>
            </h1>
            <p className="text-primaryTextGray mb-0 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {width > 768 && (
              <div className="mt-4">
                <UIButton type="primary">Know more</UIButton>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img src="./assets/images/about-us-header.png" style={{ zIndex: 1, maxWidth: width > 768 ? "45vw" : "80vw", objectFit: "contain" }} />
          </div>
          {width < 768 && (
            <div className="d-flex justify-content-center mt-5">
              <UIButton type="primary">Know more</UIButton>
            </div>
          )}
        </div>
        <div className="bg-primaryBlue" style={width > 768 ? { width: "10vw", height: "25vh", position: "absolute", top: 0, right: 0, zIndex: 0 } : { width: "15vw", height: "10vh", position: "absolute", right: 0, bottom: "10%", zIndex: 0 }}></div>
      </div>
      <img src="./assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" />
    </div>
  );
}

export default AboutUsHeaderSection;
