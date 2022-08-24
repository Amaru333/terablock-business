import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import BulletinCardStyle from "./BulletinCard.module.css";
function HelpBulletinCard() {
  return (
    <div className={BulletinCardStyle.help_container}>
      <img src="/assets/images/help_center/help.svg" />
      <p className={BulletinCardStyle.title}>Discover Help Center</p>
      <p className={BulletinCardStyle.desc}>For quick solutions to most questions.</p>
      <UIButton type="secondary">Explore More</UIButton>
    </div>
  );
}

export default HelpBulletinCard;
