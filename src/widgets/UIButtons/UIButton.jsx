import React from "react";
import UIButtonStyles from "./UIButton.module.css";

function UIButton({ children, type }) {
  if (type == "primary") {
    return <button className={["bg-backgroundBlue rounded text-white px-4 py-2 mx-2", UIButtonStyles.button].join(" ")}>{children}</button>;
  } else if (type == "primary-light") {
    return (
      <button className={["bg-primaryLightButton rounded text-white px-4 py-2 mx-2 border border-white", UIButtonStyles.button].join(" ")} style={{ "--bs-bg-opacity": 0.1 }}>
        {children}
      </button>
    );
  } else {
    return <button className={["bg-white rounded text-primaryBlue px-4 py-2 border border-primaryBlue mx-2", UIButtonStyles.button].join(" ")}>{children}</button>;
  }
}

export default UIButton;
