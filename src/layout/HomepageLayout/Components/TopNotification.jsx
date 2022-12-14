import { useRouter } from "next/router";
import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function TopNotification() {
  const width = useScreenSize().width;
  const router = useRouter();
  return (
    <div className="text-center d-none d-md-flex align-self-center" style={{ backgroundColor: "#1b2b6b" }}>
      <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}>
        <h6 className="text-white p-2 mb-0 flex-grow-1" style={{ cursor: "pointer", fontSize: "14px" }} onClick={() => window.open("https://stake.terablock.com/pools", "_blank")}>
          <span className="badge badge-secondary bg-primaryDark py-2 mx-3">NEW</span>Save upto 40% on fees and get attractive interest rates when you stake TBC. Join the Terablock Rewards Program today!
          <img src="/assets/icons/close_button.svg" className="px-5" />
        </h6>
      </div>
    </div>
  );
}

export default TopNotification;
