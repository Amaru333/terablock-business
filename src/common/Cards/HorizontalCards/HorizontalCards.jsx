import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";
import Link from "next/link";

import HorizontalCardsStyle from "./HorizontalCards.module.css";
import { useRouter } from "next/router";
import NewsCard from "./NewsCard";

function HorizontalCards({ data, description_1, description_2, title, id }) {
  const router = useRouter();
  return (
    <div className="pb-5 bg-white border-bottom" id={id}>
      <div className="text-center px-4 px-md-5 pb-3">
        <h2 className="pt-5" style={{ color: "#1b2b6b" }}>
          <b>{title}</b>
        </h2>
        <p className="m-0" style={{ color: "#5a5b5b" }}>
          {description_1}
        </p>
        <p className="mb-5" style={{ color: "#5a5b5b" }}>
          {description_2}
        </p>
      </div>
      <div className={["d-flex ps-3 ps-md-5 ms-0 ms-md-5", HorizontalCardsStyle.horizontal_scroll].join(" ")}>
        {data?.map((item, index) => (
          <div className="pe-3 pe-md-5 mb-3" key={index}>
            <NewsCard title={item.title} image={item.feature_image} description={item.excerpt} difficulty={item.tags[1]?.name} time={item.reading_time} slug={item.slug} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <UIButton type="primary" onClick={() => router.push("/learn/category/" + id)}>
          Explore more
        </UIButton>
      </div>
    </div>
  );
}

export default HorizontalCards;
