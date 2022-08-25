import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import BulletinCardStyle from "./BulletinCard.module.css";

function BulletinCard() {
  return (
    <div className={BulletinCardStyle.container}>
      <div className="d-flex flex-row-reverse flex-md-column justify-content-between justify-content-md-start">
        <div>
          <img src="/assets/images/help_center/bulletin.svg" style={{ height: "40px" }} />
        </div>
        <div className="d-flex flex-column">
          <p className={BulletinCardStyle.title}>Are you new to crypto?</p>
          <p className={BulletinCardStyle.desc}>Explore More Ways to Find Answers</p>
        </div>
      </div>
      <UIButton type="primary">Learn More</UIButton>
    </div>
  );
}

export default BulletinCard;
