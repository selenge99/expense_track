import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

const DoughnutChart = ({}) => {
  const [doughnutChartInfo, setDoughnutChartInfo] = useState(null);
  const getDoughnutChartData = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/chart`);
      console.log("ST", res.data);
      setDoughnutChartInfo(res.data);
    } catch (error) {
      console.error(error);
      // toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    getDoughnutChartData();
  }, []);
  const lbl = doughnutChartInfo?.donut.map((d) => d.cat_name);
  const val = doughnutChartInfo?.donut.map((d) => d.sum);
  const data2 = {
    datasets: [
      {
        data: val,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],

    labels: lbl,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };
  return (
    <div className="flex items-center justify-center p-4 bg-white card w-1/2">
      <div className="h-96 w-96">
        <Doughnut options={options2} data={data2} />
      </div>
    </div>
  );
};

export default DoughnutChart;
