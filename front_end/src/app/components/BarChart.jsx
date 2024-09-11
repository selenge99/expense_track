import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";

Chart.register(...registerables);

const BarChart = () => {
  const [barChartInfo, setBarChartInfo] = useState(null);
  const getBarChartData = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/chart`);
      console.log("data", res.data);
      setBarChartInfo(res.data.bar);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getBarChartData();
  }, []);

  const lbl = barChartInfo?.map((b) => {
    return b.sar;
  });
  const inc = barChartInfo?.map((b) => {
    return b.total_inc;
  });
  const exp = barChartInfo?.map((b) => {
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
