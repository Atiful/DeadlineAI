import { useContext, useEffect } from "react";
import Upload from "../Upload/Upload";
import { userContext } from "../../Context/createContext";
import { toast } from "react-toastify";

function Dashboard() {
  const { user, isLogin } = useContext(userContext);

  useEffect(() => {
    const shouldShowToast = sessionStorage.getItem("showWelcome");

    if (isLogin && user && shouldShowToast == true) {
      toast.success(`🎉 Welcome back, ${user.email}! Ready to conquer the day?`);
      sessionStorage.removeItem("showWelcome");
    }
  }, [user, isLogin]);

  return (
    <>
      <Upload />
    </>
  );
}

export default Dashboard;
