import React from "react";
import UICard from "../../../widgets/UICard/UICard";

function CommunityConnectionsSection() {
  const social_data = [
    {
      title: "Twitter",
      logo: "/assets/icons/twitter.png",
      message: "Stay updated",
    },
    {
      title: "Telegram",
      logo: "/assets/icons/github.png",
      message: "Stay updated",
    },
    {
      title: "LinkedIn",
      logo: "/assets/icons/telegram.png",
      message: "Stay updated",
    },
    {
      title: "Instagram",
      logo: "/assets/icons/medium.png",
      message: "Stay updated",
    },
  ];
  const SocialCards = ({ title, message, logo }) => {
    return (
      <UICard>
        <div className="px-1">
          <div className="d-flex align-items-center">
            <div>
              <img src={logo} width="35px" />
            </div>
            <p className="h4 fw-bolder ms-2 ms-md-3 mb-0">{title}</p>
          </div>
          <p className="mb-0 mt-3 text-primaryBlue fw-bold">{message} →</p>
        </div>
      </UICard>
    );
  };
  return (
    <div style={{ backgroundColor: "#214ff4" }}>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="text-center pt-5 px-4 px-md-5">
          <h3 className="text-white" style={{ fontWeight: "500" }}>
            <b>Connect with the global community</b>
          </h3>
          <p className="text-white mb-3">Getting in touch has never been easier! Contact us on any of our channels to start the conversation.</p>
        </div>
        <div className="row mx-2 mx-md-5 mt-5">
          {social_data.map((data, index) => (
            <div className="col-6 col-md" key={index}>
              <SocialCards title={data.title} logo={data.logo} message={data.message} />
            </div>
          ))}
        </div>
        <img src="/assets/icons/4x3.svg" style={{ width: "50px" }} className="pb-3" />
      </div>
    </div>
  );
}

export default CommunityConnectionsSection;
