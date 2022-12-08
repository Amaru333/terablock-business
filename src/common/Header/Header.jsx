import { useRouter } from "next/router";
import React, { useState } from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

import HeaderStyle from "./Header.module.css";

function Header() {
  const router = useRouter();
  const width = useScreenSize().width;
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Get Started");
  const NavbarMenu = ({ name, link }) => {
    return (
      <p className="mb-0 px-3 fw-bold px-xxl-4" onClick={() => router.push(link)} style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer", color: router.pathname == link ? "#0251ff" : "#212529" }}>
        {name}
      </p>
    );
  };
  const menu_items = [
    {
      name: "Coinslists",
      link: "/coinslists",
    },
    {
      name: "Swidge",
      link: "/swidge",
    },
    {
      name: "Learn",
      link: "/learn",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Help Center",
      link: "/help-center",
    },
    {
      name: "Community",
      link: "/community",
    },
  ];
  if (width > 1000) {
    return (
      <div className="bg-white" style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.15)" }}>
        <div className="px-5 py-3 d-flex justify-content-between" style={{ maxWidth: "1500px", margin: "auto" }}>
          <div className="d-flex align-items-center">
            <img src="/assets/icons/logo-blue.svg" className="pe-4" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
            {menu_items.map((item, index) => (
              <NavbarMenu key={index} name={item.name} link={item.link} />
            ))}
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-3 pb-1" style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer", borderBottom: "2px solid #E3297E" }}>
              Launch App →
            </p>
            <button className={["bg-primaryBlue text-white px-4 py-2 mx-2", HeaderStyle.button, HeaderStyle.button_primary].join(" ")} onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-between px-3 py-3 bg-white" style={{ boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.15)" }}>
        <img src="/assets/icons/logo-blue.svg" className="pe-2" style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
        <div className="d-flex align-items-center">
          <button className={["bg-primaryBlue text-white px-4 py-2 mx-2", HeaderStyle.button, HeaderStyle.button_primary].join(" ")}>
            <p className="mb-0 fs-6" onMouseOver={() => setButtonText("Coming Soon")} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </p>
          </button>
          <img src="/assets/icons/hamburger-menu.svg" style={{ cursor: "pointer" }} className="ms-2" onClick={() => setIsOpen(true)} />
        </div>
        {isOpen && (
          <>
            <div className={HeaderStyle.navbar_container} onClick={() => setIsOpen(false)}></div>
            <div className={["bg-primaryDark d-flex flex-column align-items-end pe-4", HeaderStyle.navbar_mobile].join(" ")}>
              <img src="/assets/icons/close_button.svg" className="my-5" style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)} />
              {menu_items.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    router.push(item.link);
                    setIsOpen(false);
                  }}
                  className="fw-bolder text-white fs-5"
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Header;
