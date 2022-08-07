import React from "react";
import AboutTeraBlockSection from "./Components/AboutTeraBlockSection";
import AboutUsHeaderSection from "./Components/AboutUsHeaderSection";
import AdvisorsInvestorsSection from "./Components/AdvisorsInvestorsSection";
import FounderMessageSection from "./Components/FounderMessageSection";

function AboutUsLayout() {
  return (
    <div>
      <AboutUsHeaderSection />
      <AboutTeraBlockSection />
      <FounderMessageSection />
      <AdvisorsInvestorsSection />
    </div>
  );
}

export default AboutUsLayout;
