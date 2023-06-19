import React from "react";
import CoinLists from "./Components/CoinsLists";
import FeaturesSection from "./Components/FeaturesSection";
import IntroSection from "./Components/IntroSection";
import TopNotification from "./Components/TopNotification";
import OnboardingJourney from "./Components/OnboardingJourney";
import FeaturedInSection from "./Components/FeaturedInSection";

function HomepageLayout() {
  return (
    <div>
      <TopNotification />
      <IntroSection />
      <FeaturesSection />
      <CoinLists />
      <OnboardingJourney />
      <FeaturedInSection />
    </div>
  );
}

export default HomepageLayout;
