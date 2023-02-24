import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DOMPurify from "dompurify";

import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

const Posts = () => {
  const router = useRouter();
  const slug = router?.query?.posts;
  console.log(router.query.posts);
  const sanitize = (content) => {
    return process.browser ? DOMPurify.sanitize(content) : content;
  };
  const [slugData, setSlugData] = useState([]);
  // DOMPurify.sanitize('<img src=x onerror=alert(1)//>');
  const url = `https://blogv2.terablock.com/ghost/api/content/posts/slug/${slug}/?key=0489294cc94510ae9335da2c7f&include=authors`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setSlugData(res.data.posts);
      console.log(slugData, "cryptoBasis from api....");
    });
  }, []);
  //   console.log(slugData[0].html,'++++++++++++')
  //   const myArray = slugData[0].html.split("<img src=");
  //   console.log(myArray,'+++++++++++')
  const myStyle = {
    backgroundImage: "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "20vh",
    marginTop: "-70px",
    // fontSize: '50px',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    // <div>Posts</div>
    <div>
      {slugData.map((el) => (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center"
              style={{ backgroundImage: `url(${el.feature_image})`, maxHeight: "50vh", width: "99vw", backgroundPosition: "center", height: "400px", overflow: "hidden" }}
            >
              {/* <img src={el.feature_image} alt="" height={600} width={600} /> */}
            </div>
            <h1 className="text-center pb-4 pt-4 font-weight-bold d-flex justify-content-center">{el.title}</h1>
            <div className="d-flex align-items-center mb-4" style={{ width: "90%" }}>
              <img src={el.authors[0].profile_image} style={{ width: "42px", height: "42px", borderRadius: "50%" }} />
              <p className="m-0 ms-2">
                By <span>{el.authors[0].name}</span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <div dangerouslySetInnerHTML={{ __html: sanitize(el.html ?? {}) }} style={{ maxWidth: "90%", justifyContent: "center" }} className="d-flex flex-column justify-content-center" />
            </div>
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
