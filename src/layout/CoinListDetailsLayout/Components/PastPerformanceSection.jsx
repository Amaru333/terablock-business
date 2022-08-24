import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import UICard from "../../../widgets/UICard/UICard";
import { useScreenSize } from "../../../functions/useScreenSize";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, {
  id: "uniqueid",
  afterDraw: function (chart, easing) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0,99,245,1)";
      ctx.stroke();
      ctx.restore();
    }
  },
});

function PastPerformanceSection() {
  const width = useScreenSize().width;
  const data = {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    datasets: [
      {
        label: "",
        data: [20000, 40000, 60000, 40000, 55000, 54000, 83234, 41000, 50000, 70000, 60000, 50000, 60000, 50000, 60000],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 500);
          gradient.addColorStop(0, "rgba(61, 55, 241, 0.2)");
          gradient.addColorStop(1, "rgba(61, 55, 241, 0.0)");
          return gradient;
        },
        borderColor: "rgba(0,99,245,1)",
        borderStyle: "dashed",
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
          //   maxTicksLimit: 10,
          maxRotation: 0,
          minRotation: 0,
          padding: width > 767 ? 20 : 0,
          color: "#BCBCBC",
        },
      },
      y: {
        grid: {
          //   display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
          color: "#BCBCBC",
          padding: width > 767 ? 20 : 0,
          //   display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0,
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
    },
    interaction: {
      intersect: true,
    },
  };
  return (
    <div className="py-5 bg-white" style={{ overflow: "hidden" }}>
      <div className="text-center mb-2 px-3">
        <h2 className="text-primaryTextDark">
          <b>
            Past Performance<span className="text-primaryViolet">.</span>
          </b>
        </h2>
        <p className="text-primaryTextGray fs-6">CoinsList empowers you to see the possibilities of consistent simplified investments and helps you realize your financial goals.</p>
      </div>
      <div className="mx-3 px-0 mt-5 d-flex justify-content-center">
        <div style={{ width: width > 1100 ? "75%" : "100%", position: "relative" }}>
          <UICard>
            <div className="d-flex justify-content-between px-1 px-md-4 my-2 my-md-4 align-items-center">
              <p className="mb-0 fw-bolder fs-5">Binance</p>
              <div className="d-flex align-items-center bg-grayBg p-2 rounded">
                <p className="mb-0 me-2 fs-6 fw-bold text-primaryBlue">This Month</p>
                <img src="/assets/images/coinslists/dropdown.svg" />
              </div>
            </div>
            <div className="p-0 p-md-3 pb-4 pb-md-0">
              <Line data={data} options={options} />
            </div>
          </UICard>
          <img src="/assets/icons/rectangle-blue.svg" style={{ position: "absolute", top: "-3rem", right: "-2rem" }} />
          {width > 768 && <img src="/assets/icons/4x5.svg" style={{ position: "absolute", bottom: "1.5rem", left: "0rem" }} />}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p className="text-primaryTextGray w-75 text-center">Note: All performance graphs & numbers are calculated using only the live data and includes rebalances. Past performance doesn&apos;t include cost or guarantee future returns.</p>
      </div>
    </div>
  );
}

export default PastPerformanceSection;
