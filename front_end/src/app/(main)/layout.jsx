"use client";

import Header from "../components/header";
import { DashboardProvider } from "../context/dashboard-context";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <Header />
      {children}
    </DashboardProvider>
  );
};

export default Layout;
