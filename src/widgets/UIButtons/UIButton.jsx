import React from "react";
import UIButtonStyles from "./UIButton.module.css";

function UIButton({ children, type, width, onClick }) {
  if (type == "primary") {
    return (
      <button className={["bg-primaryBlue text-white px-4 py-2 mx-2", UIButtonStyles.button, UIButtonStyles.button_primary].join(" ")} style={{ width: width }} onClick={onClick}>
        {children}
      </button>
    );
  } else if (type == "primary-light") {
    return (
      <button onClick={onClick} className={["bg-primaryLightButton rounded text-white px-4 py-2 mx-2 border border-white", UIButtonStyles.button].join(" ")} style={{ "--bs-bg-opacity": 0.1, width: width }}>
        {children}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className={["bg-white text-primaryBlue px-4 py-2 border border-primaryBlue mx-2", UIButtonStyles.button, UIButtonStyles.button_secondary].join(" ")} style={{ width: width }}>
        {children}
      </button>
    );
  }
}

export default UIButton;
