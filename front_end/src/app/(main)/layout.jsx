"use client";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/header";
import { redirect } from "next/navigation";
import { UserContext, UserProvider } from "../context/user-context";

const Layout = ({ children }) => {
  
  return (
    <UserProvider>
      <Header />
      {children}
    </UserProvider>
  );
};

export default Layout;
