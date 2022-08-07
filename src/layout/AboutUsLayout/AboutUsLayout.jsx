import React from "react";
import AboutTeraBlockSection from "./Components/AboutTeraBlockSection";
import AboutUsHeaderSection from "./Components/AboutUsHeaderSection";
import FounderMessageSection from "./Components/FounderMessageSection";

function AboutUsLayout() {
  return (
    <div>
      <AboutUsHeaderSection />
      <AboutTeraBlockSection />
      <FounderMessageSection />
    </div>
  );
}

export default AboutUsLayout;
