import React from "react";
import SearchHeader from "../../common/Header/SearchHeader/SearchHeader";
import ContactUsSection from "./Components/ContactUsSection";

function HelpCenterContactSupportLayout() {
  const breadcrumbs = [
    {
      name: "Help Center",
      link: "/help-center",
    },
    {
      name: "Contact Support",
      link: "/help-center/contact-support",
    },
  ];
  return (
    <div>
      <SearchHeader breadcrumbs={breadcrumbs} />
      <ContactUsSection />
    </div>
  );
}

export default HelpCenterContactSupportLayout;
