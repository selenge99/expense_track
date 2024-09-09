import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BarChart = ({ barChartData }) => {
  const data1 = {
    labels: ["Jan"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [20_000],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [15_000],
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
