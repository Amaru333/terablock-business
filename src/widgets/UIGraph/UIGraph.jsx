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
    <div className="d-flex bg-white rounded px-4 px-md-5 py-4 py-md-5 justify-content-center shadow" style={{ width: "fit-content", margin: "auto" }}>
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
  );
}

export default UIGraph;
