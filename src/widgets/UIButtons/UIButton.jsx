import React from "react";
import UIButtonStyles from "./UIButton.module.css";

function UIButton({ children, type, width, onClick, ml0 = false, style, onMouseOut, onMouseOver }) {
  if (type == "primary") {
    return (
      <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={[`bg-primaryBlue text-white px-4 py-2 ${!ml0 && "mx-2"}`, UIButtonStyles.button, UIButtonStyles.button_primary].join(" ")} style={{ width: width, ...style }} onClick={onClick}>
        {children}
      </button>
    );
  } else if (type == "primary-light") {
    return (
      <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick} className={[`bg-primaryLightButton rounded text-white px-4 py-2 mx-2 border border-white ${!ml0 && "mx-2"}`, UIButtonStyles.button].join(" ")} style={{ "--bs-bg-opacity": 0.1, width: width, ...style }}>
        {children}
      </button>
    );
  } else {
    return (
      <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick} className={[`bg-white text-primaryBlue px-4 py-2 border border-primaryBlue mx-2 ${!ml0 && "mx-2"}`, UIButtonStyles.button, UIButtonStyles.button_secondary].join(" ")} style={{ width: width, ...style }}>
        {children}
      </button>
    );
  }
}

export default UIButton;
