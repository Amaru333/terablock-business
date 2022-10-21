import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIGraphStyle from "./UIGraph.module.css";

function UIGraph() {
  const graph_data = [
    {
      year: "Year 5",
      price: [
        {
          five_year: 120,
          saving: 30,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 130,
          saving: 60,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 100,
          saving: 20,
        },
        {
          five_year: 220,
          saving: 70,
        },
        {
          five_year: 230,
          saving: 60,
        },
      ],
    },
    {
      year: "2018",
      price: [
        {
          five_year: 220,
          saving: 50,
        },
        {
          five_year: 210,
          saving: 60,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 70,
        },
        {
          five_year: 150,
          saving: 40,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 110,
          saving: 20,
        },
        {
          five_year: 90,
          saving: 15,
        },
        {
          five_year: 80,
          saving: 10,
        },
      ],
    },
    {
      year: "2019",
      price: [
        {
          five_year: 120,
          saving: 30,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 130,
          saving: 60,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 100,
          saving: 20,
        },
        {
          five_year: 220,
          saving: 70,
        },
        {
          five_year: 230,
          saving: 60,
        },
      ],
    },
    {
      year: "2020",
      price: [
        {
          five_year: 120,
          saving: 30,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 130,
          saving: 60,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 100,
          saving: 20,
        },
        {
          five_year: 220,
          saving: 70,
        },
        {
          five_year: 230,
          saving: 60,
        },
      ],
    },
    {
      year: "2021",
      price: [
        {
          five_year: 120,
          saving: 30,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 130,
          saving: 60,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 100,
          saving: 20,
        },
        {
          five_year: 220,
          saving: 70,
        },
        {
          five_year: 230,
          saving: 60,
        },
      ],
    },
    {
      year: "Today",
      price: [
        {
          five_year: 120,
          saving: 30,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 130,
          saving: 60,
        },
        {
          five_year: 220,
          saving: 80,
        },
        {
          five_year: 190,
          saving: 50,
        },
        {
          five_year: 140,
          saving: 20,
        },
        {
          five_year: 170,
          saving: 50,
        },
        {
          five_year: 100,
          saving: 20,
        },
        {
          five_year: 220,
          saving: 70,
        },
        {
          five_year: 230,
          saving: 60,
        },
      ],
    },
  ];
  const width = useScreenSize().width;
  return (
    <div className="bg-white rounded px-3 px-sm-4 px-md-5 pt-3 pb-4 pb-md-5 justify-content-center shadow" style={{ width: "fit-content", margin: "auto" }}>
      <div className="d-flex pb-5">
        <div className={["bg-white me-3 px-2 py-3 rounded", UIGraphStyle.flex].join(" ")}>
          <div>
            <div className={UIGraphStyle.circle}></div>
          </div>
          <div className="ms-2 d-flex flex-column justify-content-between">
            <p className="mb-0 fs-6 text-black fw-bold">Savings account</p>
            <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
              $12,000
            </p>
          </div>
        </div>
        <div className={["bg-white px-2 py-3 rounded", UIGraphStyle.flex].join(" ")}>
          <div>
            <div className={UIGraphStyle.circle} style={{ backgroundColor: "rgba(37, 74, 199, 0.6)" }}></div>
          </div>
          <div className="ms-2 d-flex flex-column justify-content-between">
            <p className="mb-0 fs-6 text-black fw-bold">Crypto Investing account after 5 years</p>
            <p className="mb-0 fs-5 fw-bold" style={{ color: "#0251ff" }}>
              $58,000
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-end">
            {graph_data.map((each_data) => (
              <>
                {each_data.price.map((price, index) => (
                  <>
                    {width > 1200 && (
                      <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year}px` }}>
                        <div className={UIGraphStyle.savings} style={{ height: `${price.saving}px` }}></div>
                      </div>
                    )}
                    {width < 1201 && width > 900 && index % 3 != 1 && (
                      <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year}px` }}>
                        <div className={UIGraphStyle.savings} style={{ height: `${price.saving}px` }}></div>
                      </div>
                    )}
                    {width < 901 && width > 768 && index % 2 != 1 && (
                      <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year}px` }}>
                        <div className={UIGraphStyle.savings} style={{ height: `${price.saving}px` }}></div>
                      </div>
                    )}
                    {width < 769 && index % 3 == 1 && (
                      <div className={UIGraphStyle.five_years} style={{ height: `${price.five_year}px` }}>
                        <div className={UIGraphStyle.savings} style={{ height: `${price.saving}px` }}></div>
                      </div>
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
