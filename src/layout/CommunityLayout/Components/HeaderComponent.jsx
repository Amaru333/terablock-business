import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function HeaderComponent() {
  const screenSize = useScreenSize();
  return (
    <div className="primary-reverse-gradient px-0 px-md-2 px-xl-5">
      <div className="row mx-0 px-3 px-md-5 py-5">
        <div className="col-12 col-md-6 text-center text-md-start d-flex flex-column justify-content-evenly">
          <div className={screenSize.width > 768 ? "w-75" : "w-100"}>
            <h1 className="text-white">
              TeraBlock community built for the best<span className="text-primaryViolet">.</span>
            </h1>
          </div>
          <div className={screenSize.width > 768 ? "w-75" : "w-100"}>
            <p className="text-white fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {screenSize.width > 768 && (
            <>
              <div>
                <UIButton type="secondary">Get Started</UIButton>
              </div>
              <img src="./assets/icons/3x4-light.png" className="mt-1" style={{ width: "30px" }} />
            </>
          )}
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <img src="./assets/images/community-header.png" className={`pe-0 mt-3 mt-md-0 pe-md-5`} style={{ maxWidth: screenSize.width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
