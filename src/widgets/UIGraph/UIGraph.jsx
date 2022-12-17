import React, { useEffect, useState } from "react";
import { abbreviateNumber } from "../../functions/abbreviateNumber";
import { useScreenSize } from "../../functions/useScreenSize";
import UIGraphStyle from "./UIGraph.module.css";
import UITooltip from "../UITooltip/UITooltip";

function UIGraph(multiplier) {
  const graph_data = [
    {
      year: "2017",
      price: [
        {
          five_year: multiplier?.multiplier * 100,
          saving: multiplier?.multiplier * 100.1167,
        },
        {
          five_year: multiplier?.multiplier * 218.9176,
          saving: multiplier?.multiplier * 200.3501,
        },
        {
          five_year: multiplier?.multiplier * 288.1381,
          saving: multiplier?.multiplier * 300.7005,
        },
        {
          five_year: multiplier?.multiplier * 458.8671,
          saving: multiplier?.multiplier * 401.168,
        },
        {
          five_year: multiplier?.multiplier * 775.9402,
          saving: multiplier?.multiplier * 501.7527,
        },
      ],
    },
    {
      year: "2018",
      price: [
        {
          five_year: multiplier?.multiplier * 1257.3087,
          saving: multiplier?.multiplier * 602.4548,
        },
        {
          five_year: multiplier?.multiplier * 1475.8779,
          saving: multiplier?.multiplier * 703.2743,
        },
        {
          five_year: multiplier?.multiplier * 1336.9545,
          saving: multiplier?.multiplier * 804.2115,
        },
        {
          five_year: multiplier?.multiplier * 837.4656,
          saving: multiplier?.multiplier * 905.2664,
        },
        {
          five_year: multiplier?.multiplier * 1408.3529,
          saving: multiplier?.multiplier * 1006.4392,
        },
        {
          five_year: multiplier?.multiplier * 1247.3722,
          saving: multiplier?.multiplier * 1107.73,
        },
        {
          five_year: multiplier?.multiplier * 1090.4119,
          saving: multiplier?.multiplier * 1209.139,
        },
        {
          five_year: multiplier?.multiplier * 1269.6478,
          saving: multiplier?.multiplier * 1310.6664,
        },
        {
          five_year: multiplier?.multiplier * 1090.5099,
          saving: multiplier?.multiplier * 1412.3121,
        },
        {
          five_year: multiplier?.multiplier * 1071.7178,
          saving: multiplier?.multiplier * 1514.0765,
        },
        {
          five_year: multiplier?.multiplier * 1073.6022,
          saving: multiplier?.multiplier * 1615.9596,
        },
        {
          five_year: multiplier?.multiplier * 748.8567,
          saving: multiplier?.multiplier * 1717.9616,
        },
      ],
    },
    {
      year: "2019",
      price: [
        {
          five_year: multiplier?.multiplier * 852.4039,
          saving: multiplier?.multiplier * 1820.0825,
        },
        {
          five_year: multiplier?.multiplier * 859.6022,
          saving: multiplier?.multiplier * 1922.3226,
        },
        {
          five_year: multiplier?.multiplier * 1098.8315,
          saving: multiplier?.multiplier * 2024.682,
        },
        {
          five_year: multiplier?.multiplier * 1394.6423,
          saving: multiplier?.multiplier * 2127.1608,
        },
        {
          five_year: multiplier?.multiplier * 1727.234,
          saving: multiplier?.multiplier * 2229.7591,
        },
        {
          five_year: multiplier?.multiplier * 2760.2551,
          saving: multiplier?.multiplier * 2332.4772,
        },
        {
          five_year: multiplier?.multiplier * 3247.9037,
          saving: multiplier?.multiplier * 2435.3151,
        },
        {
          five_year: multiplier?.multiplier * 2819.7189,
          saving: multiplier?.multiplier * 2538.2729,
        },
        {
          five_year: multiplier?.multiplier * 2559.8724,
          saving: multiplier?.multiplier * 2641.3509,
        },
        {
          five_year: multiplier?.multiplier * 2438.7206,
          saving: multiplier?.multiplier * 2744.5492,
        },
        {
          five_year: multiplier?.multiplier * 2713.0943,
          saving: multiplier?.multiplier * 2847.8678,
        },
        {
          five_year: multiplier?.multiplier * 2396.4726,
          saving: multiplier?.multiplier * 2951.307,
        },
      ],
    },
    {
      year: "2020",
      price: [
        {
          five_year: multiplier?.multiplier * 2260.2801,
          saving: multiplier?.multiplier * 3054.8668,
        },
        {
          five_year: multiplier?.multiplier * 3224.7208,
          saving: multiplier?.multiplier * 3158.5475,
        },
        {
          five_year: multiplier?.multiplier * 3276.8983,
          saving: multiplier?.multiplier * 3262.3492,
        },
        {
          five_year: multiplier?.multiplier * 2343.2447,
          saving: multiplier?.multiplier * 3366.2719,
        },
        {
          five_year: multiplier?.multiplier * 3483.8203,
          saving: multiplier?.multiplier * 3470.3159,
        },
        {
          five_year: multiplier?.multiplier * 4271.9525,
          saving: multiplier?.multiplier * 3574.4813,
        },
        {
          five_year: multiplier?.multiplier * 4395.098,
          saving: multiplier?.multiplier * 3678.7682,
        },
        {
          five_year: multiplier?.multiplier * 6462.9219,
          saving: multiplier?.multiplier * 3783.1767,
        },
        {
          five_year: multiplier?.multiplier * 6927.3045,
          saving: multiplier?.multiplier * 3887.7071,
        },
        {
          five_year: multiplier?.multiplier * 6063.3544,
          saving: multiplier?.multiplier * 3992.3594,
        },
        {
          five_year: multiplier?.multiplier * 6842.7489,
          saving: multiplier?.multiplier * 4097.1338,
        },
        {
          five_year: multiplier?.multiplier * 10876.131,
          saving: multiplier?.multiplier * 4202.0305,
        },
      ],
    },
    {
      year: "2021",
      price: [
        {
          five_year: multiplier?.multiplier * 13918.4681,
          saving: multiplier?.multiplier * 4307.0495,
        },
        {
          five_year: multiplier?.multiplier * 21219.3244,
          saving: multiplier?.multiplier * 4412.1911,
        },
        {
          five_year: multiplier?.multiplier * 40056.0451,
          saving: multiplier?.multiplier * 4517.4553,
        },
        {
          five_year: multiplier?.multiplier * 44396.5175,
          saving: multiplier?.multiplier * 4622.8423,
        },
        {
          five_year: multiplier?.multiplier * 52261.7328,
          saving: multiplier?.multiplier * 4728.3523,
        },
        {
          five_year: multiplier?.multiplier * 53258.5365,
          saving: multiplier?.multiplier * 4833.9854,
        },
        {
          five_year: multiplier?.multiplier * 44465.0973,
          saving: multiplier?.multiplier * 4939.7417,
        },
        {
          five_year: multiplier?.multiplier * 46617.5197,
          saving: multiplier?.multiplier * 5045.6214,
        },
        {
          five_year: multiplier?.multiplier * 76709.6331,
          saving: multiplier?.multiplier * 5151.6246,
        },
        {
          five_year: multiplier?.multiplier * 63059.4437,
          saving: multiplier?.multiplier * 5257.7515,
        },
        {
          five_year: multiplier?.multiplier * 73277.7599,
          saving: multiplier?.multiplier * 5364.0022,
        },
        {
          five_year: multiplier?.multiplier * 68086.8167,
          saving: multiplier?.multiplier * 5470.3769,
        },
      ],
    },
    {
      year: "Today",
      price: [
        {
          five_year: multiplier?.multiplier * 55517.6129,
          saving: multiplier?.multiplier * 5576.8757,
        },
        {
          five_year: multiplier?.multiplier * 43223.1771,
          saving: multiplier?.multiplier * 5683.4987,
        },
        {
          five_year: multiplier?.multiplier * 44506.5114,
          saving: multiplier?.multiplier * 5790.2461,
        },
        {
          five_year: multiplier?.multiplier * 50359.8947,
          saving: multiplier?.multiplier * 5897.1181,
        },
        {
          five_year: multiplier?.multiplier * 38816.3914,
          saving: multiplier?.multiplier * 6004.1147,
        },
        {
          five_year: multiplier?.multiplier * 30277.3685,
          saving: multiplier?.multiplier * 6111.2362,
        },
        {
          five_year: multiplier?.multiplier * 19193.7581,
          saving: multiplier?.multiplier * 6218.4826,
        },
        {
          five_year: multiplier?.multiplier * 25017.9424,
          saving: multiplier?.multiplier * 6325.8542,
        },
        {
          five_year: multiplier?.multiplier * 22378.8375,
          saving: multiplier?.multiplier * 6433.351,
        },
        {
          five_year: multiplier?.multiplier * 20678.2756,
          saving: multiplier?.multiplier * 6540.9733,
        },
        {
          five_year: multiplier?.multiplier * 22139.9319,
          saving: multiplier?.multiplier * 6648.7211,
        },
      ],
    },
  ];

  let maxIndex = 0;
  let maxGi = 0;
  let maxValue = 0.1;

  let max = graph_data.map((d, i) =>
    d.price.map((p, j) => {
      if (p.five_year > maxValue) {
        maxIndex = j;
        maxGi = i;
        maxValue = p.five_year;
      }
      if (p.saving > maxValue) {
        maxIndex = j;
        maxGi = i;
        maxValue = p.saving;
      }
    })
  );

  let graphHeight = 300;
  let graphMultiplierSize = (multiplier.multiplier / (1 / 0.75) + 25) / 100;

  let max_height_break = maxValue / graphHeight;

  const width = useScreenSize().width;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="bg-white rounded px-3 px-sm-4 px-md-5 pt-3 pb-4 pb-md-5 justify-content-center shadow" style={{ width: "100%", margin: width > 767 ? "auto" : "auto" }}>
      <div className="d-flex pb-5">
        {width > 767 ? (
          <>
            <div className={["bg-white me-3 px-2 py-3 rounded", UIGraphStyle.flex].join(" ")}>
              <div>
                <div className={UIGraphStyle.circle}></div>
              </div>
              <div className="ms-2 d-flex flex-column justify-content-between">
                <p className="mb-0 fs-6 text-black fw-bold">Monthly Deposit</p>
                <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                  {width > 767 ? formatter.format((0.0 + 100 * multiplier.multiplier).toFixed(2)) : <>${abbreviateNumber(0.0 + 100 * multiplier.multiplier)}</>}
                </p>
              </div>
            </div>
            <div className={["bg-white me-3 px-2 py-3 rounded", UIGraphStyle.flex].join(" ")}>
              <div>
                <div className={UIGraphStyle.circle}></div>
              </div>
              <div className="ms-2 d-flex flex-column justify-content-between">
                <p className="mb-0 fs-6 text-black fw-bold">Savings account</p>
                <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                  {width > 767 ? formatter.format((6648.7211 * multiplier.multiplier).toFixed(2)) : <>${abbreviateNumber(multiplier.multiplier * 6648)}</>}
                </p>
              </div>
            </div>
            <div className={["bg-white px-2 py-3 rounded", UIGraphStyle.flex].join(" ")}>
              <div>
                <div className={UIGraphStyle.circle} style={{ backgroundColor: "rgba(37, 74, 199, 0.6)" }}></div>
              </div>
              <div className="ms-2 d-flex flex-column justify-content-between">
                <p className="mb-0 fs-6 text-black fw-bold">CoinsList account after 5 years</p>
                <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                  {width > 767 ? formatter.format((22139.9319 * multiplier.multiplier).toFixed(2)) : <>${abbreviateNumber(multiplier.multiplier * 22139)}</>}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className={UIGraphStyle.circle}></div>
                <p className="ms-2 mb-0 fs-6 text-black fw-bold">Monthly Deposit</p>
              </div>
              <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                <>${abbreviateNumber(0.0 + 100 * multiplier.multiplier)}</>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className={UIGraphStyle.circle}></div>
                <p className="ms-2 mb-0 fs-6 text-black fw-bold">Savings account</p>
              </div>
              <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                <>${abbreviateNumber(multiplier.multiplier * 6648)}</>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className={UIGraphStyle.circle} style={{ backgroundColor: "rgba(37, 74, 199, 0.6)" }}></div>
                <p className="ms-2 mb-0 fs-6 text-black fw-bold">CoinsList account after 5 years</p>
              </div>
              <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
                <>${abbreviateNumber(multiplier.multiplier * 22139)}</>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-end w-full" style={{ minHeight: `${graphHeight}px` }}>
            {graph_data.map((each_data, gI) => (
              <>
                {each_data.price.map((price, index) => (
                  <>
                    {width > 1800 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${(price.five_year / max_height_break) * graphMultiplierSize}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${(price.saving / max_height_break) * graphMultiplierSize}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 1801 && width > 1280 && (index % 6 != 1 || (gI == maxGi && index == maxIndex)) && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${(price.five_year / max_height_break) * graphMultiplierSize}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${(price.saving / max_height_break) * graphMultiplierSize}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 1281 && width > 940 && (index % 3 != 1 || (gI == maxGi && index == maxIndex)) && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${(price.five_year / max_height_break) * graphMultiplierSize}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${(price.saving / max_height_break) * graphMultiplierSize}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 941 && width > 767 && (index % 2 != 1 || (gI == maxGi && index == maxIndex)) && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${(price.five_year / max_height_break) * graphMultiplierSize}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${(price.saving / max_height_break) * graphMultiplierSize}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 768 && (index % 4 == 1 || (gI == maxGi && index == maxIndex)) && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${(price.five_year / max_height_break) * graphMultiplierSize}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${(price.saving / max_height_break) * graphMultiplierSize}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                  </>
                ))}
              </>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-3">
            {graph_data.map((each_data, index) => (
              <p className="mb-0 fw-bold text-primaryDark" key={index}>
                {each_data.year}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIGraph;
