import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";
import UICard from "../../widgets/UICard/UICard";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

function BuyCryptoTable() {
  const lineChart = ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, {
    id: "uniqueid",
    afterDraw: function (chart, easing) {
      if (chart.tooltip?._active && chart.tooltip?._active.length) {
        const activePoint = chart.tooltip?._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.stroke();
        ctx.restore();
      }
    },
  });
  let graph_data = {
    labels: ["8:00", "8:10", "8:20", "8:30", "8:40", "8:50", "9:00", "9:10", "9:20", "9:30", "9:40", "9:50", "10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30", "13:40", "13:50"],
    datasets: [
      {
        label: "First dataset",
        data: [81002, 82117, 82119, 82365, 82311, 83175, 85242, 86442, 84235, 84764, 85112, 83321, 84221, 85223, 85231, 86701, 85213, 86989, 85002, 83117, 84119, 84365, 83311, 83175, 85242, 86442, 84235, 84764, 85112, 83321, 84221, 85223, 85231, 86701, 85213, 86989],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(202,218,252,0)");
          gradient.addColorStop(1, "rgba(239,246,253,0)");
          return gradient;
        },
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.5,
      },
    ],
  };
  const options = {
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
          maxRotation: 0,
          minRotation: 0,
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    interaction: {
      intersect: true,
    },
  };

  const screenSize = useScreenSize();
  const tableData = [
    {
      name: "BNB",
      image: "./assets/images/bnb.png",
      symbol: "BNB",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Bitcoin",
      image: "./assets/images/bnb.png",
      symbol: "BTC",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Ethereum",
      image: "./assets/images/bnb.png",
      symbol: "ETH",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
    {
      name: "Terra",
      image: "./assets/images/bnb.png",
      symbol: "LUNA",
      last_price: "$41,263.00",
      change: "+35.74%",
      market_cap: "$784,393M",
    },
  ];
  if (screenSize.width > 768) {
    return (
      <div>
        {/* <div style={{ width: "100px" }}>
          <Line data={data} options={options} />
        </div>
        <div style={{ width: "100px" }}>
          <Line data={data} options={options} />
        </div> */}
        <UICard>
          {/* <p className="fw-bolder text-center fs-5 mt-3">Trending Market</p> */}
          <div className="row text-black border-bottom mt-3 text-center mx-4" style={{ fontWeight: "600", fontSize: "14px" }}>
            <p className="col-3 col-md-5 mb-2 text-start">Name</p>
            {/* <p className="col mb-2">Symbol</p> */}
            <p className="col mb-2">Price</p>
            <p className="col mb-2">Change</p>
            <p className="col mb-2">Chart</p>
            <p className="col mb-2">Trade</p>
          </div>
          {tableData.map((data, index) => (
            <div className={`row mx-4 text-center align-items-center justify-content-center my-2 pb-2 ${index < tableData?.length - 1 && "border-bottom"}`} key={index}>
              <div className="col-3 col-md-5 d-flex flex-row align-items-center">
                <div>
                  <img src={data.image} />
                </div>
                <p className="mb-0 ms-2" style={{ fontWeight: 600, color: "#1b2b6b" }}>
                  {data.name}
                </p>
                <p className="mb-0 ms-2" style={{ fontWeight: 400, color: "#1b2b6b", fontSize: "14px" }}>
                  {data.symbol}
                </p>
              </div>
              {/* <p className="col mb-0 text-primaryTextGray">{data.symbol}</p> */}
              <p className="col mb-0" style={{ fontWeight: 600, color: "#1b2b6b" }}>
                {data.last_price}
              </p>
              <p className="col mb-0 text-success d-flex justify-content-center" style={{ fontWeight: 600 }}>
                {/* <img src="./assets/icons/up-square.svg" className="me-1" /> */}
                {data.change}
              </p>
              <p className="col mb-0 text-tableDataColor d-flex justify-content-center" style={{ fontWeight: 500 }}>
                {/* {data.market_cap} */}
                <div style={{ width: "100px" }}>
                  <Line key={index} data={graph_data} options={options} />
                </div>
              </p>
              <div className="col d-flex justify-content-center">
                <p className="text-white mb-0" style={{ padding: "5px 35px", borderRadius: "8px", fontWeight: 600, backgroundColor: "#0251ff" }}>
                  Buy
                </p>
              </div>
            </div>
          ))}
        </UICard>
      </div>
    );
  } else {
    return (
      <div>
        <UICard>
          <p className="fs-4 fw-bolder border-bottom pb-2 mb-0">Trending Market</p>
          {tableData.map((data, index) => (
            <div className="row" key={index}>
              <div className="col d-flex flex-row align-items-center">
                <div>
                  <img src={data.image} />
                </div>
                <p className="mb-0 ms-0 text-tableDataColor ps-1" style={{ fontWeight: 600 }}>
                  {data.name}
                </p>
              </div>
              <div className="col text-end align-self-center">
                <p className="mb-0 text-tableDataColor" style={{ fontWeight: 500 }}>
                  {data.last_price}
                </p>
                <p className="mb-0 text-success d-flex justify-content-end" style={{ fontSize: "10px", fontWeight: 600 }}>
                  <img src="./assets/icons/up-square.svg" className="me-0" style={{ width: "10px" }} />
                  {data.change}
                </p>
              </div>
              <div className="col d-flex justify-content-center">
                <p className="bg-white rounded text-primaryBlue px-4 border border-primaryBlue mt-3 pb-1" style={{ fontWeight: 600 }}>
                  {" "}
                  Buy{" "}
                </p>
              </div>
            </div>
          ))}
        </UICard>
      </div>
    );
  }
}

export default BuyCryptoTable;
