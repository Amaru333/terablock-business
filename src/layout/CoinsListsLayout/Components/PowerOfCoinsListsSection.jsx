import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function PowerOfCoinsListsSection() {
  const width = useScreenSize().width;
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
      title: "Be in control",
      description: "Unlike most  platforms, CoinsLists are Non-Custodial and fully Decentralized.",
      image: "/assets/icons/terablock-swidge/ease.svg",
    },
    {
      title: "Set yourself free",
      description: "CoinsList is a set and forget approach to investing in Cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/cost.svg",
    },
    {
      title: "Don't just buy - invest",
      description: "CoinsList lets you Invest in Cryptocurrencies with a long-term view of building wealth.",
      image: "/assets/icons/terablock-swidge/ux.svg",
    },
    {
      title: "Easy diversification",
      description: "We help you build a diversified portfolio by easily spreading your funds.",
      image: "/assets/icons/terablock-swidge/fast.svg",
    },
    {
      title: "Simplified investing",
      description: "Helps you get invested in multiple Cryptocurrencies with just a few clicks.",
      image: "/assets/icons/terablock-swidge/one-stop.svg",
    },
    {
      title: "Transparent",
      description: "No hidden fees of extra charges. We keep things simple with one simple transaction fees.",
      image: "/assets/icons/terablock-swidge/interoperability.svg",
    },
    {
      title: "At your fingertips",
      description: "Our easy to use platform empowers you and gives you the tools to track and manage your money at all times.",
      image: "/assets/icons/terablock-swidge/secure.svg",
    },
    {
      title: "Easy to use",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "/assets/icons/terablock-swidge/support.svg",
    },
  ];

  const DescCard = ({ title, desc, img }) => {
    return (
      <div className="d-flex mb-4">
        <div>
          <img src={`/assets/images/${img}.png`} style={{ width: "64px" }} />
        </div>
        <div className="ps-4" style={{ maxWidth: "400px", color: "#1b2b6b" }}>
          <p className="mb-1" style={{ fontSize: "16px", fontWeight: "600" }}>
            {title}
          </p>
          <p className="mb-0" style={{ fontSize: "13px" }}>
            {desc}
          </p>
        </div>
      </div>
    );
  };

  const desc_data = [
    {
      title: "Buy multiple cryptocurrencies in 1 click",
      desc: "Place orders for multiple cryptocurrencies in 1 click as CoinsList and save time.",
      img: "9",
    },
    {
      title: "Track CoinsLists",
      desc: "Track and manage seamlessly with a real-time value on a multi-protocol unified platform.",
      img: "12",
    },
    {
      title: "Invest regularly with SIPs",
      desc: "Start a SIP on your CoinsLists for every week, month, or quarter to invest systematically.",
      img: "27",
    },
    {
      title: "0% Advisory fee",
      desc: "Keep more money in your portfolio with no advisory fee, only the fees  associated with trading expenses.",
      img: "14",
    },
    {
      title: "Low investment amount",
      desc: "Start small budget investment for $100.",
      img: "15",
    },
  ];
  return (
    <div className="bg-white px-0 px-md-2 px-xl-5">
      <div className="py-4 pb-5" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "95%" }}>
        <div className="flex flex-column justify-content-center align-items-center pb-4">
          <h2 className="text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center" style={{ color: "#1b2b6b" }}>
            <span>
              <b>Easy, quick and diversified investment for you</b>
            </span>
          </h2>
          <p className="text-center" style={{ color: "#5a5b5b" }}>
            Long-term investment portfolios designed by experts
          </p>
        </div>
        <div className="row mx-2 mx-xl-5 justify-content-center">
          <div className="col-12 col-md-6 justify-content-center justify-content-md-start align-items-center d-flex">
            <img src="/assets/images/coinsLists_feature.png" style={{ maxWidth: "250px" }} />
          </div>
          <div className="col-12 col-md-6 justify-content-center align-items-center d-flex">
            <div className="d-flex flex-column pt-4 pt-md-0">
              {desc_data.map((data) => (
                <DescCard title={data.title} img={data.img} desc={data.desc} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row mx-0 justify-content-center">
        {descriptionData.map((data, index) => (
          <div className="col-6 col-md-4 col-xl-3 px-3 px-md-5 pb-3 pb-md-5" key={index}>
            <DescriptionCard title={data.title} image={data.image} description={data.description} />
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default PowerOfCoinsListsSection;
