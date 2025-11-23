import React from "react";
import { Link } from "react-router";
import NavLogo from "../../navigation/main-nav/navLogo.png";
import { MdHome } from "react-icons/md";

const AccountHeader = () => {


  return (
    <div className="account-header">

        <Link to="http://localhost:5173/">
            <MdHome />
            Home        
        </Link>
      {/* <Link to="/">
        <img src={NavLogo} alt="company-logo" />
        <span className="main-nav-logo-text">RHOMBOID HEALTH</span>
      </Link> */}
    </div>
  );
};

export default AccountHeader;
