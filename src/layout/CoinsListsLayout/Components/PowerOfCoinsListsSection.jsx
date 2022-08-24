import React from "react";

function PowerOfCoinsListsSection() {
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
      image: "./assets/icons/terablock-swidge/ease.svg",
    },
    {
      title: "Set yourself free",
      description: "CoinsList is a set and forget approach to investing in Cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/cost.svg",
    },
    {
      title: "Don't just buy - invest",
      description: "CoinsList lets you Invest in Cryptocurrencies with a long-term view of building wealth.",
      image: "./assets/icons/terablock-swidge/ux.svg",
    },
    {
      title: "Easy diversification",
      description: "We help you build a diversified portfolio by easily spreading your funds.",
      image: "./assets/icons/terablock-swidge/fast.svg",
    },
    {
      title: "Simplified investing",
      description: "Helps you get invested in multiple Cryptocurrencies with just a few clicks.",
      image: "./assets/icons/terablock-swidge/one-stop.svg",
    },
    {
      title: "Transparent",
      description: "No hidden fees of extra charges. We keep things simple with one simple transaction fees.",
      image: "./assets/icons/terablock-swidge/interoperability.svg",
    },
    {
      title: "At your fingertips",
      description: "Our easy to use platform empowers you and gives you the tools to track and manage your money at all times.",
      image: "./assets/icons/terablock-swidge/secure.svg",
    },
    {
      title: "Easy to use",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/support.svg",
    },
  ];
  return (
    <div className="primary-gradient px-0 px-md-2 px-xl-5">
      <div className="flex flex-column justify-content-center align-items-center pb-4">
        <h2 className="text-white text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center">
          <span>
            <b>The Power of CoinsLists</b>
            <span className="text-primaryViolet">.</span>
          </span>
        </h2>
        <p className="text-center text-white mt-3 fs-6 fw-lighter">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-0 justify-content-center">
        {descriptionData.map((data, index) => (
          <div className="col-6 col-md-4 col-xl-3 px-3 px-md-5 pb-3 pb-md-5" key={index}>
            <DescriptionCard title={data.title} image={data.image} description={data.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PowerOfCoinsListsSection;
