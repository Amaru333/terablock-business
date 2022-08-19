import React from "react";
import CoinListDetailsHeader from "./Components/CoinListDetailsHeader";
import CoinOverviewSection from "./Components/CoinOverviewSection";
import PastPerformanceSection from "./Components/PastPerformanceSection";
import RecentlyViewedSection from "./Components/RecentlyViewedSection";

function CoinListDetailsLayout() {
  return (
    <div>
      <CoinListDetailsHeader />
      <CoinOverviewSection />
      <PastPerformanceSection />
      <RecentlyViewedSection />
    </div>
  );
}

export default CoinListDetailsLayout;
