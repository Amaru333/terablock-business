import React from "react";
import FeaturesSection from "./Components/FeaturesSection";
import IntroSection from "./Components/IntroSection";
import TopNotification from "./Components/TopNotification";

function HomepageLayout() {
  return (
    <div>
      <TopNotification />
      <IntroSection />
      <FeaturesSection />
    </div>
  );
}

export default HomepageLayout;
