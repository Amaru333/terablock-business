import { useRouter } from "next/router";
import React from "react";
import { getScreenSize } from "../../functions/getScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

function Header() {
  const router = useRouter();
  const width = getScreenSize().width;
  const NavbarMenu = ({ name, link }) => {
    return (
      <p className="mb-0 px-3" onClick={() => router.push(link)} style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
        {name}
      </p>
    );
  };
  const menu_items = [
    {
      name: "Prices",
      link: "/",
    },
    {
      name: "Learn",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Help Center",
      link: "/",
    },
    {
      name: "Community",
      link: "/community",
    },
  ];
  if (width > 1000) {
    return (
      <div className="d-flex justify-content-between px-5 py-2 shadow bg-white">
        <div className="d-flex align-items-center">
          <img src="./assets/icons/logo-blue.svg" className="pe-4" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
          {menu_items.map((item) => (
            <NavbarMenu name={item.name} link={item.link} />
          ))}
        </div>
        <div className="d-flex align-items-center">
          <p className="mb-0 me-3 pb-1" style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer", borderBottom: "2px solid #E3297E" }}>
            Launch App →
          </p>
          <UIButton type="primary">Get Started</UIButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-between px-3 py-3 shadow bg-white">
        <img src="./assets/icons/logo-blue.svg" className="pe-4" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
        <div className="d-flex align-items-center">
          <UIButton type="primary">
            <p className="mb-0 fs-6">Get Started</p>
          </UIButton>
          <img src="./assets/icons/hamburger-menu.svg" className="ms-2" />
        </div>
      </div>
    );
  }
}

export default Header;
