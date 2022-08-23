import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UISearchBar from "../../../widgets/UISearchBar/UISearchBar";

import SearchHeaderStyle from "./SearchHeader.module.css";

function SearchHeader({ breadcrumbs, breadcrumbsMobileVisible = true }) {
  const width = useScreenSize().width;
  return (
    <div className="px-2 px-md-5 py-5">
      <div className="px-0 px-md-2 px-xl-5">
        <div className="col-12 col-md-7 d-flex">
          <UISearchBar />
          {width > 767 && <UIButton type="primary"> Search </UIButton>}
        </div>
        {breadcrumbsMobileVisible && (
          <div className="d-flex mt-3">
            <p className={SearchHeaderStyle.breadcrumb_inactive}>Help Center{` >`}&nbsp;</p>
            <p className={SearchHeaderStyle.breadcrumb_active}>Getting Started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchHeader;
