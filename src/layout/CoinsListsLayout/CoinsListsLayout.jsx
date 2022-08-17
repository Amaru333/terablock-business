import React from "react";
import CoinsListSection from "./Components/CoinsListSection";
import CoinsListsHeader from "./Components/CoinsListsHeader";
import HowCoinListsWorkSection from "./Components/HowCoinListsWorkSection";
import WhatAreCoinlistsSection from "./Components/WhatAreCoinlistsSection";

function CoinsListsLayout() {
  return (
    <div>
      <CoinsListsHeader />
      <WhatAreCoinlistsSection />
      <CoinsListSection />
      <HowCoinListsWorkSection />
    </div>
  );
}

export default CoinsListsLayout;
