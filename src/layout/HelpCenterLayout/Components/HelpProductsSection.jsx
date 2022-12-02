import { useRouter } from "next/router";
import React from "react";
import BulletinCard from "../../../common/Cards/BulletinCard/BulletinCard";
import { useScreenSize } from "../../../functions/useScreenSize";

import HelpCenterProductsStyle from "../Styles/HelpCenterProducts.module.css";

function HelpProductsSection() {
  const router = useRouter();
  const DataCard = ({ icon, title, children, link }) => {
    return (
      <div className={HelpCenterProductsStyle.data_card} onClick={() => router.push(link)}>
        <div className={HelpCenterProductsStyle.icon_container}>
          <img src={`/assets/images/help_center/${icon}.svg`} style={{ width: "25px" }} />
        </div>
        <div className="d-flex flex-column">
          <p className={HelpCenterProductsStyle.title}>{title}</p>
          <p className={HelpCenterProductsStyle.desc}>{children}</p>
        </div>
      </div>
    );
  };
  const data = [
    {
      icon: "wallet",
      title: "Wallet Management",
      link: "/help-center/wallet-management/",
      desc: "Discover about wallet management",
    },
    {
      icon: "learn",
      title: "Learn",
      link: "/help-center/",
      desc: "Discover about learn programs",
    },
    {
      icon: "bridge",
      title: "Bridge",
      link: "/help-center/",
      desc: "Discover about bridge",
    },
    {
      icon: "buy",
      title: "Buy",
      link: "/help-center/",
      desc: "Discover about learn buy",
    },
    {
      icon: "coins",
      title: "Coins List",
      link: "/help-center/",
      desc: "Discover about earning",
    },
    {
      icon: "swap",
      title: "Swap",
      link: "/help-center/",
      desc: "Discover about swap",
    },
    {
      icon: "swidge",
      title: "Swidge",
      link: "/help-center/",
      desc: "Discover about swidge",
    },
    {
      icon: "earn",
      title: "Earn",
      link: "/help-center/",
      desc: "Discover about earn",
    },
  ];
  const width = useScreenSize().width;
  return (
    <div className={["bg-white px-md-5", HelpCenterProductsStyle.body_font].join(" ")}>
      <div className="py-4" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="px-0 px-md-2 px-xl-5">
          <p className="text-center text-md-start" style={{ color: width > 768 ? "#1B2D5B" : "black", fontSize: width > 768 ? "32px" : "16px", fontWeight: 600 }}>
            Products
          </p>
          <div className={`row mx-0`}>
            <div className={`col-12 col-xl-8 px-0 ${width > 1201 && "border-bottom"}`} style={{ paddingBottom: width > 1201 ? "6rem" : "0rem" }}>
              <div className="row mx-0">
                {data.map((data, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <DataCard icon={data.icon} title={data.title} link={data.link}>
                      {data.desc}
                    </DataCard>
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
    </div>
  );
}

export default HelpProductsSection;
