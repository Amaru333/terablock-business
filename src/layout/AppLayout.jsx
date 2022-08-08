import React from "react";
import Footer from "../common/Footer/Footer";

function AppLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
