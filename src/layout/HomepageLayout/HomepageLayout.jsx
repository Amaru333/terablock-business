import React from "react";
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
    </div>
  );
}

export default HomepageLayout;
