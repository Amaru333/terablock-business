import React from "react";
import StartCryptoJourneyCard from "../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import Footer from "../../common/Footer/Footer";
import AboutSwidgeSection from "./Components/AboutSwidgeSection";
import GamersSection from "./Components/GamersSection";
import StartJourney from "./Components/StartJourney";
import SwidgePageHeader from "./Components/SwidgePageHeader";
import TeraBlockSwidgeSection from "./Components/TeraBlockSwidgeSection";

function SwidgePageLayout() {
  return (
    <div>
      <SwidgePageHeader />
      <GamersSection />
      <TeraBlockSwidgeSection />
      <AboutSwidgeSection />
      <StartJourney />
    </div>
  );
}

export default SwidgePageLayout;
