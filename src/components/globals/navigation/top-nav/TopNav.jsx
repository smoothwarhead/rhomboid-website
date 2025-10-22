import { Link } from "react-router";
import "../../../../styles/index.scss";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import SearchDropdown from "../search-dropdown/SearchDropdown";
import AccountDropdown from "../account-dropdown/AccountDropdown";

const TopNav = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [openAccountDropdown, setOpenAccountDropdown] = useState(false);


  const handleSearchDropdown = () => {
    if(openSearch){
      setOpenSearch(false);
      setOpenAccountDropdown(false);
    }else{
      setOpenSearch(true);
      setOpenAccountDropdown(false);


    }
  }

  const handleAccountDropdown = () => {
    if(openAccountDropdown){
      setOpenAccountDropdown(false);
      setOpenSearch(false);

    }else{
      setOpenAccountDropdown(true);
      setOpenSearch(false);


    }
    
  }


  return (
    <>
      <div className='top-nav'>
        <div className="top-items">
          <Link className="top-items-right">Request a Demo</Link>

          <div className="top-items-left">
            <span className="l-items"
              onClick={handleSearchDropdown}
            >
              Search
            </span>

            <div 
              className="l-items l-account"
              onClick={handleAccountDropdown}

            >
              <FaUser />
              Account
            </div>

          </div>
          
        </div>
        
      </div>

      <AccountDropdown openAccountDropdown={openAccountDropdown} />
      <SearchDropdown openSearch={openSearch} />
    </>
  )
}

export default TopNav;