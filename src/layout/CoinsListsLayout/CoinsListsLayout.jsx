import React from "react";
import CoinsListSection from "./Components/CoinsListSection";
import CoinsListsHeader from "./Components/CoinsListsHeader";
import WhatAreCoinlistsSection from "./Components/WhatAreCoinlistsSection";

function CoinsListsLayout() {
  return (
    <div>
      <CoinsListsHeader />
      <WhatAreCoinlistsSection />
      <CoinsListSection />
    </div>
  );
}

export default CoinsListsLayout;
