import React, { useRef, useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

import UIButton from "../../../widgets/UIButtons/UIButton";

import ProductStyle from "../Styles/ProductsSection.module.css";

function ProductsSection() {
  const width = useScreenSize().width;
  const [tab, setTab] = useState("Wallet Management");
  const ref = useRef({});
  const tab_list = [
    // {
    //   name: "Wallet Management",
    //   icon: "/assets/icons/wallet-tab.svg",
    // },
    // {
    //   name: "Bridge",
    //   icon: "/assets/icons/bridge.svg",
    // },
    // {
    //   name: "Coin List",
    //   icon: "/assets/icons/coin-bag.svg",
    // },
    // {
    //   name: "Buy",
    //   icon: "/assets/icons/bag.svg",
    // },
    // {
    //   name: "Swap",
    //   icon: "/assets/icons/swap.svg",
    // },
    // {
    //   name: "Swidge",
    //   icon: "/assets/icons/swidge.svg",
    // },
    {
      name: "Tab 1",
      icon: "/assets/icons/money-bag.svg",
    },
    {
      name: "Tab 2",
      icon: "/assets/icons/learn.svg",
    },
  ];
  const WalletManagement = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-2 px-xl-5">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-5">
          <h2 className="text-primaryBlue fw-normal text-center text-md-start">
            <b>Wallet</b> Management
          </h2>
          <p className="text-primaryTextGray mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary">Get started</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="/assets/images/wallet-management.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Bridge = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-5">
          <h2 className="text-primaryBlue fw-normal text-center text-md-start">
            <b>Bridge</b>
          </h2>
          <p className="text-primaryTextGray mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="/assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary">Get started</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="/assets/images/bridge-tab.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
        </div>
      </div>
    );
  };

  const TabBar = () => {
    const offset = 250;
    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
    };
    return (
      <div className="d-flex align-items-center">
        {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(-offset)} src="/assets/icons/left-arrow-blue.svg" />}
        <div className={ProductStyle.tab_bar} ref={ref}>
          {tab_list.map((tabItem, index) => (
            <div key={index} onClick={() => setTab(tabItem.name)} className={[ProductStyle.tab_items, tabItem.name == tab ? ProductStyle.tab_active : ProductStyle.tab_inactive].join(" ")}>
              <img className={[ProductStyle.tab_icon, tabItem.name == tab && ProductStyle.tab_icon_active].join(" ")} src={tabItem.icon} />
              <p className={[ProductStyle.tab_name, tabItem.name == tab ? ProductStyle.tab_name_active : ProductStyle.tab_name_inactive].join(" ")}>{tabItem.name}</p>
            </div>
          ))}
        </div>
        {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(+offset)} src="/assets/icons/right-arrow-blue.svg" />}
      </div>
    );
  };

  return (
    <div className="mt-5 pt-5 pb-5 bg-white">
      <div className="text-center mb-2 px-4 px-md-5">
        <h3 className="text-primaryTextDark fw-bolder">
          <b>
            Powerful, TeraBlock Products<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="mb-5 px-2 px-md-5">
        <TabBar />
      </div>
      <div className="px-4 px-md-5">
        {/* {tab == "Wallet Management" && <WalletManagement />}
        {tab == "Bridge" && <Bridge />} */}
        {tab == "Tab 1" && <div>Contents of tab 1</div>}
        {tab == "Tab 2" && <div>Contents of tab 2</div>}
      </div>
    </div>
  );
}

export default ProductsSection;
