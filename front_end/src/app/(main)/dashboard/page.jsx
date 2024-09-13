"use client";

import React, { useContext } from "react";
import { UserContext } from "@/app/context/user-context";
import { Bar, Utils } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/Doughnut";
import axios from "axios";
import RecordList from "@/app/components/recordList";
import Cardinfo from "@/app/components/cardinfo";
import { DashboardContext } from "@/app/context/dashboard-context";

Chart.register(ArcElement);

const Dashboard = () => {
  const { user, fetchUserData } = useContext(UserContext);
  const { transactions, cardInfo } = useContext(DashboardContext);
  return (
    <div className="">
      <Cardinfo />
      <div className="w-full flex p-6 gap-6">
        <DoughnutChart />
        <BarChart />
      </div>
      <h3>Last Records</h3>
      <RecordList />
    </div>
  );
};
export default Dashboard;
