import React from "react";
import BulletinCard from "../../../common/Cards/BulletinCard/BulletinCard";
import { useScreenSize } from "../../../functions/useScreenSize";

import HelpCenterWalletStyle from "../Styles/HelpCenterWallet.module.css";

function HelpCenterWalletHeader() {
  const width = useScreenSize().width;
  const DataCard = ({ data }) => {
    return (
      <div className="mb-5 pe-2">
        <img src={`/assets/images/help_center/${data.icon}.svg`} className={HelpCenterWalletStyle.empty_icon} />
        <p className={HelpCenterWalletStyle.card_title}>{data.title}</p>
        <div className={HelpCenterWalletStyle.card_container}>
          {data.questions.map((question, index) => (
            <div className={`d-flex justify-content-between ${index != data.questions.length - 1 && "border-bottom"}`} style={{ cursor: "pointer" }}>
              <p className={[HelpCenterWalletStyle.questions]}>{question.title}</p>
              <img src="/assets/images/help_center/next.svg" />
            </div>
          ))}
        </div>
        <p className={HelpCenterWalletStyle.view_more}>{width > 768 ? "View More >" : "View More →"}</p>
      </div>
    );
  };
  const data = [
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
    {
      icon: "empty-icon",
      title: "Getting Started",
      questions: [
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
        {
          title: "What is TeraBlock Wallet ?",
          link: "/help-center/wallet-management",
        },
      ],
    },
  ];
  return (
    <div className={["px-2 px-md-5 py-5 bg-white", HelpCenterWalletStyle.font].join(" ")}>
      <div className="px-0 px-md-2 px-xl-5">
        <div className={`d-flex align-items-center mb-5 ${width < 769 && "border-bottom"}`}>
          {width < 769 && (
            <div className={HelpCenterWalletStyle.icon_container}>
              <img src={`/assets/images/help_center/wallet.svg`} style={{ width: "25px" }} />
            </div>
          )}
          <p className={HelpCenterWalletStyle.title}>Wallet Management</p>
        </div>
        <div className={`row mx-0`}>
          <div className={`col-12 col-xl-8 px-0`}>
            <div className="row mx-0">
              {data.map((data) => (
                <div className="col-12 col-md-6">
                  <DataCard data={data}>{data.desc}</DataCard>
                </div>
              ))}
            </div>
          </div>
          <div className={`col-12 col-xl-4 d-md-flex bulletin-card-justify ${width < 1200 && "border-bottom pb-5"}`}>
            <div>
              <BulletinCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterWalletHeader;
