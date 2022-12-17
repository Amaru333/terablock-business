import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

function StayUpdated() {
  const width = useScreenSize().width;
  return (
    <div style={{ padding: "75px 0" }}>
      <p className="h4 mb-3 px-4 text-center" style={{ color: "#1b2b6b" }}>
        <b>Stay updated on the latest TeraBlock news</b>
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <input type="text" placeholder="Enter your email address" className="w-100 px-3 py-2 rounded border" style={{ maxWidth: width > 767 ? "300px" : "250px" }} />
        <div>
          <UIButton type="primary">Sign Up</UIButton>
        </div>
      </div>
    </div>
  );
}

export default StayUpdated;
