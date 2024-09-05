"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  // const { user, fetchUserData } = useContext(UserContext);
  // const router = useRouter();

  const getData = async () => {
    const res = await axios.get("http://localhost:8008/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("data", res.data);
    setUser(res.data.user);
  };

  useEffect(() => {
    getData();
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   router.push("/login");
  // };

  return (
    <div>
      {/* <Header user={user} logout={logout} /> */}
      <header>Header - {user?.name}</header>
      {children}
    </div>
  );
};

export default Layout;
