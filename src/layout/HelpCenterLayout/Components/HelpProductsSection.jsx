import React from "react";
import BulletinCard from "../../../common/Cards/BulletinCard/BulletinCard";
import { useScreenSize } from "../../../functions/useScreenSize";

import HelpCenterProductsStyle from "../Styles/HelpCenterProducts.module.css";

function HelpProductsSection() {
  const DataCard = ({ icon, title, children }) => {
    return (
      <div className={HelpCenterProductsStyle.data_card}>
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
      desc: "Discover about wallet management",
    },
    {
      icon: "learn",
      title: "Learn",
      desc: "Discover about learn programs",
    },
    {
      icon: "bridge",
      title: "Bridge",
      desc: "Discover about bridge",
    },
    {
      icon: "buy",
      title: "Buy",
      desc: "Discover about learn buy",
    },
    {
      icon: "coins",
      title: "Coins List",
      desc: "Discover about earning",
    },
    {
      icon: "swap",
      title: "Swap",
      desc: "Discover about swap",
    },
    {
      icon: "swidge",
      title: "Swidge",
      desc: "Discover about swidge",
    },
    {
      icon: "earn",
      title: "Earn",
      desc: "Discover about earn",
    },
  ];
  const width = useScreenSize().width;
  return (
    <div className={["bg-white py-5 px-2 px-md-5", HelpCenterProductsStyle.body_font].join(" ")}>
      <div className="px-0 px-md-2 px-xl-5">
        <p className="text-center text-md-start" style={{ color: width > 768 ? "#1B2D5B" : "black", fontSize: width > 768 ? "32px" : "16px", fontWeight: 600 }}>
          Products
        </p>
        <div className={`row mx-0`}>
          <div className={`col-12 col-md-8 px-0 ${width > 767 && "border-bottom"}`} style={{ paddingBottom: width > 767 ? "6rem" : "0rem" }}>
            <div className="row mx-0">
              {data.map((data) => (
                <div className="col-12 col-xl-6">
                  <DataCard icon={data.icon} title={data.title}>
                    {data.desc}
                  </DataCard>
                </div>
              ))}
            </div>
          </div>
          <div className={`col-12 col-md-4 d-md-flex justify-content-center ${width < 768 && "border-bottom pb-5"}`}>
            <div>
              <BulletinCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpProductsSection;
