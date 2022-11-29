import React from "react";
import StartCryptoJourneyCard from "../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import TopNotification from "../HomepageLayout/Components/TopNotification";
import StartJourney from "../ProductsLayout/Components/StartJourney";
import AmbassadorProgramSection from "./Components/AmbassadorProgramSection";
import CommunityConnectionsSection from "./Components/CommunityConnectionsSection";
import HeaderComponent from "./Components/HeaderComponent";
import JoinAmbassador from "./Components/JoinAmbassador";
import RewardsProgramSection from "./Components/RewardsProgramSection";
import RewardsTypeSection from "./Components/RewardsTypeSection";
import StayConnectedSection from "./Components/StayConnectedSection";

function CommunityLayout() {
  return (
    <div>
      <TopNotification />
      <HeaderComponent />
      <StayConnectedSection />
      <RewardsProgramSection />
      <RewardsTypeSection />
      <AmbassadorProgramSection />
      {/* <JoinAmbassador /> */}
      <CommunityConnectionsSection />
      <StartJourney />
    </div>
  );
}

export default CommunityLayout;
