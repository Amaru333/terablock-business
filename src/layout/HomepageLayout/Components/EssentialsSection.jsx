import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UIImageCard from "../../../widgets/UICard/UIImageCard";

import EssentialsSectionStyle from "../Styles/EssentialsSection.module.css";

function EssentialsSection() {
  const width = useScreenSize().width;
  const essential_details = [
    {
      image: "/assets/images/learn-image-1.png",
      title: "Bitcoin; Explained",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/what-is-bitcoin/",
    },
    {
      image: "/assets/images/learn-image-2.png",
      title: "What is Ethereum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/what-is-ethereum/",
    },
    {
      image: "/assets/images/learn-image-3.png",
      title: "What is Decentralised Finance (DeFi)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/what-is-decentralised-finance-defi/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "Understanding Web3: The gateway to a decentralized world",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/understand-web3/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "What is a Web3 Wallet?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/web3-wallets/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "What is the difference between Tokens and Coins?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/difference-between-tokens-and-coins/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "A beginner's guide to Altcoins",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/introduction-to-altcoins/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "What is Staking?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/what-is-staking-all-about/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "What is a Blockchain Bridge?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/what-are-blockchain-bridges/",
    },
    {
      image: "/assets/images/learn-image-4.png",
      title: "Everything you need to know about Gas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      link: "https://blog.terablock.com/everything-you-need-to-know-about-gas/",
    },
  ];
  // width: width > 1499 ? "71%" : width > 940 ? "83%" : "98%"
  const [buttonText, setButtonText] = useState("Get Started");
  const NewsCard = ({ image, title, description, index, link }) => {
    return (
      <div className="card shadow p-2" style={{ width: "18rem", zIndex: 2, marginLeft: index == 0 && width > 1499 ? `${(14 * width) / 100}px` : index == 0 && width > 940 ? `${(7 * width) / 100}px` : index == 0 && `0px`, cursor: "pointer" }} onClick={() => window.open(link, "_blank")}>
        <img src={image} className="card-img" />
        <div className="pt-3">
          <h5 className="card-title fw-bold" style={{ height: "72px" }}>
            {title}
          </h5>
          <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
            <span className="fw-bold border rounded px-2 border-success">
              <span className="text-success">• </span> Beginner
            </span>
            <span style={{ color: "#5a5b5b" }}>18 mins</span>
          </div>
          <p className="card-text mt-3" style={{ color: "#5a5b5b", fontSize: "14px" }}>
            {description} . . . <span style={{ color: "#0251ff", fontWeight: "600" }}>read more</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="pb-5" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="py-4" style={{ marginLeft: "0px" }}>
        <div className="text-center pt-5 px-4 px-md-5 pb-3">
          <h3 className="pt-5" style={{ color: "#1b2b6b" }}>
            <b>Learn the essentials</b>
          </h3>
          <p style={{ color: "#5a5b5b" }}>Learn crypto through simple explanations, guides, tutorials, and market updates</p>
        </div>
        <div className={["d-flex ps-5", EssentialsSectionStyle.horizontal_scroll].join(" ")}>
          {essential_details.map((item, index) => (
            <div className="pe-3 pe-md-5 mb-3" key={index}>
              <NewsCard title={item.title} image={item.image} description={item.description} index={index} link={item.link} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <UIButton type="primary" width="150px" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
            {buttonText}
          </UIButton>
          <UIButton>Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default EssentialsSection;
