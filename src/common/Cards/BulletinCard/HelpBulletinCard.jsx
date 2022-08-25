import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import BulletinCardStyle from "./BulletinCard.module.css";
function HelpBulletinCard() {
  return (
    <div className={BulletinCardStyle.help_container}>
      <div className="d-flex flex-row-reverse flex-md-column justify-content-between justify-content-md-start">
        <div>
          <img src="/assets/images/help_center/help.svg" />
        </div>
        <div className="d-flex flex-column">
          <p className={BulletinCardStyle.title}>Discover Help Center</p>
          <p className={BulletinCardStyle.desc}>For quick solutions to most questions.</p>
        </div>
      </div>
      <UIButton type="secondary">Explore More</UIButton>
    </div>
  );
}

export default HelpBulletinCard;
