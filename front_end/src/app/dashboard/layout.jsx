const { useContext, useEffect } = require("react");
const { UserContext } = require("../context/user-context");
import { useRouter } from "next/navigation";
import { Header } from "../components";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <Header user={user} logout={logout} />
      {children}
    </div>
  );
};

export default Layout;
