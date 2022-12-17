import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

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
      <div className="pb-4 h-100">
        <div className="card shadow px-2 px-md-3 mb-3 pt-3 bg-white rounded mx-0 mx-md-2 mx-xl-2 mx-xxl-4 border-primaryText h-100" style={{ "--bs-border-opacity": 0.25, zIndex: 1 }}>
          <div className="px-1">
            <div className="d-flex align-items-center">
              <div>
                <img src={logo} width={width > 767 ? "56px" : "30px"} />
              </div>
              <p className={`${width > 767 ? "h4" : "h5"} fw-bolder ms-2 ms-md-3 mb-0`}>{title}</p>
            </div>
            <p className="mb-0 mt-3 text-primaryBlue fw-bold">
              <a href={link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                {message} →
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: "#214ff4" }}>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "96%" }}>
        <div className="text-center pt-5 px-4 px-md-0">
          <h2 className="text-white fw-bold" style={{ fontWeight: "500" }}>
            <b>Connect with the global community</b>
          </h2>
          <p className="text-white mb-3">Getting in touch has never been easier! Contact us on any of our channels to start the conversation.</p>
        </div>
        <div className="row mx-2 mx-md-2 mt-5">
          {social_data.map((data, index) => (
            <div className="col-6 col-md-6 col-xl-3" key={index}>
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
