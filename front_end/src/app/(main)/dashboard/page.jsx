"use client";

import React, { useContext } from "react";
import { UserContext } from "@/app/context/user-context";
import RecordList from "@/app/components/recordList";
import Cardinfo from "@/app/components/cardinfo";
import { DashboardContext } from "@/app/context/dashboard-context";

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
      <RecordList />
    </div>
  );
};
export default Dashboard;
