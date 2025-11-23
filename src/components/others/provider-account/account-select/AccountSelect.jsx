import { Link } from "react-router";
import { useState } from "react";
import { FaCheckCircle, FaUser } from "react-icons/fa";













const AccountSelect = () => {

     const [selected, setSelected] = useState("provider");
  return (
    <div className="right-section">
      <div className="signup-header s-account-header">
        <span>If you have an account</span>
        <Link to="/provider" className="sign-up-btn">
          Sign In
        </Link>
      </div>

      <div className="form-card">
        <h2>Type of Account</h2>
        <p className="subtitle">
          Select the type of account you want to create.
        </p>

        <div
          className={`option-card ${selected === "professional" ? "active" : ""}`}
          onClick={() => setSelected("professional")}
        >
          <div className="left">
            <div className="icon-check">
                <FaUser className="icon" />
                {selected === "professional" && <FaCheckCircle className="check-icon" />}
            </div>
            <div className="text">
              <h3 className={selected === "professional" ? "active" : ""}>I am a Professional/Specialist</h3>
              <p>For healthcare professionals or specialists</p>
            </div>
          </div>

        </div>

        <div
          className={`option-card ${selected === "organization" ? "active" : ""}`}
          onClick={() => setSelected("organization")}
        >
          <div className="left">

             <div className="icon-check">
                <FaUser className="icon" />
                {selected === "organization" && <FaCheckCircle className="check-icon" />}

            </div>            
            <div className="text">
              <h3 className={selected === "organization" ? "active" : ""}>I am a Healthcare Organization</h3>
              <p>For health institutions, clinics and pharmacy</p>
            </div>
          </div>

        </div>

        <div className="s-account-btn">
            <Link to={`/provider/${selected}`} className="e-btn">Next</Link>

        </div>


      </div>
    </div>
  );
};

export default AccountSelect;
