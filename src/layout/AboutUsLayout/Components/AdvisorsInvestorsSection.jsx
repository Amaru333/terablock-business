import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";

import AdvisorsInvestorsStyle from "../Styles/AdvisorsInvestors.module.css";

function AdvisorsInvestorsSection() {
  const width = getScreenSize().width;
  const InvestorCard = ({ name, image }) => {
    return (
      <div className="text-center">
        <img src={image} width={width > 918 ? "200px" : "160px"} />
        <p className="h5 fw-bold my-2">{name}</p>
        <div>
          <img src="./assets/icons/twitter-ico-filled.svg" width="26px" />
          &nbsp;&nbsp;
          <img src="./assets/icons/linkedin-ico-filled.svg" width="26px" />
        </div>
      </div>
    );
  };
  const investors = [
    {
      name: "Steve Smith",
      image: "./assets/images/investors/user-1.png",
    },
    {
      name: "Hannah Baker",
      image: "./assets/images/investors/user-2.png",
    },
    {
      name: "Ryan Reynolds",
      image: "./assets/images/investors/user-3.png",
    },
    {
      name: "Elizabeth Q",
      image: "./assets/images/investors/user-4.png",
    },
    {
      name: "Edward Picard",
      image: "./assets/images/investors/user-5.png",
    },
    {
      name: "Kelly E. Mabry",
      image: "./assets/images/investors/user-6.png",
    },
    {
      name: "Benjamin Miller",
      image: "./assets/images/investors/user-7.png",
    },
    ,
    {
      name: "Carol Moore",
      image: "./assets/images/investors/user-8.png",
    },
  ];
  return (
    <div className={["py-5", AdvisorsInvestorsStyle.background_image].join(" ")}>
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark">
          <b>
            Our Advisors & Investors<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="row mx-2 mx-md-5 justify-content-center">
        {investors.map((data) => (
          <div className="px-2 py-3 col-6 col-sm-4 col-md-3 col-xxl-2">
            <InvestorCard name={data.name} image={data.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvisorsInvestorsSection;
