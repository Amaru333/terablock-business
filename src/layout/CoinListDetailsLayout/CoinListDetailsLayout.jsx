import React from "react";
import CoinListDetailsHeader from "./Components/CoinListDetailsHeader";
import CoinOverviewSection from "./Components/CoinOverviewSection";

function CoinListDetailsLayout() {
  return (
    <div>
      <CoinListDetailsHeader />
      <CoinOverviewSection />
    </div>
  );
}

export default CoinListDetailsLayout;
