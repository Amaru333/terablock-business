import React from "react";

import BulletinCardStyle from "./BulletinCard.module.css";
function ContactTeamBulletin() {
  return (
    <div className={BulletinCardStyle.contact_container}>
      <div className="d-flex flex-row-reverse flex-md-column justify-content-between justify-content-md-start">
        <div>
          <img src="/assets/images/help_center/contact-team.svg" style={{ width: "40px" }} />
        </div>
        <div className="d-flex flex-column">
          <p className={BulletinCardStyle.title}>Contact Team</p>
          <p className={[BulletinCardStyle.desc, "pb-2"].join(" ")}>Get in touch with our team to discuss your issues and concerns</p>

          <div className="pt-3 border-top">
            <div>
              <div className="d-flex my-2">
                <div className="pe-3 d-flex align-items-center">
                  <img src="/assets/images/help_center/empty-icon.svg" className="" style={{ width: "26px" }} />
                </div>
                <p className={["mb-0 ps-3 border-start", BulletinCardStyle.career_title].join(" ")}>Partnerships</p>
              </div>
              <p className={BulletinCardStyle.career_mail}>pr@terablock.com</p>
            </div>
            <div>
              <div className="d-flex my-2">
                <div className="pe-3 d-flex align-items-center">
                  <img src="/assets/images/help_center/empty-icon.svg" className="" style={{ width: "26px" }} />
                </div>
                <p className={["mb-0 ps-3 border-start", BulletinCardStyle.career_title].join(" ")}>Partnerships</p>
              </div>
              <p className={BulletinCardStyle.career_mail}>pr@terablock.com</p>
            </div>
            <div>
              <div className="d-flex my-2">
                <div className="pe-3 d-flex align-items-center">
                  <img src="/assets/images/help_center/empty-icon.svg" className="" style={{ width: "26px" }} />
                </div>
                <p className={["mb-0 ps-3 border-start", BulletinCardStyle.career_title].join(" ")}>Partnerships</p>
              </div>
              <p className={BulletinCardStyle.career_mail}>pr@terablock.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTeamBulletin;
