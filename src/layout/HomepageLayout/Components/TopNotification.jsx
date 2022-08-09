import React from "react";

function TopNotification() {
  return (
    <div className="primary-gradient text-center d-none d-md-flex align-self-center">
      <h6 className="text-white p-2 mb-0 flex-grow-1">
        <span className="badge badge-secondary bg-primaryDark py-2 mx-3">NEW</span>TBC Stake Pool FOUR is live! <u>Sign up to get loyalty rewards, upto 40% discount on transaction fees, and more.</u>
      </h6>
      <img src="./assets/icons/close_button.svg" className="px-5" />
    </div>
  );
}

export default TopNotification;
