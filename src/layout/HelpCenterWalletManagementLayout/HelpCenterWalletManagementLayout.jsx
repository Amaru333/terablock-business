import React from "react";
import ArticlesSection from "../../common/Footer/ArticlesSection/ArticlesSection";
import SearchHeader from "../../common/Header/SearchHeader/SearchHeader";
import HelpCenterWalletHeader from "./Components/HelpCenterWalletHeader";

function HelpCenterWalletManagementLayout() {
  const breadcrumbs = [
    {
      name: "Help Center",
      link: "/help-center",
    },
    {
      name: "Wallet Management",
      link: "/help-center/wallet-management",
    },
  ];
  return (
    <div>
      <SearchHeader breadcrumbs={breadcrumbs} />
      <HelpCenterWalletHeader />
      <ArticlesSection />
    </div>
  );
}

export default HelpCenterWalletManagementLayout;
