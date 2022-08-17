import React from "react";
import CoinsListSection from "./Components/CoinsListSection";
import CoinsListsFAQ from "./Components/CoinsListsFAQ";
import CoinsListsHeader from "./Components/CoinsListsHeader";
import HowCoinListsWorkSection from "./Components/HowCoinListsWorkSection";
import PowerOfCoinsListsSection from "./Components/PowerOfCoinsListsSection";
import WhatAreCoinlistsSection from "./Components/WhatAreCoinlistsSection";

function CoinsListsLayout() {
  return (
    <div>
      <CoinsListsHeader />
      <WhatAreCoinlistsSection />
      <CoinsListSection />
      <HowCoinListsWorkSection />
      <PowerOfCoinsListsSection />
      <CoinsListsFAQ />
    </div>
  );
}

export default CoinsListsLayout;
