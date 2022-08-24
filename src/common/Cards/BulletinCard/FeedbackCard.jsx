import React from "react";

import BulletinCardStyle from "./BulletinCard.module.css";
function FeedbackCard() {
  return (
    <div className="border-top pt-4 pb-5">
      <p className={BulletinCardStyle.feedback_title}>Was this article helpful?</p>
      <div className="d-flex justify-content-between justify-content-xl-start">
        <button className={BulletinCardStyle.feedback_button}>It was helpful</button>
        <button className={[BulletinCardStyle.feedback_button, "ms-xl-4"].join(" ")}>Not helpful</button>
      </div>
    </div>
  );
}

export default FeedbackCard;
