import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function AboutSwidgeSection() {
  const DataCard = ({ index, description, image }) => {
    return (
      <UICard>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            <img src={image} className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
          </div>
          <h1 className="text-lightBlueText fw-bolder">{index}</h1>
        </div>
        <p className="h5 mt-3 text-primaryDark text-center text-md-start">{description}</p>
      </UICard>
    );
  };
  const data = [
    {
      image: "./assets/icons/about-swidge/download.svg",
      description: "Download & Activate web3 wallet",
    },
    {
      image: "./assets/icons/about-swidge/select.svg",
      description: "Select the game, token & enter unique user id",
    },
    {
      image: "./assets/icons/about-swidge/unique.svg",
      description: "Unique web3 address is then created.",
    },
    {
      image: "./assets/icons/about-swidge/purchase.svg",
      description: "Purchases crypto using a bank card directly.",
    },
    {
      image: "./assets/icons/about-swidge/token.svg",
      description: "Tokens are swapped, bridged & transferred",
    },
  ];
  const width = useScreenSize().width;
  return (
    <div className="pb-5 px-0 px-md-2 px-xl-5">
      <div className="position-relative">
        <div className="text-center mt-5 px-4 px-md-5">
          <h3 className="text-primaryTextDark fw-bold">
            <b>
              Build your truly decentralised crypto portfolio<span className="text-primaryViolet">.</span>
            </b>
          </h3>
          <p className="text-primaryTextGray">Get started in a few minutes with these easy steps.</p>
        </div>
        <div className="row mx-4 mx-md-3 mx-xl-5 mt-5 justify-content-center">
          {data.map((data, index) => (
            <div className="col-12 col-md-4 px-3" key={index}>
              <DataCard index={index + 1} description={data.description} image={data.image} />
            </div>
          ))}
        </div>
        {width > 768 && <img src="./assets/icons/4x5.svg" className="position-absolute" style={{ bottom: "4rem", left: "4rem", zIndex: "0" }} />}
        <img src="./assets/icons/4x5.svg" className="position-absolute" style={{ bottom: width > 768 ? "4rem" : "3rem", right: width > 768 ? "4rem" : "0.5rem", zIndex: "0" }} />
      </div>
      <StartCryptoJourneyCard />
    </div>
  );
}

export default AboutSwidgeSection;
