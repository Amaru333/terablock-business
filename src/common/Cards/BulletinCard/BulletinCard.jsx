import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import BulletinCardStyle from "./BulletinCard.module.css";

function BulletinCard() {
  return (
    <div className={BulletinCardStyle.container}>
      <img src="/assets/images/help_center/bulletin.svg" />
      <p className={BulletinCardStyle.title}>Are you new to crypto?</p>
      <p className={BulletinCardStyle.desc}>Explore More Ways to Find Answers</p>
      <UIButton type="primary">Learn More</UIButton>
    </div>
  );
}

export default BulletinCard;
