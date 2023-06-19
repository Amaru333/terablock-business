import { useRouter } from "next/router";
import React, { useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

function TopNotification() {
  const width = useScreenSize().width;
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <div className="text-center d-none d-md-flex align-self-center" style={{ backgroundColor: "#1b2b6b" }}>
      {!active ? (
        <div style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }} onClick={() => setActive(!active)}>
          <h6 className="text-white p-2 mb-0 flex-grow-1" style={{ cursor: "pointer", fontSize: "14px" }}>
            <span className="badge badge-secondary bg-primaryDark py-2 mx-3">NEW</span>Save upto 40% on fees and get attractive interest rates when you stake TBC.{" "}
            <u>Join the Terablock Rewards Program today!</u>
            <img src="/assets/icons/close_button.svg" className="px-5" />
          </h6>
        </div>
      ) : null}
    </div>
  );
}

export default TopNotification;
