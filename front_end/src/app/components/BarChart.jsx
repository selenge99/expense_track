import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { DashboardContext } from "../context/dashboard-context";

Chart.register(...registerables);

const BarChart = () => {
  const { bar } = useContext(DashboardContext);

  const lbl = bar?.bar.map((b) => {
    return b.sar;
  });
  const inc = bar?.bar.map((b) => {
    return b.total_inc;
  });
  const exp = bar?.bar.map((b) => {
    return b.total_exp;
  });
  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "INC",
        backgroundColor: "#22C55E",
        data: inc,
      },
      {
        label: "EXP",
        backgroundColor: "#F87171",
        data: exp,
      },
    ],
  };

  const options1 = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="flex items-center justify-center p-4 bg-white card w-1/2">
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
