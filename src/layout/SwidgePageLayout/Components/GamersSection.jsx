import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";

import GamersSectionStyle from "../Styles/GamersSection.module.css";

function GamersSection() {
  const width = getScreenSize().width;
  return (
    <div className="py-5 bg-white">
      <div className="text-center mb-2 px-3">
        <h3 className="text-primaryTextDark">
          <b>
            Bringing Gamers Together<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray fs-6">Get to know the people and communities pushing the crypto economy forward</p>
      </div>
      <div className="row mx-0 px-3 px-md-5 pt-3 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
          <div>
            <p className="text-cardDescriptionColor fs-6">
              It is undeniable that cryptocurrency has made a difference in the gaming industry. Blockchain-based <b>Play-to-Earn (P2E)</b> games are the paradigm shift in the gaming industry, which is taking over the traditional games.{" "}
            </p>
            <p className="text-cardDescriptionColor fs-6">Users now have an option not just to play games but also to extract value out of them. However, this adoption has been slow due to the complexities of Web3 and the huge learning curve that users have to face to enter into these games.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="position-relative align-self-center">
            <img src="./assets/images/gamers-header.png" className={`${width < 1120 && "w-100"}`} />
            <div className={GamersSectionStyle.circular_blur}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamersSection;
