import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page min-vh-100 px-3 mt-5" style={{ 
      background: `linear-gradient(135deg, #123458 0%, #030303 100%)`,
      color: "#fff",
      backgroundAttachment: "fixed"
    }}>

      <div className="container py-4">
               
              </div>

      

      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <span className="badge py-2 px-3 mb-3" style={{ 
                  background: "rgba(212, 201, 190, 0.2)", 
                  color: "#D4C9BE",
                  borderRadius: "30px"
                }}>
                  <i className="ri-check-line me-1"></i> AI-Powered Automation
                </span>
                <h1 className="display-4 fw-bold mb-3" style={{ color: "#F1EFEC" }}>
                  Never Miss Another <span style={{ color: "#D4C9BE" }}>Deadline</span> Again
                </h1>
                <p className="lead mb-4" style={{ color: "#F1EFEC", opacity: 0.8 }}>
                  Upload assignment or notice images — our powerful AI detects deadlines and adds them to your calendar automatically. Stay organized without the effort.
                </p>
                {/* <div className="d-flex flex-wrap">
                  <Link to="/dashboard" className="btn btn-lg px-4 py-3 me-3 mb-3 fw-bold" style={{ 
                    background: "#D4C9BE", 
                    color: "#030303",
                    borderRadius: "8px"
                  }}>
                    Get Started Now <i className="ri-arrow-right-line ms-1"></i>
                  </Link>
                  <Link to="/demo" className="btn btn-lg px-4 py-3 mb-3 fw-bold" style={{ 
                    background: "rgba(241, 239, 236, 0.1)", 
                    color: "#F1EFEC",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)"
                  }}>
                    <i className="ri-play-circle-line me-1"></i> Watch Demo
                  </Link>
                </div> */}
              </div>
              {/* <div className="d-flex align-items-center" style={{ color: "#D4C9BE" }}>
                <div className="me-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="ri-star-fill me-1"></i>
                    <i className="ri-star-fill me-1"></i>
                    <i className="ri-star-fill me-1"></i>
                    <i className="ri-star-fill me-1"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <span>4.8/5 rating</span>
                </div>
                <div className="me-4">
                  <div className="mb-2 fw-bold">10K+</div>
                  <span>Active Users</span>
                </div>
                <div>
                  <div className="mb-2 fw-bold">99%</div>
                  <span>Satisfaction</span>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                
                <div className="position-absolute" style={{ 
                  top: "-20px", 
                  right: "0px", 
                  width: "150px", 
                  height: "150px", 
                  background: "radial-gradient(circle, rgba(212, 201, 190, 0.3) 0%, rgba(212, 201, 190, 0) 70%)",
                  borderRadius: "50%",
                  zIndex: 0
                }}></div>
                <div className="position-absolute" style={{ 
                  bottom: "-30px", 
                  left: "20px", 
                  width: "100px", 
                  height: "100px", 
                  background: "radial-gradient(circle, rgba(212, 201, 190, 0.2) 0%, rgba(212, 201, 190, 0) 70%)",
                  borderRadius: "50%",
                  zIndex: 0
                }}></div>
                
              
                <div className="p-3" style={{ 
                  background: "rgba(241, 239, 236, 0.1)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(241, 239, 236, 0.1)",
                  position: "relative",
                  zIndex: 1
                }}>
                  <img 
                    src="/images/landingPages.png" 
                    alt="DeadlineAI in action" 
                    className="img-fluid rounded-3"
                    style={{ 
                      transform: "translateY(0)",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)"
                    }}
                  />
                  <div className="badge position-absolute" style={{ 
                    top: "20px", 
                    right: "20px", 
                    background: "rgba(241, 239, 236, 0.9)",
                    color: "#030303",
                    borderRadius: "30px",
                    padding: "10px 15px",
                    fontWeight: "bold"
                  }}>
                    <i className="ri-ai-generate me-1"></i> AI Powered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#F1EFEC" }}>How DeadlineAI Works</h2>
            <p style={{ color: "#D4C9BE" }}>Streamlined features to keep you organized effortlessly</p>
          </div>
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="h-100 p-4" style={{ 
                background: "rgba(241, 239, 236, 0.05)",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(241, 239, 236, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}>
                <div className="mb-4 d-inline-block p-3" style={{ 
                  background: "rgba(212, 201, 190, 0.1)",
                  borderRadius: "12px"
                }}>
                  <i className="ri-upload-cloud-line" style={{ 
                    fontSize: "2rem", 
                    color: "#D4C9BE" 
                  }}></i>
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ color: "#F1EFEC" }}>1. Upload Documents</h3>
                <p style={{ color: "#F1EFEC", opacity: 0.7 }}>
                  Simply upload images of your assignments, syllabi, or notices through our intuitive interface.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="h-100 p-4" style={{ 
                background: "rgba(212, 201, 190, 0.9)",
                borderRadius: "16px",
                border: "1px solid rgba(212, 201, 190, 0.3)",
                transform: "translateY(-15px)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}>
                <div className="mb-4 d-inline-block p-3" style={{ 
                  background: "rgba(18, 52, 88, 0.1)",
                  borderRadius: "12px"
                }}>
                  <i className="ri-robot-line" style={{ 
                    fontSize: "2rem", 
                    color: "#123458" 
                  }}></i>
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ color: "#030303" }}>2. AI Processing</h3>
                <p style={{ color: "#030303", opacity: 0.8 }}>
                  Our advanced AI scans and extracts all deadlines, dates, and important information automatically.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="h-100 p-4" style={{ 
                background: "rgba(241, 239, 236, 0.05)",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(241, 239, 236, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}>
                <div className="mb-4 d-inline-block p-3" style={{ 
                  background: "rgba(212, 201, 190, 0.1)",
                  borderRadius: "12px"
                }}>
                  <i className="ri-notification-3-line" style={{ 
                    fontSize: "2rem", 
                    color: "#D4C9BE" 
                  }}></i>
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ color: "#F1EFEC" }}>3. Smart Organization</h3>
                <p style={{ color: "#F1EFEC", opacity: 0.7 }}>
                  Events are added to your calendar with smart reminders so you'll never miss a deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 mb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 text-center" style={{ 
                background: "linear-gradient(135deg, rgba(18, 52, 88, 0.8) 0%, rgba(3, 3, 3, 0.8) 100%)",
                borderRadius: "16px",
                border: "1px solid rgba(212, 201, 190, 0.1)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}>
                <h2 className="fw-bold mb-3" style={{ color: "#F1EFEC" }}>Ready to Get Organized?</h2>
                <p className="lead mb-4" style={{ color: "#D4C9BE" }}>
                  Join thousands of students and professionals who are saving time with DeadlineAI.
                </p>
                <Link to="/signup" className="btn btn-lg px-5 py-3 fw-bold" style={{ 
                  background: "#D4C9BE", 
                  color: "#030303",
                  borderRadius: "8px"
                }}>
                  Start Free  <i className="ri-arrow-right-line ms-1"></i>
                </Link>
                <p className="mt-3" style={{ color: "#F1EFEC", opacity: 0.6 }}>
                  Free  Free  Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ borderTop: "1px solid rgba(212, 201, 190, 0.1)" }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <p className="mb-0" style={{ color: "#D4C9BE" }}>© 2025 DeadlineAI. All rights reserved.</p>
            </div>
            <div className="d-flex gap-3">

      
              <a href="www.linkedin.com/in/atiful-haque" style={{ color: "#D4C9BE" }}><i className="ri-linkedin-box-fill"></i></a>
              <a href="https://github.com/Atiful" style={{ color: "#D4C9BE" }}><i className="ri-github-fill"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;