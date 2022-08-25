import React, { useState } from "react";
import ContactTeamBulletin from "../../../common/Cards/BulletinCard/ContactTeamBulletin";
import HelpBulletinCard from "../../../common/Cards/BulletinCard/HelpBulletinCard";
import LiveChatBulletin from "../../../common/Cards/BulletinCard/LiveChatBulletin";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

import ContactUsStyle from "../Styles/ContactUs.module.css";

function ContactUsSection() {
  const width = useScreenSize().width;
  const SupportCard = ({ icon, title, desc }) => {
    return (
      <div className={selected == title ? ContactUsStyle.selected : ContactUsStyle.unselected} onClick={() => setSelected(title)}>
        <div className="d-flex justify-content-between">
          <div className={ContactUsStyle.icon_container}>
            <img className={ContactUsStyle.icon} src={`/assets/images/help_center/${icon}-dark.svg`} />
          </div>
          <img className={ContactUsStyle.selected_icon} src={`/assets/images/help_center/selected-${selected == title}.svg`} />
        </div>
        <p className={ContactUsStyle.title}>{title}</p>
        <p className={ContactUsStyle.description}>{desc}</p>
      </div>
    );
  };
  const card_data = [
    {
      icon: "wallet",
      title: "Wallet Management",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "buy",
      title: "Buy",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "bridge",
      title: "Bridge",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "swap",
      title: "Swap",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "coins",
      title: "Coins List",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "support",
      title: "Support",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "swidge",
      title: "Swidge",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "bug",
      title: "Bug Bounty Program",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "learn",
      title: "Learn",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "reward",
      title: "Reward Program",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "earn",
      title: "Earn",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
    {
      icon: "community",
      title: "Community",
      desc: "The standard chunk of Lorem Ipsum used..",
    },
  ];
  const [selected, setSelected] = useState(card_data[0].title);

  return (
    <div className={"bg-white py-5 px-3 px-md-5 poppins"}>
      <div className="px-0 px-md-2 px-xl-5">
        {width > 1199 ? (
          <>
            <p className="mb-2 lexend" style={{ color: "#1B2D5B", fontSize: width > 768 ? "36px" : "16px", fontWeight: 700 }}>
              Contact Us
            </p>
            <p className="text-darkGray poppins fs-5-4">Choose your product*</p>
          </>
        ) : (
          <p className=" mb-0 ms-3 lexend" style={{ color: "#1B2D5B", fontSize: width > 768 ? "36px" : "16px", fontWeight: 700 }}>
            We're here to help
          </p>
        )}
        <div className={`row mx-0 d-flex flex-column-reverse flex-xl-row`}>
          <div className={`col-12 col-xl-8 px-0`} style={{ paddingBottom: width > 1201 ? "1rem" : "0rem" }}>
            {width < 1200 && (
              <>
                <p className="mb-2 mt-5 ms-3 lexend border-top pt-4" style={{ color: "#1B2D5B", fontSize: width > 768 ? "36px" : "16px", fontWeight: 700 }}>
                  Email us
                </p>
                <p className="text-darkGray poppins fs-5-4 mb-0 ms-3">Choose an item*</p>
              </>
            )}
            <div className="text-darkGray mt-2 mt-xl-5">
              <div className="row mx-0">
                {card_data.map((data, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <SupportCard title={data.title} desc={data.desc} icon={data.icon} />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3">
              <textarea rows={5} placeholder="Type your message here" className={ContactUsStyle.textarea} />
            </div>
            <div className="px-2">
              <UIButton type="primary" width={width < 769 && "96%"}>
                <p className="mb-0 py-2">Request Support</p>
              </UIButton>
            </div>
          </div>
          <div className={`col-12 col-xl-4 d-md-flex bulletin-card-justify`}>
            <div className={`mt-xl-5 ${width > 767 && width < 1201 && "row mx-0"}`}>
              <div className={`mb-0 mb-md-4 ${width > 767 && width < 1201 && "col-6"}`}>
                <HelpBulletinCard />
              </div>
              <div className={`mb-0 mb-md-4 ${width > 767 && width < 1201 && "col-6"}`}>
                <LiveChatBulletin />
              </div>
              <div className={`mb-0 mb-md-4 ${width > 767 && width < 1201 && "col-6"}`}>
                <ContactTeamBulletin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
