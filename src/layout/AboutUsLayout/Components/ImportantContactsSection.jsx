import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function ImportantContactsSection() {
  const width = useScreenSize().width;
  const ContactCard = ({ name, designation, email }) => {
    return (
      <UICard>
        <p className="fw-bold mb-2 text-primaryDark" style={{ fontSize: width > 768 ? "24px" : "14px" }}>
          {name}
        </p>
        <p className="mb-1 text-tableFontColor" style={{ fontSize: width > 768 ? "14px" : "10px" }}>
          {designation}
        </p>
        <p className="mb-1 text-primaryBlue" style={{ fontSize: width > 768 ? "20px" : "12px", fontWeight: 600 }}>
          {email}
        </p>
      </UICard>
    );
  };
  const contacts = [
    {
      name: "Thomas L. Hunley",
      designation: "Sales Lead",
      email: "thomas@terablock.com",
    },
    {
      name: "Esther Stephens",
      designation: "Marketing Lead",
      email: "esther@terablock.com",
    },
    {
      name: "Larry Lee",
      designation: "Support Team",
      email: "support@terablock.com",
    },
    {
      name: "Sarah Keller",
      designation: "Grievance Team",
      email: "sarah@terablock.com",
    },
    {
      name: "Gwen Richerson",
      designation: "Media relations",
      email: "gwen@terablock.com",
    },
    {
      name: "Kurt E. Goodrich",
      designation: "Investor connect",
      email: "kurt@terablock.com",
    },
  ];
  return (
    <div className="pb-5 px-0 px-md-2 px-xl-5">
      <div className="position-relative py-5">
        <div className="text-center mb-2 px-3">
          <h2 className="text-primaryTextDark fw-bold">
            <b>
              Important Contacts<span className="text-primaryViolet">.</span>
            </b>
          </h2>
          <p className="text-primaryTextGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row mx-2 mx-md-5 px-1 justify-content-center">
          {contacts.map((data, index) => (
            <div className="px-2 py-2 py-md-4 col-6 col-sm-4 col-xxl-3" key={index}>
              <ContactCard name={data.name} designation={data.designation} email={data.email} />
            </div>
          ))}
        </div>
        <img src="/assets/icons/4x5.svg" className="position-absolute" style={{ bottom: width > 768 ? "4rem" : "3rem", left: width > 768 ? "4rem" : "0.5rem", zIndex: "0" }} />
        {width > 768 && <img src="/assets/icons/4x5.svg" className="position-absolute" style={{ bottom: "4rem", right: "4rem", zIndex: "0" }} />}
      </div>
      <StartCryptoJourneyCard />
    </div>
  );
}

export default ImportantContactsSection;
