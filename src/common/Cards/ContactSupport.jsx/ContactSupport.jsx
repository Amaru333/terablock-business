import React from "react";
import ContactSupportStyle from "./ContactSupport.module.css";

function ContactSupport() {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className={ContactSupportStyle.title}>Can&apos;t find what you&apos;re looking for ?</p>
      <button className={ContactSupportStyle.button}>Contact Support</button>
    </div>
  );
}

export default ContactSupport;
