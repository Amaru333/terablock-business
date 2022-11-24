import React from "react";

function PostsSection() {
  const featured_post = {
    image: "/assets/images/learn/featured_post.png",
    difficulty: "Beginner",
    time: 18,
    title: "Web2 vs Web3 - Which is better?",
    description: "While the current version of the Internet, Web2, is used by millions, it is not without",
  };

  const popular_posts = [
    {
      title: "Beginner's guide to dapps",
      difficulty: "Beginner",
    },
    {
      title: "Can crypto really replace your bank account? ",
      difficulty: "Beginner",
    },
    {
      title: "The crypto market downturn explained",
      difficulty: "Beginner",
    },
    {
      title: "Beginner's guide to dapps",
      difficulty: "Beginner",
    },
    {
      title: "Can crypto really replace your bank account? ",
      difficulty: "Beginner",
    },
    {
      title: "The crypto market downturn explained",
      difficulty: "Beginner",
    },
  ];

  const DifficultyTag = ({ level }) => {
    const color = {
      Beginner: "#00C077",
      Intermediate: "#FFA216",
      Advanced: "#F92626",
    };
    return (
      <span className="fw-bold rounded px-2 py-1" style={{ border: `1px solid ${color[level]}` }}>
        <span style={{ color: color[level] }}>• </span> {level}
      </span>
    );
  };
  return (
    <div className="py-5 px-0 px-md-2 px-xl-5 bg-white">
      <div className="py-3" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-0" style={{ zIndex: 1 }}>
          <div className="my-5 px-4 px-md-5 col-12 col-md-7 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
            <h4 className="fw-bold mb-4" style={{ color: "#1b2b6b" }}>
              Featured Posts
            </h4>
            <div>
              <img src={featured_post.image} className="rounded w-100" />
              <div className="my-4 d-flex align-items-center justify-content-between">
                <DifficultyTag level={featured_post.difficulty} />
                <div className="d-flex align-items-center">
                  <img src="/assets/icons/time.svg" />
                  <span style={{ color: "#797979", fontSize: "14px", marginLeft: "5px" }}>{featured_post.time} mins</span>
                </div>
              </div>
              <h4 className="fw-bold">{featured_post.title}</h4>
              <p className="my-2 fs-6" style={{ color: "#5a5b5d" }}>
                {featured_post.description} . . .<span style={{ color: "#0052FF", fontWeight: "bold" }}> read more</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-md-center px-4">
            <div className="d-flex flex-column my-0 my-md-5">
              <h4 className="fw-bold text-center text-md-start" style={{ color: "#1b2b6b" }}>
                Popular Posts
              </h4>
              <div className="d-flex flex-column">
                {popular_posts.map((post, i) => (
                  <div className="my-3" key={i}>
                    <p className="m-0" style={{ color: "#5a5b5d", fontSize: "14px", fontWeight: "bold" }}>
                      {post.difficulty}
                    </p>
                    <p className="m-0 fs-5" style={{ fontWeight: "800" }}>
                      {post.title}
                    </p>
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