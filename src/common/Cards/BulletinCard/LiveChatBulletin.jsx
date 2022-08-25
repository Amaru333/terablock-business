import React from "react";
import UIButton from "../../../widgets/UIButtons/UIButton";

import BulletinCardStyle from "./BulletinCard.module.css";
function LiveChatBulletin() {
  return (
    <div className={BulletinCardStyle.chat_container}>
      <div className="d-flex flex-row-reverse flex-md-column justify-content-between justify-content-md-start">
        <div>
          <img src="/assets/images/help_center/chat-support.svg" />
        </div>
        <div className="d-flex flex-column">
          <p className={BulletinCardStyle.title}>Live chat support</p>
          <p className={BulletinCardStyle.desc} style={{ marginBottom: "3rem" }}>
            Chat with an agent or use our virtual assistant to troubleshoot.
          </p>
        </div>
      </div>
      <div className="mt-1 mt-md-0">
        <UIButton type="primary">Chat with us</UIButton>
      </div>
    </div>
  );
}

export default LiveChatBulletin;
