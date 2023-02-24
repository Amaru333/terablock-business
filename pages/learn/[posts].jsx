import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DOMPurify from "dompurify";
import { useScreenSize } from "../../src/functions/useScreenSize";

import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

const Posts = () => {
  const router = useRouter();
  console.log(router, "router");
  const slug = router?.query?.posts;
  const width = useScreenSize().width;
  const sanitize = (content) => {
    return process.browser ? DOMPurify.sanitize(content) : content;
  };
  const [slugData, setSlugData] = useState([]);
  const url = `https://blogv2.terablock.com/ghost/api/content/posts/slug/${slug}/?key=0489294cc94510ae9335da2c7f&&include=tags,authors`;
  console.log(url, "++++");
  useEffect(() => {
    if (slug !== undefined) {
      axios.get(url).then((res) => {
        setSlugData(res.data.posts);
        console.log(slugData, "cryptoBasis from api....");
      });
    }
  }, [slug]);
  return (
    <div>
      {slugData?.map((el) => (
        <>
          {/* <div style={width > 1600 ? { paddingInline: '30%' } : width > 630 ? { paddingInline: '20%' } : { paddingInline: '0' }}>
                        <h1 className="text-start pb-4 pt-4 font-weight-bold px-3" style={{ fontWeight: 1000 }}>{el.title}</h1>
                        <div className="d-flex justify-content-center px-3">
                            <img src={el.feature_image} alt="" style={{width: '90%', overflow: 'hidden'  }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div dangerouslySetInnerHTML={{ __html: sanitize(el.html ?? {}) }} style={{ maxWidth: '90%', justifyContent: 'center', fontWeight: 500 }} className='d-flex flex-column justify-content-center' />
                        </div>
                    </div> */}
          <div class="post py-vmin8 relative">
            <header class="post-header godo-canvas">
              <h1 class="post-title text-32 md:text-4xl lg:text-44 text-title leading-tight" style={{ fontWeight: 900 }}>
                {el.title}
              </h1>
              <figure class="post-image block" style={{ paddingTop: "40px" }}>
                <img
                  class="mx-auto"
                  sizes="(max-width: 400px) 300px,(max-width: 730px) 600px, (max-width: 1600px) 100vw"
                  src={el.feature_image}
                  alt="Understand Ethereum, its Features, and its Working Mechanism"
                  width="1200"
                  height="628"
                />
                {/* <figcaption class="post-figcaption">Ethereum was founded by Vitalik Buterin and Gavin Wood in 2015.&nbsp;</figcaption> */}
              </figure>
            </header>
            <div className="d-flex align-items-center mb-4" style={{ width: "90%" }}>
              <img src={el.authors[0].profile_image} style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
              <p className="m-0 ms-2">
                By <span>{el.authors[0].name}</span>
              </p>
            </div>
            <section id="post-body" class="post-body godo-canvas mx-auto relative font-serif">
              <div dangerouslySetInnerHTML={{ __html: sanitize(el.html ?? {}) }} style={{ justifyContent: "center", fontWeight: 500 }} />
            </section>
          </div>
          <div className="flex" style={{ width: "90%", margin: "auto", marginBottom: "20px" }}>
            <TwitterShareButton url={window.location.href} title={el.title} style={{ marginRight: "20px" }}>
              <TwitterIcon />
            </TwitterShareButton>
            <FacebookShareButton url={window.location.href} title={el.title} style={{ marginRight: "20px" }}>
              <FacebookIcon />
            </FacebookShareButton>
            <LinkedinShareButton url={window.location.href} title={el.title} style={{ marginRight: "20px" }}>
              <LinkedinIcon />
            </LinkedinShareButton>
          </div>
        </>
      ))}
    </div>
  );
};

export default Posts;
