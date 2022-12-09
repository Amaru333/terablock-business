import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function CommunityConnectionsSection() {
  const width = useScreenSize().width;
  const social_data = [
    {
      title: "Twitter",
      logo: "/assets/icons/rewards/twitter.png",
      message: "Stay updated",
      url: "https://twitter.com/MyTeraBlock",
    },
    {
      title: "Telegram",
      logo: "/assets/icons/rewards/telegram.png",
      message: "Stay updated",
      url: "https://t.me/TeraBlock",
    },
    {
      title: "LinkedIn",
      logo: "/assets/icons/rewards/linkedin.png",
      message: "Stay updated",
      url: "https://www.linkedin.com/company/myTeraBlock/",
    },
    {
      title: "Instagram",
      logo: "/assets/icons/rewards/instagram.png",
      message: "Stay updated",
      url: "https://www.instagram.com/myterablock/",
    },
  ];
  const SocialCards = ({ title, message, logo, link }) => {
    return (
      <UICard>
        <div className="px-1">
          <div className="d-flex align-items-center">
            <div>
              <img src={logo} width={width > 767 ? "56px" : "30px"} />
            </div>
            <p className="h4 fw-bolder ms-2 ms-md-3 mb-0">{title}</p>
          </div>
          <p className="mb-0 mt-3 text-primaryBlue fw-bold">
            <a href={link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              {message} →
            </a>
          </p>
        </div>
      </UICard>
    );
  };
  return (
    <div style={{ backgroundColor: "#214ff4" }}>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "96%" }}>
        <div className="text-center pt-5 px-4 px-md-0">
          <h3 className="text-white" style={{ fontWeight: "500" }}>
            <b>Connect with the global community</b>
          </h3>
          <p className="text-white mb-3">Getting in touch has never been easier! Contact us on any of our channels to start the conversation.</p>
        </div>
        <div className="row mx-2 mx-md-2 mt-5">
          {social_data.map((data, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <SocialCards title={data.title} logo={data.logo} message={data.message} link={data.url} />
            </div>
          ))}
        </div>
        <img src="/assets/icons/4x3.svg" style={{ width: "50px" }} className="pb-3" />
      </div>
    </div>
  );
}

export default CommunityConnectionsSection;
