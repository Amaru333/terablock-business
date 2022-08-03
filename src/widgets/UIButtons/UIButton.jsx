import React from "react";
import UIButtonStyles from "./UIButton.module.css";

function UIButton({ children, type }) {
  if (type == "primary") {
    return <div className={["bg-backgroundBlue rounded text-white px-4 py-2 mx-2", UIButtonStyles.button].join(" ")}>{children}</div>;
  } else {
    return <div className={["bg-white rounded text-primaryBlue px-4 py-2 border border-primaryBlue mx-2", UIButtonStyles.button].join(" ")}>{children}</div>;
  }
}

export default UIButton;
