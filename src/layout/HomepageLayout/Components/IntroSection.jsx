import React, { useState, useEffect } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import IntroSectionStyles from "../Styles/IntroSection.module.css";
import CountUp from "react-countup";
import { abbreviateNumber } from "../../../functions/abbreviateNumber";
import axios from "axios";

function IntroSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://tersblock-stats-be-p6as9.ondigitalocean.app/ecosystemstats").then((res) => {
      setData(res.data.data);
      console.log(data, 'this is the api for market stats....')
    });
  }, []);
  const dictionary = [
    {
      id: 1,
      title: 'Transaction Volume',
      value: data?.totalVolume
    },
    {
      id: 2,
      title: 'Tokens Transacted',
      value: data?.totalTokens
    },
    {
      id: 3,
      title: 'Secure Transactions',
      value: data?.totalTransactions
    },
    {
      id: 4,
      title: 'Happy Users',
      value: data?.uniqueUsers
    }
  ]
  return (
    <div className={`bg-white text-center text-md-start position-relative ${(width > 1400 || width < 800) && "pt-5"}`}>
      <div className={`px-xl-5`}>
        {/* <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}> */}
        <div style={{ width: width > 1499 ? "81%" : "100%", margin: "auto", maxWidth: "1700px" }}>
          <div className={`row mx-0 px-sm-4 px-md-2 pt-0 pt-md-4`}>
            <div className="col-12 col-md-8 align-self-center">
              <div className="d-flex flex-column mb-3 m-auto m-md-0" style={{ width: "fit-content" }}>
                <div className="d-flex align-items-center">
                  <div>
                    <img src="/assets/icons/homepage/notif.png" style={{ width: "16px" }} />
                  </div>
                  <div>
                    <p className="mb-0 mx-2 fw-medium text-center text-md-start" style={{ color: "#0251ff" }}>
                      Your crypto in your control
                    </p>
                  </div>
                </div>
                {/* <img src="/assets/images/underline.svg" style={{ width: "80px", alignSelf: "flex-end", marginRight: "10px" }} /> */}
              </div>
              <div className={IntroSectionStyles.intro_text_section}>
                <p className={`${(width < 1400 || width > 800) && "mb-0"} mt-3`} style={{ color: "#1b2b6b", fontSize: width > 1500 ? "40pt" : width > 767 ? "24pt" : "30px", fontWeight: "600", lineHeight: width > 1500 ? "65px" : "40px" }}>
                  The wiser way to invest in crypto assets
                </p>
                <p className="my-4" style={{ color: "#5a5b5b" }}>
                  TeraBlock is a truly decentralised platform that gives you the knowledge, tools and support to manage your crypto better.
                </p>
              </div>
              <div className="d-flex my-2 justify-content-center justify-content-md-start">
                <UIButton ml0 type="primary" width="150px" style={{ marginRight: "10px" }} onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
                  {buttonText}
                </UIButton>
                <UIButton type="secondary" onClick={() => {
                  window.open("https://bridge.terablock.com/bridge", "_blank");
                }}>Launch App</UIButton>
              </div>
              <div className={["d-flex justify-content-around justify-content-md-start", IntroSectionStyles.bottom_logos].join(" ")}>
                <a href="https://cointelegraph.com/press-releases/terablock-and-splinterlands-collaborate-take-defi-gaming-to-new-heights" target="_blank">
                  <img src="/assets/icons/homepage/CT.png" className="pe-md-4" style={{ width: width < 768 ? "100px" : "170px" }} />
                </a>
                <a href="https://finance.yahoo.com/news/ai-based-trade-automation-case-000000108.html" target="_blank">
                  <img src="/assets/icons/homepage/YF.png" className="px-md-4" style={{ width: width < 768 ? "50px" : "100px" }} />
                </a>
                <a href="https://www.investing.com/news/cryptocurrency-news/terablock-raised-24m-in-funds-to-build-crypto-exchange-2478985" target="_blank">
                  <img src="/assets/icons/homepage/IC.png" className="px-md-4" style={{ width: width < 768 ? "60px" : "140px" }} />
                </a>
                <a href="https://www.newsbtc.com/news/company/all-you-want-to-know-about-automated-crypto-trading/" target="_blank">
                  <img src="/assets/icons/homepage/NBTC.png" className="ps-md-4" style={{ width: width < 768 ? "60px" : "140px" }} />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md start position-relative" style={{ alignItems: "end" }}>
              <img src="/assets/icons/homepage/Hero_Trade2.png" style={{ zIndex: 2, objectFit: "contain", width: width < 1400 || width > 800 ? "75%" : "90%", maxWidth: "300px" }} />
              {/* <img src="/assets/icons/ellipse-red.svg" className="position-absolute" style={{ width: "50px", top: "0rem", right: "1rem" }} />
            <img src="/assets/icons/ellipse-blue.svg" className="position-absolute" style={{ width: "25px", bottom: "0rem", left: "1rem" }} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* {width < 768 && <img src="/assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "20rem", right: "0rem" }} />} */}
      {/* {width > 768 && <img src="/assets/icons/3x4.svg" className="position-absolute" style={{ width: "30px", bottom: "7rem", left: "5rem" }} />} */}
      <div className="" style={{ backgroundColor: "#0251ff" }}>
        <div className="py-4 row px-0 px-sm-4 py-4 justify-content-center" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "100%" }}>
          {dictionary?.map((el, index) => (
            <div className="py-4 col col-md px-2">
              <p className="mb-0 text-center text-white" style={{ fontSize: width > 767 ? "20pt" : "17pt", fontWeight: "600" }}>
                {index == 0 ? '$' : ''} {width > 767 ? <CountUp duration={2} end={el.value} separator="," /> : abbreviateNumber(Math.round(el.value))}
              </p>
              <p className="mb-0 text-center text-white" style={{ fontSize: width > 767 ? "12pt" : "14px", whiteSpace: 'nowrap' }}>
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
