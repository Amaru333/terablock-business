import React from "react";
import CoinListDetailsHeader from "./Components/CoinListDetailsHeader";
import CoinOverviewSection from "./Components/CoinOverviewSection";
import PastPerformanceSection from "./Components/PastPerformanceSection";

function CoinListDetailsLayout() {
  return (
    <div>
      <CoinListDetailsHeader />
      <CoinOverviewSection />
      <PastPerformanceSection />
    </div>
  );
}

export default CoinListDetailsLayout;
