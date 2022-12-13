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
          five_year: 100,
          saving: 100.1167,
        },
        {
          five_year: 218.9176,
          saving: 200.3501,
        },
        {
          five_year: 288.1381,
          saving: 300.7005,
        },
        {
          five_year: 458.8671,
          saving: 401.168,
        },
        {
          five_year: 775.9402,
          saving: 501.7527,
        },
      ],
    },
    {
      year: "2018",
      price: [
        {
          five_year: 1257.3087,
          saving: 602.4548,
        },
        {
          five_year: 1475.8779,
          saving: 703.2743,
        },
        {
          five_year: 1336.9545,
          saving: 804.2115,
        },
        {
          five_year: 837.4656,
          saving: 905.2664,
        },
        {
          five_year: 1408.3529,
          saving: 1006.4392,
        },
        {
          five_year: 1247.3722,
          saving: 1107.73,
        },
        {
          five_year: 1090.4119,
          saving: 1209.139,
        },
        {
          five_year: 1269.6478,
          saving: 1310.6664,
        },
        {
          five_year: 1090.5099,
          saving: 1412.3121,
        },
        {
          five_year: 1071.7178,
          saving: 1514.0765,
        },
        {
          five_year: 1073.6022,
          saving: 1615.9596,
        },
        {
          five_year: 748.8567,
          saving: 1717.9616,
        },
      ],
    },
    {
      year: "2019",
      price: [
        {
          five_year: 852.4039,
          saving: 1820.0825,
        },
        {
          five_year: 859.6022,
          saving: 1922.3226,
        },
        {
          five_year: 1098.8315,
          saving: 2024.682,
        },
        {
          five_year: 1394.6423,
          saving: 2127.1608,
        },
        {
          five_year: 1727.234,
          saving: 2229.7591,
        },
        {
          five_year: 2760.2551,
          saving: 2332.4772,
        },
        {
          five_year: 3247.9037,
          saving: 2435.3151,
        },
        {
          five_year: 2819.7189,
          saving: 2538.2729,
        },
        {
          five_year: 2559.8724,
          saving: 2641.3509,
        },
        {
          five_year: 2438.7206,
          saving: 2744.5492,
        },
        {
          five_year: 2713.0943,
          saving: 2847.8678,
        },
        {
          five_year: 2396.4726,
          saving: 2951.307,
        },
      ],
    },
    {
      year: "2020",
      price: [
        {
          five_year: 2260.2801,
          saving: 3054.8668,
        },
        {
          five_year: 3224.7208,
          saving: 3158.5475,
        },
        {
          five_year: 3276.8983,
          saving: 3262.3492,
        },
        {
          five_year: 2343.2447,
          saving: 3366.2719,
        },
        {
          five_year: 3483.8203,
          saving: 3470.3159,
        },
        {
          five_year: 4271.9525,
          saving: 3574.4813,
        },
        {
          five_year: 4395.098,
          saving: 3678.7682,
        },
        {
          five_year: 6462.9219,
          saving: 3783.1767,
        },
        {
          five_year: 6927.3045,
          saving: 3887.7071,
        },
        {
          five_year: 6063.3544,
          saving: 3992.3594,
        },
        {
          five_year: 6842.7489,
          saving: 4097.1338,
        },
        {
          five_year: 10876.131,
          saving: 4202.0305,
        },
      ],
    },
    {
      year: "2021",
      price: [
        {
          five_year: 13918.4681,
          saving: 4307.0495,
        },
        {
          five_year: 21219.3244,
          saving: 4412.1911,
        },
        {
          five_year: 40056.0451,
          saving: 4517.4553,
        },
        {
          five_year: 44396.5175,
          saving: 4622.8423,
        },
        {
          five_year: 52261.7328,
          saving: 4728.3523,
        },
        {
          five_year: 53258.5365,
          saving: 4833.9854,
        },
        {
          five_year: 44465.0973,
          saving: 4939.7417,
        },
        {
          five_year: 46617.5197,
          saving: 5045.6214,
        },
        {
          five_year: 76709.6331,
          saving: 5151.6246,
        },
        {
          five_year: 63059.4437,
          saving: 5257.7515,
        },
        {
          five_year: 73277.7599,
          saving: 5364.0022,
        },
        {
          five_year: 68086.8167,
          saving: 5470.3769,
        },
      ],
    },
    {
      year: "Today",
      price: [
        {
          five_year: 55517.6129,
          saving: 5576.8757,
        },
        {
          five_year: 43223.1771,
          saving: 5683.4987,
        },
        {
          five_year: 44506.5114,
          saving: 5790.2461,
        },
        {
          five_year: 50359.8947,
          saving: 5897.1181,
        },
        {
          five_year: 38816.3914,
          saving: 6004.1147,
        },
        {
          five_year: 30277.3685,
          saving: 6111.2362,
        },
        {
          five_year: 19193.7581,
          saving: 6218.4826,
        },
        {
          five_year: 25017.9424,
          saving: 6325.8542,
        },
        {
          five_year: 22378.8375,
          saving: 6433.351,
        },
        {
          five_year: 20678.2756,
          saving: 6540.9733,
        },
        {
          five_year: 22139.9319,
          saving: 6648.7211,
        },
      ],
    },
  ];
  let max_five = graph_data.map((b) => Math.max(...b.price.map((o) => o.five_year)));
  let max_saving = graph_data.map((b) => Math.max(...b.price.map((o) => o.saving)));
  let max_num = Math.max(...max_five, ...max_saving);
  let max_height_break = max_num / 200;
  const width = useScreenSize().width;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="bg-white rounded px-3 px-sm-4 px-md-5 pt-3 pb-4 pb-md-5 justify-content-center shadow" style={{ width: "100%", margin: width > 767 ? "auto" : "auto" }}>
      <div className="d-flex pb-5">
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
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-end w-full">
            {graph_data.map((each_data, gI) => (
              <>
                {each_data.price.map((price, index) => (
                  <>
                    {width > 1800 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year / max_height_break}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${price.saving / max_height_break}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 1801 && width > 1280 && index % 6 != 1 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year / max_height_break}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${price.saving / max_height_break}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 1281 && width > 940 && index % 3 != 1 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year / max_height_break}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${price.saving / max_height_break}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 941 && width > 767 && index % 2 != 1 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year / max_height_break}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${price.saving / max_height_break}px` }}></div>
                        </div>
                      </UITooltip>
                    )}
                    {width < 768 && index % 4 == 1 && (
                      <UITooltip content={`<p>Savings: ${formatter.format(price.saving)}</p><p>Five years: ${formatter.format(price.five_year)}</p>`} topRight={gI > graph_data.length / 2 ? true : false}>
                        <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year / max_height_break}px` }}>
                          <div className={UIGraphStyle.savings} style={{ height: `${price.saving / max_height_break}px` }}></div>
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
