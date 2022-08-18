import React, { useRef, useState } from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import CoinOverviewStyle from "../Styles/CoinOverview.module.css";

function CoinOverviewSection() {
  const [tab, setTab] = useState("Overview");
  const ref = useRef({});
  const tab_list = [
    {
      name: "Overview",
    },
    {
      name: "Weightage",
    },
    {
      name: "Methodologies",
    },
  ];
  const TabBar = () => {
    const offset = 250;
    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
    };
    return (
      <div className="d-flex align-items-center">
        {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(-offset)} src="/assets/icons/left-arrow-blue.svg" />}
        <div className={CoinOverviewStyle.tab_bar} ref={ref}>
          {tab_list.map((tabItem, index) => (
            <div key={index} onClick={() => setTab(tabItem.name)} className={[CoinOverviewStyle.tab_items, tabItem.name == tab ? CoinOverviewStyle.tab_active : CoinOverviewStyle.tab_inactive].join(" ")}>
              <p className={[CoinOverviewStyle.tab_name, tabItem.name == tab ? CoinOverviewStyle.tab_name_active : CoinOverviewStyle.tab_name_inactive].join(" ")}>{tabItem.name}</p>
            </div>
          ))}
        </div>
        {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(+offset)} src="/assets/icons/right-arrow-blue.svg" />}
      </div>
    );
  };

  const Overview = () => {
    return (
      <div className="py-4">
        <p className="text-cardDescriptionColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit . . . <span className="fw-bold text-primaryBlue">read more</span>
        </p>
      </div>
    );
  };

  const Methodologies = () => {
    return (
      <div className="py-4">
        <h5 className="text-primaryBlue py-2 fw-bold">Defining the universe</h5>
        <p className="text-cardDescriptionColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
        <h5 className="text-primaryBlue pb-2 pt-4 fw-bold">Stock screening</h5>
        <p className="text-cardDescriptionColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
      </div>
    );
  };

  return (
    <div className="py-5 bg-white">
      <div className="row mx-0">
        <div className="col-12 col-md-7 px-3 px-md-5">
          <div>
            <div>
              <TabBar />
            </div>
            {tab == "Overview" && <Overview />}
            {tab == "Methodologies" && <Methodologies />}
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column align-items-center">
          <div className="bg-lightBlueBg rounded p-4 p-md-5 fw-bold">
            <p className="fs-5 text-primaryDark">Min. Investment Amount</p>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <p className="mb-0 me-3 fs-4">$ 4,424</p>
              <img src="/assets/images/coinslists/refresh.svg" />
            </div>
            <div className="d-flex justify-content-center">
              <UIButton type="primary">Invest Now</UIButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinOverviewSection;
