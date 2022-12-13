import React, { useState } from "react";
import Style from "./Tooltip.module.css";

const UITooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 10);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={Style.Tooltip_Wrapper}
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={[props.topRight ? Style.Tooltip_Tip_Topright : Style.Tooltip_Tip, Style.top].join(" ")} dangerouslySetInnerHTML={{ __html: props.content }}>
          {/* Content */}
          {/* {props.content} */}
        </div>
      )}
    </div>
  );
};

export default UITooltip;
