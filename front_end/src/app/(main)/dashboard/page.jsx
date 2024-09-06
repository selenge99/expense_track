"use client";

import React, { useContext } from "react";
import { UserContext } from "@/app/context/user-context";
import { Doughnut } from "react-chartjs-2";
import { Bar, Utils } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <div className="flex gap-4 justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body bg-[#0166FF] rounded-2xl">
            <img src="./Frame.png" width={70} alt="Logo" />
            <p>cash</p>
            <p>10,000,000</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Your Income</h2>
            <p>1,200,000</p>
            <p>Your Income Amount</p>
            <p>32% from last month</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Expenses</h2>
            <p>-1,200,000</p>
            <p>Your expense Amount</p>
            <p>32% from last month </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] h-114 bg-#FFFF">
        <h1>Last Records</h1>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img src="./group.png" alt="" />
            <div>
              <p>Lending & Renting</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <p className="text-green-500">-1000</p>
        </div>
      </div>
      <div className="w-40 h-40">
        <Doughnut data={data} />
      </div>
    </div>
  );
};
export default Dashboard;
