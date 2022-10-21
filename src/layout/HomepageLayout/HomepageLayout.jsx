import React from "react";
import StayUpdated from "../../common/Footer/StayUpdated";
import AboutTerablockSection from "./Components/AboutTerablockSection";
import BuyCryptoSection from "./Components/BuyCryptoSection";
import CoinLists from "./Components/CoinsLists";
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
      <CoinLists />
      <InvestmentGraph />
      <GetStartedSection />
      <BuyCryptoSection />
      <AboutTerablockSection />
      <EssentialsSection />
      {/* <QuizSection />
      <DescriptionSection /> */}
      <StayUpdated />
      <FAQSection />
    </div>
  );
}

export default HomepageLayout;
