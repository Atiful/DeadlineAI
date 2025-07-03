import { Link } from "react-router-dom";
function Feature() {
    return ( 
        <div className="d-flex justify-content-center mt-4 flex-wrap">
        <div className="badge bg-white text-dark m-1 px-3 py-2">
          <i className="ri-shield-check-line text-success me-1"></i>{" "}
          Secure Login
        </div>
        <div className="badge bg-white text-dark m-1 px-3 py-2">
          <i className="ri-time-line text-info me-1"></i> Deadline
          Tracking
        </div>
        <div className="badge bg-white text-dark m-1 px-3 py-2">
          <i className="ri-notification-3-line text-warning me-1"></i>{" "}
          Smart Alerts
        </div>
      </div>
     );
}

export default Feature;