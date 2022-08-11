import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function AmbassadorProgramSection() {
  const width = useScreenSize().width;
  const DataCard = ({ image, title, description }) => {
    return (
      <div className={`d-flex ${width > 768 && "w-75"}`}>
        <div>
          <img src={image} />
        </div>
        <div className="ms-4">
          <h5 className="fw-bolder text-primaryTextDark">{title}</h5>
          <p className="text-primaryTextGray">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white py-5">
      <div className="text-center mt-5 px-4 px-md-5">
        <h3 className="text-primaryTextDark">
          <b>
            Ambassador Program<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray mb-0">
          TeraBlock Ambassador Program comes with several perks and ways to get involved in the Community and contribute towards our goal of making DeFi easy for everyone! Our ambassadors would get priority access to our products, offerings, and giveaways, along with the opportunity to get deeply involved in our day-to-day operations.
        </p>
        <img src="./assets/icons/underline-gray.svg" width="90px" />
      </div>
      <div className="row mx-0 px-3 px-md-5 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-around pt-0 pt-md-5 pb-0 pb-md-5">
          <DataCard image="./assets/images/priority-access.png" title="Priority access to our products" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <DataCard image="./assets/images/giveaway.png" title="Take part in giveaways" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <DataCard image="./assets/images/operational.png" title="Work with operations team" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/ambassador-program.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default AmbassadorProgramSection;
