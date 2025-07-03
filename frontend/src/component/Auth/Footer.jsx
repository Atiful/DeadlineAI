import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <div className="card-footer bg-white py-3 border-0 text-center">
                <small className="text-muted">
                  By signing in, you agree to our{" "}
                  <Link to="/terms" className="text-decoration-none">
                    Terms
                  </Link>{" "}
                  and
                  <Link to="/privacy" className="text-decoration-none">
                    {" "}
                    Privacy Policy
                  </Link>
                </small>
              </div>
     );
}

export default Footer;