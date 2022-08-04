import React from "react";
import AboutTerablockSection from "./Components/AboutTerablockSection";
import BuyCryptoSection from "./Components/BuyCryptoSection";
import DescriptionSection from "./Components/DescriptionSection";
import EssentialsSection from "./Components/EssentialsSection";
import FAQSection from "./Components/FAQSection";
import FeaturesSection from "./Components/FeaturesSection";
import GetStartedSection from "./Components/GetStartedSection";
import IntroSection from "./Components/IntroSection";
import InvestmentGraph from "./Components/InvestmentGraph";
import QuizSection from "./Components/QuizSection";
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
      <GetStartedSection />
      <EssentialsSection />
      <QuizSection />
      <DescriptionSection />
      <FAQSection />
    </div>
  );
}

export default HomepageLayout;
