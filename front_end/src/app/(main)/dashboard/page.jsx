"use client";

import React, { useContext } from "react";
import { UserContext } from "@/app/context/user-context";
import Cardinfo from "@/app/components/cardinfo";
import { DashboardContext } from "@/app/context/dashboard-context";
import { RecordCard } from "@/app/components/record-card";

const Dashboard = () => {
  const { user, fetchUserData } = useContext(UserContext);
  const { transactions, cardInfo } = useContext(DashboardContext);
  return (
    <div className="">
      <Cardinfo />
      <div className="w-full flex p-6 gap-6">
        {/* <DoughnutChart />
        <BarChart /> */}
      </div>
      <h3>Last Records</h3>
      <RecordCard />
    </div>
  );
};
export default Dashboard;
