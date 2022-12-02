import React from "react";
import UISearchStyle from "./UISearch.module.css";

function UISearchBar({ width = "100%", maxWidth, search, setSearch, placeholder }) {
  return (
    <div className="position-relative" style={{ width: width, maxWidth: maxWidth }}>
      <input placeholder={placeholder} className={UISearchStyle.input} value={search} onChange={(e) => setSearch(e.target.value)} />
      <img src="/assets/images/help_center/search_icon.svg" className={UISearchStyle.search_icon} />
    </div>
  );
}

export default UISearchBar;
