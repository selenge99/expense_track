"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    name: "Nara",
    email: "",
    profile_img: "",
  });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUser(response.data);
        console.log("User", response.data);
      }
    } catch (error) {
      console.log("error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
