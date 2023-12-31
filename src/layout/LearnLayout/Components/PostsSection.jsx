import axios from "axios";
import React, { useEffect } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import Link from "next/link";

function PostsSection() {
  const width = useScreenSize().width;
  // fetch using axios from ghost api url (https://blogv2.terablock.com/ghost/api/content/posts) and store in popular_posts
  const [popular_posts, setPosts] = React.useState([]);
  const [featured_post, setFeaturePost] = React.useState([]);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts/?key=0489294cc94510ae9335da2c7f&limit=5&filter=tag:popular&include=tags").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts/?key=0489294cc94510ae9335da2c7f&filter=featured:true&limit=1&include=tags").then((res) => {
      setFeaturePost(res.data.posts);
      console.log(res.data.posts, "res.data.posts");
    });
  }, []);
  const DifficultyTag = ({ level }) => {
    const color = {
      Beginner: "#00C077",
      Intermediate: "#FFA216",
      Advanced: "#F92626",
    };
    return (
      <span className="rounded px-2 py-1" style={{ border: `1px solid ${color[level]}`, fontWeight: "700" }}>
        <span style={{ color: color[level] }}>• </span> {level}
      </span>
    );
  };
  return (
    <div className="py-5 px-0 bg-white">
      <div className="py-3" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "72%" : width > 940 ? "84%" : "98%" }}>
        <div className="row mx-0" style={{ zIndex: 1 }}>
          <div className="my-5 px-4 px-md-5 col-12 col-md-7 pe-0 pe-md-5 d-flex flex-column justify-content-start text-center pe-4 text-md-start">
            <>
              <h4 className="fw-bold mb-4" style={{ color: "#1b2b6b", fontSize: width > 767 ? "30px" : "22px" }}>
                Featured Posts
              </h4>
              <div>
                {featured_post.map((el, index) => (
                  <>
                    <div key={index}>
                      <img src={el.feature_image} className="rounded w-100" />
                      <div className="my-4 d-flex align-items-center justify-content-between">
                        <DifficultyTag level={el.tags[1]?.name} />
                        <div className="d-flex align-items-center">
                          <img src="/assets/icons/time.svg" />
                          <span style={{ color: "#797979", fontSize: "14px", marginLeft: "5px", fontWeight: "600" }}>{el.reading_time} mins</span>
                        </div>
                      </div>
                      <h4 className="fw-bold">{el.meta_title}</h4>
                      <Link href={`learn/${el.slug}`}>
                        <p className="my-2 fs-6" style={{ color: "#5a5b5d", cursor: "pointer" }}>
                          {el.excerpt} . . .<span style={{ color: "#0052FF", fontWeight: "700" }}> read more</span>
                        </p>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-md-center px-4">
            <div className="d-flex flex-column my-0 my-md-5">
              <h4 className="fw-bold mb-4" style={{ color: "#1b2b6b", fontSize: width > 767 ? "30px" : "22px" }}>
                Popular Posts
              </h4>
              <div className="d-flex flex-column">
                {popular_posts.map((post, i) => (
                  <div className="my-3" key={i} style={{ cursor: 'pointer' }}>
                      <p className="m-0" style={{ color: "#636363", fontSize: "14px", fontWeight: "600" }}>
                        {post.tags[1]?.name}
                      </p>
                      <Link href={`learn/${post.slug}`}>
                      <p className="m-0 fs-5" style={{ fontWeight: "700" }}>
                        {post.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsSection;
