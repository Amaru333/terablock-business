import React from "react";
import Footer from "../../common/Footer/Footer";
import AboutSwidgeSection from "./Components/AboutSwidgeSection";
import GamersSection from "./Components/GamersSection";
import SwidgePageHeader from "./Components/SwidgePageHeader";
import TeraBlockSwidgeSection from "./Components/TeraBlockSwidgeSection";

function SwidgePageLayout() {
  return (
    <div>
      <SwidgePageHeader />
      <GamersSection />
      <TeraBlockSwidgeSection />
      <AboutSwidgeSection />
    </div>
  );
}

export default SwidgePageLayout;
