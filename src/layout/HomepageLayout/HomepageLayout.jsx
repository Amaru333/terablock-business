import React from "react";
import AboutTerablockSection from "./Components/AboutTerablockSection";
import BuyCryptoSection from "./Components/BuyCryptoSection";
import FeaturesSection from "./Components/FeaturesSection";
import IntroSection from "./Components/IntroSection";
import InvestmentGraph from "./Components/InvestmentGraph";
import TopNotification from "./Components/TopNotification";

function HomepageLayout() {
  return (
    <div>
      <TopNotification />
      <IntroSection />
      <FeaturesSection />
      <InvestmentGraph />
      <BuyCryptoSection />
      <AboutTerablockSection />
    </div>
  );
}

export default HomepageLayout;
