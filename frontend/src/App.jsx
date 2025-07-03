import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Login from "./component/Auth/login";
import SignUp from "./component/Auth/signup";
import Test from "./component/profile";
import Navbar from "./component/Navbar/navbar";
import Dashboard from "./component/dashboard/dashboard";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "./Context/contextProvider";
import Tasks from "./component/Tasks/Tasks";


function App() {
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
            <Route path="/test" element={<Test></Test>}></Route>
          </Routes>
        </UserContextProvider>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
