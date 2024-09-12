"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records`);
      setTransactions(res.data.records);
    } catch (error) {
      console.log("failed to fetched ", error);
    }
  };

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`http://localhost:8008/records/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      // toast.error("Failed to fetch transactions");
    }
  };

  const getChartData = async () => {
    console.log("function start", getChartData);
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("whaaat", res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
    } catch (error) {
      console.error("don't understand", error);
      // toast.error("Failed to fetch transactions");
    }
  };
  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
    getChartData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ bar: chartData, donut: chartData, transactions, cardInfo }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
