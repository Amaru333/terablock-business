import React from "react";
import UICard from "../../../widgets/UICard/UICard";

function CommunityConnectionsSection() {
  const social_data = [
    {
      title: "Twitter",
      logo: "./assets/icons/twitter.png",
      message: "Stay updated",
    },
    {
      title: "Github",
      logo: "./assets/icons/github.png",
      message: "Stay updated",
    },
    {
      title: "Telegram",
      logo: "./assets/icons/telegram.png",
      message: "Stay updated",
    },
    {
      title: "Medium",
      logo: "./assets/icons/medium.png",
      message: "Stay updated",
    },
  ];
  const SocialCards = ({ title, message, logo }) => {
    return (
      <UICard>
        <div>
          <div className="d-flex align-items-center">
            <div>
              <img src={logo} width="35px" />
            </div>
            <p className="h3 fw-bolder ms-2 ms-md-3 mb-0">{title}</p>
          </div>
          <p className="mb-0 mt-3 text-primaryBlue fw-bold">{message} →</p>
        </div>
      </UICard>
    );
  };
  return (
    <div>
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Connect with the global community<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row mx-2 mx-md-5 mt-5">
        {social_data.map((data) => (
          <div className="col-6 col-md">
            <SocialCards title={data.title} logo={data.logo} message={data.message} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityConnectionsSection;
