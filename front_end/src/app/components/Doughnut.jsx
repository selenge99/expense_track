import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { DashboardContext } from "../context/dashboard-context";

const DoughnutChart = ({}) => {
  const { donut } = useContext(DashboardContext);
  const lbl = donut?.donut.map((d) => d.cat_name);
  const val = donut?.donut.map((d) => d.sum);
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
