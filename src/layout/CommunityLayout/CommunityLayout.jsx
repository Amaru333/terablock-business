import React from "react";
import HeaderComponent from "./Components/HeaderComponent";
import RewardsProgramSection from "./Components/RewardsProgramSection";
import StayConnectedSection from "./Components/StayConnectedSection";

function CommunityLayout() {
  return (
    <div>
      <HeaderComponent />
      <StayConnectedSection />
      <RewardsProgramSection />
    </div>
  );
}

export default CommunityLayout;
