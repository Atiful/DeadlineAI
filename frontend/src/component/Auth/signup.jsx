import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Feature from "./Feature";
import Header from "./Header";
import { FormValidation } from "../../Hepler/Helper";
import { APISignupForm , APIGoogleSignIn } from "../../API/Api";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/createContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const  navigate = useNavigate();
  const {setUser , setisLogin} = useContext(userContext);

  const handleLoginForm = (e) => {
    let { name, value } = e.target;
    setUserDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await APISignupForm(userDetails);
    console.log(response);
    if(response?.status >= 210){
      let errorMessage = response.data.message || "Invalid response";
      toast.error(errorMessage);
    }
    else{
      let successMessage = response.data.message || "Invalid response";
      toast.success(successMessage);
      setUser(response.data.user);
      setisLogin(true);
       navigate("/dashboard");
    }
    setIsLoading(false);
  };

   const handleGoogleAuth = async(e) => {
      e.preventDefault();
     await APIGoogleSignIn();
    }

 

  return (
    <>
      {isLoading && <Loader></Loader>}
      
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
                {/* Card Header */}
                <Header></Header>

                {/* Card Body */}
                <div className="card-body p-4 p-lg-5 bg-white">
                  <div className="text-center mb-4">
                    <h4 className="fw-bold text-dark mb-3">
                      Create Your Account
                    </h4>
                    <p className="text-muted">
                      Get started with DeadlineAI today
                    </p>
                  </div>

                  {/* Signup Form */}
                  <form>
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
                          placeholder="name@example.com"
                          name="email"
                          value={userDetails.email}
                          onChange={handleLoginForm}
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
                          type={showPassword ? "text" : "password"}
                          className="form-control bg-light border-start-0 border-end-0"
                          id="password"
                          placeholder="Create a strong password"
                          name="password"
                          value={userDetails.password}
                          onChange={handleLoginForm}
                          required
                        />
                        <button
                          className="input-group-text bg-light border-start-0"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={`ri-${
                              showPassword ? "eye-off" : "eye"
                            }-line text-muted`}
                          ></i>
                        </button>
                      </div>
                      <div className="form-text">
                        Must be at least 8 characters long
                      </div>
                    </div>

                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        required
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="terms"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-decoration-none">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-decoration-none">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <div className="d-grid">
                      <button
                        disabled={FormValidation(userDetails)}
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-dark btn-lg py-3"
                        style={{ borderRadius: "8px" }}
                      >
                        Create Account
                      </button>
                    </div>
                  </form>

                  {/* Google signup alternative */}
                  <div className="text-center mt-4" onClick={handleGoogleAuth}>
                    <div className="position-relative my-4">
                      <hr className="text-muted" />
                      <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-muted small">
                        OR
                      </span>
                    </div>

                    <button
                      className="btn btn-lg py-3 w-100 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#ffffff",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                        borderRadius: "8px",
                        border: "1px solid #e0e0e0",
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

                {/* Card Footer */}
                <div className="card-footer bg-white py-3 border-0 text-center">
                  <p className="mb-0" style={{ color: "black" }}>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-decoration-none fw-semibold"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>

              <Feature></Feature>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
