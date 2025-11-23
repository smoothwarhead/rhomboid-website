import { Link } from "react-router";
import NavLogo from "../../../components/globals/navigation/main-nav/navLogo.png";

const AccountHome = () => {
  return (
    <div className="account-home">
      <div className="account-home-card">
        <div className="logo">
          <div className="logo-section">
            <img src={NavLogo} alt="Rhomboid Health" className="rh-logo" />
            <h2>RHOMBOID HEALTH EHR</h2>
          </div>
        </div>

        <div className="intro">
          <h4>Electronic Health Records System</h4>
          <p>
            Secure, comprehensive healthcare management platform for all health
            practitioners, and administrators
          </p>
        </div>

        <div className="a-btn">
          <Link className="sign-in-btn" to="/provider">
            Sign in to Continue
          </Link>
        </div>

        

        <div className="no-account-con">
          <span>Don’t have an account?</span>
          <Link to="/provider/select-account" className="sign-up-btn">Sign Up</Link>
        </div>

        <div className="compliance">
          <span>
            <div className="dot"></div>
            <p>NDPA compliant</p>
          </span>

          <span>
            <div className="dot"></div>
            <p>Secure data handling</p>
          </span>

          <span>
            <div className="dot"></div>
            <p>Multi-role access</p>
          </span>
        </div>

      </div>
    </div>
  );
};

export default AccountHome;
