import React from "react";

function DescriptionSection() {
  const DescriptionCard = ({ image, title, description }) => {
    return (
      <>
        <img src={image} style={{ width: "60px" }} />
        <h5 className="text-white mt-3">{title}</h5>
        <p className="text-white fw-lighter">{description}</p>
      </>
    );
  };
  const descriptionData = [
    {
      title: "One stop solution",
      description: "A comprehensive crypto ecosystem that allows you to retain and optimize your crypto assets.",
      image: "./assets/images/product_description/one-stop.png",
    },
    {
      title: "Secure & Accountable",
      description: "Our smart contracts have been extensively audited by Hacken for system vulnerabilities and security problems.",
      image: "./assets/images/product_description/secure.png",
    },
    {
      title: "Simplified UI",
      description: "Simple, user-driven, and responsive interface that lets you access your crypto within seconds.",
      image: "./assets/images/product_description/simplified.png",
    },
    {
      title: "Decentralized",
      description: "TeraBlock is a non-restrictive and radically decentralized ecosystem that helps you optimize your investments in a secure way.",
      image: "./assets/images/product_description/decentralized.png",
    },
    {
      title: "Robust & Scalable",
      description: "We employ the best talent and technology in the market to create sustainable and long-term products.",
      image: "./assets/images/product_description/robust.png",
    },
    {
      title: "Community Driven",
      description: "We strive to create an inclusive, transparent, and trustworthy ecosystem of stakeholders.",
      image: "./assets/images/product_description/community.png",
    },
    {
      title: "Reward Driven",
      description: "We make sure our community gets rewarded in the most efficient manner. Our staking & farming protocols help our users earn juicy yields.",
      image: "./assets/images/product_description/reward.png",
    },
    {
      title: "UtilityDriven",
      description: "Featuring sophisticated & professional DeFi tools, TeraBlock ecosystem is designed to help novice traders optmize their investments.",
      image: "./assets/images/product_description/utility.png",
    },
  ];
  return (
    <div className="bg-investmentGraphBg ">
      <div className="flex flex-column justify-content-center align-items-center pb-4">
        <h2 className="text-white text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center">
          <span>
            <b>TeraBlock</b>,
          </span>
          <span>
            {" "}
            your crypto solution<span className="text-primaryViolet">.</span>
          </span>
        </h2>
        <p className="text-center text-white mt-3 fs-6 fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className="row mx-0">
        {descriptionData.map((data) => (
          <div className="col-6 col-md-3 px-3 px-md-5 pb-3 pb-md-5 text-center text-md-start">
            <DescriptionCard title={data.title} image={data.image} description={data.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionSection;
