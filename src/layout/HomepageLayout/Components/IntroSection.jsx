import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import IntroSectionStyles from "../Styles/IntroSection.module.css";

function IntroSection() {
  const width = useScreenSize().width;
  return (
    <div className="bg-white text-center text-md-start position-relative">
      <div className="px-xl-5">
        <div style={{ maxWidth: "1500px", margin: "auto" }}>
          <div className="row mx-0 px-4 pt-4">
            <div className="col-12 col-md-8 align-self-center">
              <div className="d-flex flex-column mb-3" style={{ width: "fit-content" }}>
                <div className="d-flex align-items-center">
                  <div>
                    <img src="./assets/images/secure_logo.png" />
                  </div>
                  <div>
                    <p className="mb-0 mx-2 fw-medium" style={{ color: "#0251ff" }}>
                      Your crypto in your control
                    </p>
                  </div>
                </div>
                {/* <img src="./assets/images/underline.svg" style={{ width: "80px", alignSelf: "flex-end", marginRight: "10px" }} /> */}
              </div>
              <div className={IntroSectionStyles.intro_text_section}>
                <p style={{ color: "#1b2b6b", fontSize: "40pt", fontWeight: "600" }}>The wiser way to invest in crypto assets</p>
                <p className="my-4" style={{ color: "#5a5b5b" }}>
                  TeraBlock is a truly decentralised platform that gives you the knowledge, tools and support to manage your crypto better.
                </p>
              </div>
              <div className="d-flex my-2 justify-content-center justify-content-md-start">
                <UIButton type="primary">Get Started</UIButton>
                <UIButton type="secondary">Launch App</UIButton>
              </div>
              <div className={["d-flex justify-content-between justify-content-md-start", IntroSectionStyles.bottom_logos].join(" ")}>
                <img src="./assets/images/coin-telegraph.png" className="px-md-4" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
                <img src="./assets/images/yahoo-finance.png" className="px-md-4" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
                <img src="./assets/images/news-btc.png" className="px-md-4" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
                <img src="./assets/images/coin-quora.png" className="px-md-4" style={{ width: width < 768 && "20%", height: width < 768 && "20%" }} />
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md start position-relative" style={{ alignItems: "end" }}>
              <img src="./assets/images/iphone-12-black.png" style={{ zIndex: 2, objectFit: "contain" }} />
              {/* <img src="./assets/icons/ellipse-red.svg" className="position-absolute" style={{ width: "50px", top: "0rem", right: "1rem" }} />
            <img src="./assets/icons/ellipse-blue.svg" className="position-absolute" style={{ width: "25px", bottom: "0rem", left: "1rem" }} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* {width < 768 && <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "20rem", right: "0rem" }} />} */}

      {/* {width > 768 && <img src="./assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "7rem", left: "5rem" }} />} */}

      <div className="" style={{ backgroundColor: "#0251ff" }}>
        <div className="py-4 row px-4 py-4 justify-content-center" style={{ maxWidth: "1500px", margin: "auto" }}>
          <div className="py-4 col col-md">
            <p className="mb-0 text-center text-white" style={{ fontSize: "20pt", fontWeight: "600" }}>
              $20,000,000
            </p>
            <p className="mb-0 text-center text-white" style={{ fontSize: "12pt" }}>
              Transaction Volume
            </p>
          </div>
          <div className="py-4 col col-md">
            <p className="mb-0 text-center text-white" style={{ fontSize: "20pt", fontWeight: "600" }}>
              2,234,000,000
            </p>
            <p className="mb-0 text-center text-white" style={{ fontSize: "12pt" }}>
              Tokens Transacted
            </p>
          </div>
          <div className="py-4 col col-md">
            <p className="mb-0 text-center text-white" style={{ fontSize: "20pt", fontWeight: "600" }}>
              25,000
            </p>
            <p className="mb-0 text-center text-white" style={{ fontSize: "12pt" }}>
              Secure Transactions
            </p>
          </div>
          <div className="py-4 col col-md">
            <p className="mb-0 text-center text-white" style={{ fontSize: "20pt", fontWeight: "600" }}>
              8,000
            </p>
            <p className="mb-0 text-center text-white" style={{ fontSize: "12pt" }}>
              Happy Users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
