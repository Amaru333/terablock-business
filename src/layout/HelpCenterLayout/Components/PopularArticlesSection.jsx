import React from "react";
import BulletinCard from "../../../common/Cards/BulletinCard/BulletinCard";
import ContactSupport from "../../../common/Cards/ContactSupport.jsx/ContactSupport";
import ArticleTable from "../../../common/Table/ArticleTable/ArticleTable";
import { useScreenSize } from "../../../functions/useScreenSize";

function PopularArticlesSection() {
  const width = useScreenSize().width;
  return (
    <div className={"bg-white pt-0 pt-md-5 pb-5 px-2 px-md-5"}>
      <div className="px-0 px-md-2 px-xl-5">
        <p className="text-center text-md-start" style={{ color: width > 767 ? "#1B2D5B" : "black", fontSize: width > 767 ? "32px" : "16px", fontWeight: 600 }}>
          Popular articles
        </p>
        <div className={`row mx-0 ${width > 1201 && "border-bottom"}`}>
          <div className={`col-12 col-xl-8 px-0`} style={{ paddingBottom: width > 1201 ? "3rem" : "0rem" }}>
            <div>
              <ArticleTable />
            </div>
          </div>
          <div className={`col-12 col-xl-4 d-md-flex justify-content-center ${width < 1200 && "border-bottom pb-5"}`}>
            <div>
              <BulletinCard />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ContactSupport />
        </div>
      </div>
    </div>
  );
}

export default PopularArticlesSection;
