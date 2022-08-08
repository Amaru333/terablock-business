import React from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function AppLayout({ children }) {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
