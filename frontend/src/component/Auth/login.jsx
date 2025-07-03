import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormValidation } from "../../Hepler/Helper";
import Footer from "./Footer";
import Feature from "./Feature";
import Header from "./Header";
import Loader from "../Loader/Loader";
import { APIGoogleSignIn, APILoginForm } from "../../API/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../../Context/createContext";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  let {setUser , setisLogin} = useContext(userContext);




  const handleLoginForm = (e) => {
    let { name, value } = e.target;
    setUserDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };

  const handleGoogleAuth = async(e) => {
    e.preventDefault();
   await APIGoogleSignIn();
  }

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const response = await APILoginForm(userDetails);
    if(response?.status >= 210){
          let errorMessage = response.data.message || "Invalid userName or Password";
          toast.error(errorMessage);
        }
        else{
          let successMessage = response.data.message || "Invalid response";
          toast.success(successMessage);
          setUser(response.data.user);
          setisLogin(true);
          
  sessionStorage.setItem("showWelcome", "true");
           navigate("/dashboard");
        }
        setLoader(false);
  };

  return (
    <>
      {loader && <Loader></Loader>}
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center py-5 mt-4"
        style={{
          background: `linear-gradient(135deg, #123458 0%, #030303 100%)`,
          color: "black",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card border-0 shadow-lg">
                <Header></Header>
                 
                {/* Card Body */}
                <div className="card-body p-4 p-lg-5 bg-white">
                  <div className="text-center mb-4">
                    <h4 className="fw-bold text-dark mb-2">Welcome Back</h4>
                    <p className="text-muted">
                      Login securely using your Google account
                    </p>
                  </div>

                  {/* form */}
                
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"></span>
                        <input
                          type="email"
                          className="form-control bg-light border-start-0"
                          id="email"
                          name="email"
                          value={userDetails.email}
                          onChange={handleLoginForm}
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="form-label fw-semibold"
                      >
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0"></span>
                        <input
                          className="form-control bg-light border-start-0 border-end-0"
                          id="password"
                          placeholder="Create a strong password"
                          name="password"
                          value={userDetails.password}
                          onChange={handleLoginForm}
                          required
                        />
                      </div>
                      <div className="form-text">
                        Must be at least 8 characters long
                      </div>
                    </div>
                  

                  {/* submit Auth Button */}
                  <div className="d-grid gap-3">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-dark btn-lg py-3 w-100"
                      style={{ borderRadius: "8px" }}
                      disabled={FormValidation(userDetails)}
                    >
                      <i className="ri-mail-line me-2"></i> Sign in
                    </button>

                    {/* Optional: google auth */}
                    <div className="text-center">
                      <div className="position-relative my-4">
                        <hr className="text-muted" />
                        <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-muted small">
                          OR
                        </span>
                      </div>

                      <button onClick={handleGoogleAuth}
                        className="btn btn-lg py-3 position-relative d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: "#ffffff",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                          borderRadius: "8px",
                          border: "1px solid #e0e0e0",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <img
                          src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                          alt="Google"
                          className="me-3"
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span className="fw-semibold text-dark">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Help links */}
                  <div className="text-center mt-4">
                    <div className="mb-3">
                      <Link
                        to="/signup"
                        className="text-decoration-none fw-semibold text-primary"
                      >
                        Create an account
                      </Link>
                    </div>

                    <div className="text-muted small">
                      <Link
                        to="/forgot-password"
                        className="text-decoration-none text-muted me-3"
                      >
                        Forgot password?
                      </Link>
                      <Link
                        to="/help"
                        className="text-decoration-none text-muted"
                      >
                        Need help?
                      </Link>
                    </div>
                  </div>
                </div>

                <Footer></Footer>
              </div>
              <Feature></Feature>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
