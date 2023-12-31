import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import BulletinCard from "../../Cards/BulletinCard/BulletinCard";
import FeedbackCard from "../../Cards/BulletinCard/FeedbackCard";
import HelpBulletinCard from "../../Cards/BulletinCard/HelpBulletinCard";
import ContactSupport from "../../Cards/ContactSupport.jsx/ContactSupport";
import ArticleTable from "../../Table/ArticleTable/ArticleTable";

import ArticleSectionStyle from "./ArticleSection.module.css";

function ArticlesSection({ article = false }) {
  const width = useScreenSize().width;
  return (
    <div className={"pt-0 pt-md-5 pb-5 px-2 px-md-5"} style={{ backgroundColor: width < 1199 ? "white" : "inherit" }}>
      <div className="px-0 px-md-2 px-xl-5">
        <p className="text-center text-md-start" style={{ color: width > 767 ? "#1B2D5B" : "black", fontSize: width > 767 ? "32px" : "20px", fontWeight: 700, fontFamily: "Poppins" }}>
          Similar topics
        </p>
        <div className={`row mx-0`}>
          <div className={`col-12 col-xl-8 px-0 ${width > 1201 && "border-bottom"}`} style={{ paddingBottom: width > 1201 ? "2rem" : "0rem" }}>
            <div>
              <ArticleTable />
            </div>
            {article && <FeedbackCard />}
          </div>
          <div className={`col-12 col-xl-4 d-md-flex bulletin-card-justify ${width < 1200 && "border-bottom pb-5"}`}>
            <div className={ArticleSectionStyle.container}>
              {article && (
                <div className={`${width > 767 && width < 1201 && "me-3"}`}>
                  <HelpBulletinCard />
                </div>
              )}
              {article && <br />}
              <BulletinCard />
            </div>
          </div>
        </div>

        <div className={`row mx-0 ${width > 1201 && "border-bottom"}`}>
          <div className={`col-12 col-xl-8 px-0`} style={{ paddingBottom: width > 1201 ? "2rem" : "0rem" }}>
            <p className="text-center text-md-start pt-5" style={{ color: width > 767 ? "#1B2D5B" : "black", fontSize: width > 767 ? "32px" : "20px", fontWeight: 700, fontFamily: "Poppins" }}>
              Popular Articles
            </p>
            <div>
              <ArticleTable />
            </div>
          </div>
          <div className={`col-12 col-xl-4 d-md-flex bulletin-card-justify ${width < 1200 && "border-bottom pb-5"}`}>
            {width > 1199 && article && (
              <div className="w-75">
                <p className="text-start pt-5" style={{ color: "#1B2D5B", fontSize: "32px", fontWeight: 700, fontFamily: "Poppins" }}>
                  FAQS
                </p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
                <p className={ArticleSectionStyle.faq}>People across the globe trade cryptocurrencies worth billions..</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <ContactSupport />
        </div>
      </div>
    </div>
  );
}

export default ArticlesSection;
