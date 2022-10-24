import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function CoinsListsHeader() {
  const width = useScreenSize().width;
  return (
    <div className="pb-5 px-0 px-md-2 px-xl-5">
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="pt-5 position-relative">
          <div className="row mx-0" style={{ zIndex: 1 }}>
            <div className="my-5 px-4 px-md-5 col-12 col-md-6 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
              <h1 className="fw-bold" style={{ color: "#1b2b6b" }}>
                CoinsLists
              </h1>
              <p className="mb-0 fs-6" style={{ color: "#5a5b5d" }}>
                CoinsLists is our carefully selected portfolio of cryptocurrencies that reflects a theme, idea or goal.
              </p>
              {width > 768 && (
                <>
                  <div className="mt-4">
                    <UIButton type="primary">Get Started</UIButton>
                    <UIButton type="secondary">Discover CoinsLists</UIButton>
                  </div>
                  {/* <p className="text-primaryTextGray mt-3">
                  Have any questions? <span className="text-primaryBlue fw-bold">Contact us</span>
                </p> */}
                </>
              )}
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src="/assets/images/coinslists/coinslists-header.svg" style={{ zIndex: 1, maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
            </div>
            {width < 768 && (
              <>
                <div className="d-flex justify-content-center mt-5">
                  <UIButton type="primary">Get Started</UIButton>
                  <UIButton type="secondary">Discover CoinsLists</UIButton>
                </div>
                {/* <p className="text-primaryTextGray mt-3 text-center">
                Have any questions? <span className="text-primaryBlue fw-bold">Contact us</span>
              </p> */}
              </>
            )}
          </div>
        </div>
        {/* <img src="/assets/icons/3x4.svg" width="30px" className="ms-5 mt-3" /> */}
      </div>
    </div>
  );
}

export default CoinsListsHeader;
