import React from "react";
import UISearchStyle from "./UISearch.module.css";

function UISearchBar({ width = "100%", maxWidth }) {
  return (
    <div className="position-relative" style={{ width: width, maxWidth: maxWidth }}>
      <input placeholder="Search your issue here" className={UISearchStyle.input} />
      <img src="/assets/images/help_center/search_icon.svg" className={UISearchStyle.search_icon} />
    </div>
  );
}

export default UISearchBar;
