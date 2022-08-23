import React from "react";
import HelpCenterHeader from "./Components/HelpCenterHeader";
import HelpProductsSection from "./Components/HelpProductsSection";
import PopularArticlesSection from "./Components/PopularArticlesSection";

function HelpCenterLayout() {
  return (
    <div>
      <HelpCenterHeader />
      <HelpProductsSection />
      <PopularArticlesSection />
    </div>
  );
}

export default HelpCenterLayout;
