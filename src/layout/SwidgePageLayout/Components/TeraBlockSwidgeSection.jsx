import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UICard from "../../../widgets/UICard/UICard";

function TeraBlockSwidgeSection() {
  const width = useScreenSize().width;
  const [buttonText, setButtonText] = useState("Get Started");
  const DescriptionCard = ({ image, title, description }) => {
    return (
      <>
        <img src={image} style={{ width: "42px" }} className="bg-white rounded p-2" />
        <h5 className="text-white mt-3">{title}</h5>
        <p className="text-white fw-lighter">{description}</p>
      </>
    );
  };
  const descriptionData = [
    {
      title: "Ease of use",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/ease.svg",
    },
    {
      title: "Cost effective",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/cost.svg",
    },
    {
      title: "Simplified UX",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/ux.svg",
    },
    {
      title: "Fast & Efficient",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/fast.svg",
    },
    {
      title: "One stop solution",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies..",
      image: "/assets/icons/terablock-swidge/one-stop.svg",
    },
    {
      title: "Interoperability",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/interoperability.svg",
    },
    {
      title: "Highly Secure",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies..",
      image: "/assets/icons/terablock-swidge/secure.svg",
    },
    {
      title: "Customer support",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/support.svg",
    },
  ];
  const openNewTab = (link) => {
    window.open(link, '_blank')
  }
  return (
    // <div className="primary-gradient px-0 px-md-2 px-xl-5">
    //   <div className="flex flex-column justify-content-center align-items-center pb-4">
    //     <h2 className="text-white text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center">
    //       <span>
    //         <b>Why TeraBlock Swidge is best</b>
    //         <span className="text-primaryViolet">.</span>
    //       </span>
    //     </h2>
    //     <p className="text-center text-white mt-3 fs-6 fw-lighter">Get to know the people and communities pushing the crypto economy forward</p>
    //   </div>
    //   <div className="row mx-0 justify-content-center">
    //     {descriptionData.map((data, index) => (
    //       <div className="col-6 col-md-4 col-xl-3 px-3 px-md-5 pb-3 pb-md-5" key={index}>
    //         <DescriptionCard title={data.title} image={data.image} description={data.description} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="py-5" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center pt-5 px-4 px-md-5">
        <h2 className="text-white fw-bold">
          <b>How does it work?</b>
        </h2>
        <p className="text-white">Follow a guided three steps process to onboard a Dapp in under 5 mins.</p>
      </div>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "71%" : width > 940 ? "84%" : "96%" }}>
        <div className="row mx-3 mx-md-0 mt-5 position-relative">
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                {width < 769 && (
                  <div>
                    <h1 className="text-lightBlueText fw-bolder" style={{ visibility: "hidden" }}>
                      3
                    </h1>
                  </div>
                )}
                <div>
                  <img src="/assets/images/swidge/1.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ width: "60px", "--bs-border-opacity": 0.2 }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">1</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Create Web3 wallet</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                Follow simple step-by-step guided process to create a new Web3 wallet or connect an existing wallet.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                {width < 769 && (
                  <div>
                    <h1 className="text-lightBlueText fw-bolder" style={{ visibility: "hidden" }}>
                      3
                    </h1>
                  </div>
                )}
                <div>
                  <img src="/assets/images/swidge/2.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ width: "60px", "--bs-border-opacity": 0.2 }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">2</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Buy</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                Buy accepted cryptocurrencies through convenient payment methods or select from your existing funds.
              </p>
            </UICard>
          </div>
          <div className="col-12 col-md-4 px-3 px-md-0 px-xl-3">
            <UICard>
              <div className="d-flex flex-row justify-content-between align-items-center">
                {width < 769 && (
                  <div>
                    <h1 className="text-lightBlueText fw-bolder" style={{ visibility: "hidden" }}>
                      3
                    </h1>
                  </div>
                )}
                <div>
                  <img src="/assets/images/swidge/3.png" className="bg-cardImageBg border border-cardImageBorder rounded" style={{ width: "60px", "--bs-border-opacity": 0.2 }} />
                </div>
                <h1 className="text-lightBlueText fw-bolder">3</h1>
              </div>
              <p className="fs-4 fw-bolder text-primaryBlue mt-2 text-center text-md-start">Swap + Bridge</p>
              <p className="fs-6 text-primaryTextGray" style={{ textAlign: "justify" }}>
                One-click approval and your selected cryptocurrency is instantly converted and transferred to your in-game or Dapp wallet.
              </p>
            </UICard>
          </div>
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ width: "60px", position: "absolute", bottom: "2rem", left: "1rem" }} />}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2 mb-5">
        <UIButton width="150px" onClick={() => openNewTab('https://app.terablock.com/login')} onMouseOut={() => setButtonText("Get Started")}>
          {buttonText}
        </UIButton>
        <UIButton type="primary-light" onClick={()=>{open("https://app.terablock.com/login")}}>Launch Swidge</UIButton>
      </div>
    </div>
  );
}

export default TeraBlockSwidgeSection;
