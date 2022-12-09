import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function AboutSwidgeSection() {
  const width = useScreenSize().width;
  // const DataCard = ({ index, description, image }) => {
  //   return (
  //     <UICard>
  //       <div className="d-flex flex-row justify-content-between align-items-center">
  //         <div>
  //           <img src={image} className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
  //         </div>
  //         <h1 className="text-lightBlueText fw-bolder">{index}</h1>
  //       </div>
  //       <p className="h5 mt-3 text-primaryDark text-center text-md-start">{description}</p>
  //     </UICard>
  //   );
  // };
  // const data = [
  //   {
  //     image: "/assets/icons/about-swidge/download.svg",
  //     description: "Download & Activate web3 wallet",
  //   },
  //   {
  //     image: "/assets/icons/about-swidge/select.svg",
  //     description: "Select the game, token & enter unique user id",
  //   },
  //   {
  //     image: "/assets/icons/about-swidge/unique.svg",
  //     description: "Unique web3 address is then created.",
  //   },
  //   {
  //     image: "/assets/icons/about-swidge/purchase.svg",
  //     description: "Purchases crypto using a bank card directly.",
  //   },
  //   {
  //     image: "/assets/icons/about-swidge/token.svg",
  //     description: "Tokens are swapped, bridged & transferred",
  //   },
  // ];

  const DataCard = ({ img, title, desc }) => {
    return (
      <div className="col-6 col-md-4 pb-5">
        <div className="px-0 px-md-4">
          <img src={`/assets/images/swidge/${img}.png`} style={{ width: "60px" }} />
          <p className="my-2 fw-bold" style={{ fontSize: "18px" }}>
            {title}
          </p>
          <p className="" style={{ fontSize: "14px" }}>
            {desc}
          </p>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "Automated",
      desc: "Powerful Web3 multi-protocol automation that helps you onboard Dapps without the complexities of DeFi.",
      img: "4",
    },
    {
      title: "Simplest Onboarding",
      desc: "Buy crypto through more than 16 payment methods or use your existing funds and redeem them in your chosen Dapp.",
      img: "5",
    },
    {
      title: "Multi Tokens Support",
      desc: "Use a wide range of accepted cryptocurrencies and Swidge to popular altcoins and send them to your preferred Dapp.",
      img: "6",
    },
    {
      title: "Low Fees",
      desc: "Through multi-protocol automation, you pay comparatively low fees and without the complications.",
      img: "7",
    },
    {
      title: "Marketwide Interoperability",
      desc: "Swidge provides marketwide interoperability with the help of multi-protocol automation on a multichain unified platform.",
      img: "8",
    },
    {
      title: "Transparent",
      desc: "Swidge is non-custodial, and all the transactions are publicly available on the blockchain explorer.",
      img: "9",
    },
    {
      title: "Time-Saving",
      desc: "Swidge combines the complex steps involved in onboarding Dapps, reducing time and the required learning curve.",
      img: "10",
    },
    {
      title: "24/7 Customer Support",
      desc: "Round the clock dedicated customer support to help you get through if you get stuck.",
      img: "11",
    },
    {
      title: "Secure",
      desc: "Smart contracts independently audited by leading cybersecurity firms.",
      img: "12",
    },
  ];
  return (
    // <div className="pb-5 px-0 px-md-2 px-xl-5">
    //   <div className="position-relative">
    //     <div className="text-center mt-5 px-4 px-md-5">
    //       <h3 className="text-primaryTextDark fw-bold">
    //         <b>
    //           Build your truly decentralised crypto portfolio<span className="text-primaryViolet">.</span>
    //         </b>
    //       </h3>
    //       <p className="text-primaryTextGray">Get started in a few minutes with these easy steps.</p>
    //     </div>
    //     <div className="row mx-4 mx-md-3 mx-xl-5 mt-5 justify-content-center">
    //       {data.map((data, index) => (
    //         <div className="col-12 col-md-4 px-3" key={index}>
    //           <DataCard index={index + 1} description={data.description} image={data.image} />
    //         </div>
    //       ))}
    //     </div>
    //     {width > 768 && <img src="/assets/icons/4x5.svg" className="position-absolute" style={{ bottom: "4rem", left: "4rem", zIndex: "0" }} />}
    //     <img src="/assets/icons/4x5.svg" className="position-absolute" style={{ bottom: width > 768 ? "4rem" : "3rem", right: width > 768 ? "4rem" : "0.5rem", zIndex: "0" }} />
    //   </div>
    //   <StartCryptoJourneyCard />
    // </div>
    <div className="py-5 px-2 px-md-0" style={{ color: "#1b2b6b" }}>
      <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "71%" : width > 940 ? "83%" : "98%" }}>
        <h3 className="text-center px-3 px-md-0 pt-md-5">
          <b>Swidge is the simplest way to onboard a Dapp</b>
        </h3>
        <div className="row mx-0 pt-5">
          {data.map((a, i) => (
            <DataCard key={i} title={a.title} desc={a.desc} img={a.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSwidgeSection;
