"use client";

import Header from "../components/header";
import { DashboardProvider } from "../context/dashboard-context";
import { UserProvider } from "../context/user-context";

const Layout = ({ children }) => {
  return (
    <UserProvider>
      <DashboardProvider>
        <Header />
        {children}
      </DashboardProvider>
    </UserProvider>
  );
};

export default Layout;
