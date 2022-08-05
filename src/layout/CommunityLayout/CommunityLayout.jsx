import React from "react";
import AmbassadorProgramSection from "./Components/AmbassadorProgramSection";
import HeaderComponent from "./Components/HeaderComponent";
import RewardsProgramSection from "./Components/RewardsProgramSection";
import RewardsTypeSection from "./Components/RewardsTypeSection";
import StayConnectedSection from "./Components/StayConnectedSection";

function CommunityLayout() {
  return (
    <div>
      <HeaderComponent />
      <StayConnectedSection />
      <RewardsProgramSection />
      <RewardsTypeSection />
      <AmbassadorProgramSection />
    </div>
  );
}

export default CommunityLayout;
