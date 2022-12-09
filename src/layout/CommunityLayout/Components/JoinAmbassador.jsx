import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function JoinAmbassador() {
  const width = useScreenSize().width;
  const joinData = [
    {
      text: "Click Apply",
      image: "/assets/icons/cursor-hand-click-line.svg",
    },
    {
      text: "Fill Details",
      image: "/assets/icons/form-regular.svg",
    },
    {
      text: "Click Apply",
      image: "/assets/icons/success.svg",
    },
    {
      text: "Click Apply",
      image: "/assets/icons/circle-outlined.svg",
    },
  ];
  const JoinCard = ({ text, index, image }) => {
    return (
      <div className="d-flex align-items-center">
        <div className="flex-grow-1" style={{ textAlign: "-webkit-center" }}>
          <div className="card shadow p-3 mb-5 mb-md-0 bg-white rounded mx-0 border-primaryText" style={{ "--bs-border-opacity": 0.25, maxWidth: width > 768 && "260px" }}>
            <div className="d-flex justify-content-between pe-2">
              <div>
                <img src={image} className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2, height: "50px", width: "50px" }} />
              </div>
              <h1 className="text-lightBlueText fw-bolder">{index + 1}</h1>
            </div>
            <p className="mb-0 mt-3 text-primaryDark fw-bolder text-start">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white pb-5">
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}>
        <div className="text-center px-4 px-md-5">
          <h4 className="text-primaryTextDark">Steps to join Ambassador Program</h4>
          <p className="text-primaryTextGray">Lets look at the steps involved in joining the Ambassador Program</p>
        </div>
        <div className="row mx-0 px-4 px-md-5 pt-3 pt-md-5">
          {joinData.map((data, index) => (
            <>
              <div className="col-12 col-md px-4 px-md-0">
                <JoinCard text={data.text} index={index} image={data.image} />
              </div>
              {width > 768 && index + 1 != joinData.length && (
                <div className="col-1 d-flex align-items-center justify-content-center">
                  <img src="/assets/icons/arrow-next.svg" />
                </div>
              )}
            </>
          ))}
        </div>
        <div className="d-flex flex-row justify-content-center pt-0 pt-md-5">
          <UIButton type="primary">Apply Now</UIButton>
          <UIButton type="secondary">View Guide</UIButton>
        </div>
      </div>
    </div>
  );
}

export default JoinAmbassador;
