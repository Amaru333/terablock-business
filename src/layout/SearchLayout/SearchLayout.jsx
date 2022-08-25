import React from "react";
import SearchHeader from "../../common/Header/SearchHeader/SearchHeader";
import SearchResultSection from "./Components/SearchResultSection";

function SearchLayout() {
  const breadcrumbs = [
    {
      name: "Help Center",
      link: "/help-center",
    },
    {
      name: "Search",
      link: "/help-center/search",
    },
  ];
  return (
    <div>
      <SearchHeader breadcrumbs={breadcrumbs} />
      <SearchResultSection />
    </div>
  );
}

export default SearchLayout;
