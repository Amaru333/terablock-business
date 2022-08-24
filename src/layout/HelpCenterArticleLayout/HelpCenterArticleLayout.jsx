import React from "react";
import SearchHeader from "../../common/Header/SearchHeader/SearchHeader";
import HelpArticleContent from "./Components/HelpArticleContent";

function HelpCenterArticleLayout() {
  const breadcrumbs = [
    {
      name: "Help Center",
      link: "/help-center",
    },
    {
      name: "Wallet Management",
      link: "/help-center/wallet-management",
    },
    {
      name: "How to create a MetaMask Wallet",
      link: "/help-center/wallet-management/how-to-create-a-metamask-wallet",
    },
  ];
  return (
    <div>
      <SearchHeader breadcrumbs={breadcrumbs} />
      <HelpArticleContent />
    </div>
  );
}

export default HelpCenterArticleLayout;
