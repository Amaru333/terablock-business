import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NewsCard from "../../../../src/common/Cards/HorizontalCards/NewsCard";

function PostSlug() {
  const [response, setResponse] = useState([]);
  const router = useRouter();
  console.log(router.query, "QUERYYYY");
  const title = {
    cryptobasics: "Crypto Basics",
    tips: "Tips and Tutorials",
  };
  useEffect(() => {
    if (router.query?.slug) {
      axios.get(`https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&&filter=tag:${router.query.slug}&include=tags`).then((res) => {
        setResponse(res.data.posts);
        console.log(res, "cryptoBasis from api....");
      });
    }
  }, [router.query?.slug]);
  return (
    <div className="px-4" style={{ maxWidth: "1480px", margin: "auto" }}>
      <h2 className="pt-5 mb-4" style={{ color: "#1b2b6b", fontWeight: "bold" }}>
        {title[router.query?.slug]}
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
        {response?.map((item, index) => (
          <div className="pe-3 pe-md-5 mb-4 col" key={index}>
            <NewsCard title={item.title} image={item.feature_image} description={item.excerpt} difficulty={item.tags[1]?.name} time={item.reading_time} slug={item.slug} center />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostSlug;
