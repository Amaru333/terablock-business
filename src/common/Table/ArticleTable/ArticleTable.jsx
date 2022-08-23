import React from "react";

import ArticleTableStyle from "./ArticleTable.module.css";

function ArticleTable({ title, data }) {
  const d = [
    {
      tag: "Market trend",
      title: "A brief introduction about cryptocurrency arbitrage",
      description: "People across the globe trade cryptocurrencies worth billions of dollars daily. Since no centralized entity keeps track of their prices..",
    },
    {
      tag: "Market trend",
      title: "A brief introduction about cryptocurrency arbitrage",
      description: "People across the globe trade cryptocurrencies worth billions of dollars daily. Since no centralized entity keeps track of their prices..",
    },
    {
      tag: "De-Fi",
      title: "A brief introduction about cryptocurrency arbitrage",
      description: "People across the globe trade cryptocurrencies worth billions of dollars daily. Since no centralized entity keeps track of their prices..",
    },
    {
      tag: "De-Fi",
      title: "A brief introduction about cryptocurrency arbitrage",
      description: "People across the globe trade cryptocurrencies worth billions of dollars daily. Since no centralized entity keeps track of their prices..",
    },
    {
      tag: "News",
      title: "A brief introduction about cryptocurrency arbitrage",
      description: "People across the globe trade cryptocurrencies worth billions of dollars daily. Since no centralized entity keeps track of their prices..",
    },
  ];
  return (
    <div>
      <h3>{title}</h3>
      <div className="row mx-0">
        {d.map((data) => (
          <div className="col-12 col-md-6 mb-3">
            <p className={[ArticleTableStyle.tag, data.tag == "Market trend" ? ArticleTableStyle.market_trend_tag : data.tag == "De-Fi" ? ArticleTableStyle.defi_tag : ArticleTableStyle.news_tag].join(" ")} style={{ marginBottom: 0 }}>
              {data.tag}
            </p>
            <p className={ArticleTableStyle.title}>{data.title}</p>
            <p className={ArticleTableStyle.description}>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleTable;
