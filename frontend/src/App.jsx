import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Login from "./component/Auth/login";
import SignUp from "./component/Auth/signup";
import Navbar from "./component/Navbar/Navbar";
import Dashboard from "./component/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "./Context/contextProvider";
import Tasks from "./component/Tasks/Tasks";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./component/TermsOfService/TermsOfService";


function App() {

  const hostname = window.location.hostname;

if (hostname === "deadlineai-f.onrender.com") {
  window.location.href = "https://deadlineai.online";
  return null;
}

  return (
    <>
      <Router>
        <UserContextProvider>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path = "/tasks" element = {<Tasks></Tasks>}></Route>
            <Route path = "/privacyPolicy" element = {<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path = "/TermsOfService" element = {<TermsOfService></TermsOfService>}></Route>
          </Routes>
        </UserContextProvider>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
