import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";
import UISearchBar from "../../../widgets/UISearchBar/UISearchBar";
import { useRouter } from "next/router";

import SearchHeaderStyle from "./SearchHeader.module.css";

function SearchHeader({ breadcrumbs, breadcrumbsMobileVisible = true }) {
  const [search, setSearch] = useState("");
  const width = useScreenSize().width;
  const router = useRouter();
  return (
    <div className="px-2 px-md-5 py-5">
      <div className="px-0 px-md-2 px-xl-5">
        <div className="col-12 col-md-7 d-flex">
          <UISearchBar search={search} setSearch={setSearch} placeholder="Search your issue here" />
          {width > 767 && (
            <UIButton type="primary" onClick={() => router.push(`/help-center/search?query=${search}`)}>
              {" "}
              Search{" "}
            </UIButton>
          )}
        </div>
        {breadcrumbsMobileVisible && (
          <div className="d-flex mt-3">
            {breadcrumbs.map((breadcrumb, index) => (
              <p key={index} onClick={() => index != breadcrumbs.length - 1 && router.push(breadcrumb.link)} className={["fs-5-4", index != breadcrumbs.length - 1 ? SearchHeaderStyle.breadcrumb_inactive : SearchHeaderStyle.breadcrumb_active].join(" ")}>
                {breadcrumb.name}
                {index != breadcrumbs.length - 1 && ` >`}&nbsp;
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchHeader;
