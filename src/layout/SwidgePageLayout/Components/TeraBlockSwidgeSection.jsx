import React from "react";

function TeraBlockSwidgeSection() {
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
      image: "./assets/icons/terablock-swidge/ease.svg",
    },
    {
      title: "Cost effective",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/cost.svg",
    },
    {
      title: "Simplified UX",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/ux.svg",
    },
    {
      title: "Fast & Efficient",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/fast.svg",
    },
    {
      title: "One stop solution",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies..",
      image: "./assets/icons/terablock-swidge/one-stop.svg",
    },
    {
      title: "Interoperability",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/interoperability.svg",
    },
    {
      title: "Highly Secure",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies..",
      image: "./assets/icons/terablock-swidge/secure.svg",
    },
    {
      title: "Customer support",
      description: "The tools and information you need to buy, sell, trade, invest, and manage cryptocurrencies.",
      image: "./assets/icons/terablock-swidge/support.svg",
    },
  ];
  return (
    <div className="primary-gradient">
      <div className="flex flex-column justify-content-center align-items-center pb-4">
        <h2 className="text-white text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center">
          <span>
            <b>Why TeraBlock Swidge is best</b>
            <span className="text-primaryViolet">.</span>
          </span>
        </h2>
        <p className="text-center text-white mt-3 fs-6 fw-lighter">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-0 justify-content-center">
        {descriptionData.map((data) => (
          <div className="col-6 col-md-4 col-xl-3 px-3 px-md-5 pb-3 pb-md-5">
            <DescriptionCard title={data.title} image={data.image} description={data.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeraBlockSwidgeSection;
