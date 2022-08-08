import React from "react";
import GamersSection from "./Components/GamersSection";
import SwidgePageHeader from "./Components/SwidgePageHeader";
import TeraBlockSwidgeSection from "./Components/TeraBlockSwidgeSection";

function SwidgePageLayout() {
  return (
    <div>
      <SwidgePageHeader />
      <GamersSection />
      <TeraBlockSwidgeSection />
    </div>
  );
}

export default SwidgePageLayout;
