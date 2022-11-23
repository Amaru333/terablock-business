import React from "react";
import UISearchBar from "../../../widgets/UISearchBar/UISearchBar";

function LearnHeroComponent() {
  return (
    <div className="py-5 px-0 px-md-2 px-xl-5">
      <div className="py-3" style={{ maxWidth: "1500px", margin: "auto" }}>
        <div className="row mx-0" style={{ zIndex: 1 }}>
          <div className="my-5 px-4 px-md-5 col-12 col-md-7 pe-0 pe-md-5 d-flex flex-column justify-content-center text-center pe-4 text-md-start">
            <h1 className="fw-bold" style={{ color: "#1b2b6b" }}>
              Everything you need to know, about Crypto & Blockchain
            </h1>
            <p className="my-4 fs-6" style={{ color: "#5a5b5d" }}>
              For novices, seasoned investors, and everyone in between, beginner's tutorials, useful advice, and market updates
            </p>
            <div>
              <UISearchBar placeholder="Search anything..." />
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/assets/icons/learn_hero.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnHeroComponent;
