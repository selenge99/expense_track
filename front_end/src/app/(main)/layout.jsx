"use client";

import Header from "../components/header";
import { DashboardProvider } from "../context/dashboard-context";
import { UserProvider } from "../context/user-context";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <Header />
      {children}
    </DashboardProvider>
  );
};

export default Layout;
