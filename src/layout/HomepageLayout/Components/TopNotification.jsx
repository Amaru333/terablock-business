import React from "react";

function TopNotification() {
  return (
    <div className="text-center d-none d-md-flex align-self-center" style={{ backgroundColor: "#1b2b6b" }}>
      <div style={{ maxWidth: "1500px", margin: "auto" }}>
        <h6 className="text-white p-2 mb-0 flex-grow-1">
          <span className="badge badge-secondary bg-primaryDark py-2 mx-3">NEW</span>Save upto 40% on fees and get attractive interest rates when you stake TBC. Join the Terablock Rewards Program today!
          <img src="./assets/icons/close_button.svg" className="px-5" />
        </h6>
      </div>
    </div>
  );
}

export default TopNotification;
