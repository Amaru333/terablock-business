import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UICard from "../../widgets/UICard/UICard";

function CoinsListCard({ data }) {
  const width = useScreenSize().width;

  return (
    <UICard>
      <div className="d-flex">
        <div>
          <img src={data.image} />
        </div>
        <div className="ms-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold text-primaryDark mb-0 mb-md-3">{data.title}</h4>
            {width < 1001 && (
              <div className="d-flex align-items-center">
                <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                  <img src={`./assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                  <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                    {data.volatile} Volatile
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="text-cardDescriptionColor">{data.description}</p>
          <div>
            {data.coin_images.map((image, index) => (
              <img src={image} className="me-2 me-md-3 mb-3" key={index} style={{ width: "32px" }} />
            ))}
          </div>
          <div className="d-flex justify-content-between text-center align-items-center">
            <div>
              <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                4Yr. CAGR
              </p>
              <p className="fw-bold text-success mb-0">{data.cagr}</p>
            </div>
            <div>
              <p className="text-primaryTextGray mb-1" style={{ fontSize: "12px", fontWeight: "500" }}>
                Min. Amount
              </p>
              <p className="fw-bold text-primaryDark mb-0">{data.min_amount}</p>
            </div>
            {width > 1000 ? (
              <div className="d-flex align-items-center">
                <div style={{ display: "flex", padding: "10px", borderRadius: "4px", borderWidth: "1px", borderColor: data.volatile == "High" ? "rgba(255, 153, 153, 0.48)" : data.volatile == "Med" ? "rgba(224, 166, 16, 0.32)" : "rgba(0, 174, 38, 0.32)", borderStyle: "solid" }}>
                  <img src={`./assets/images/coinslists/${data.volatile}-volatile.svg`} style={{ width: "14px" }} />
                  <p className="mb-0 ms-2" style={{ fontWeight: "600", fontSize: "10px", color: data.volatile == "High" ? "#D40707" : data.volatile == "Med" ? "#E0A610" : "#00AE26" }}>
                    {data.volatile} Volatile
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ width: "3rem" }}></div>
            )}
          </div>
        </div>
      </div>
    </UICard>
  );
}

export default CoinsListCard;
