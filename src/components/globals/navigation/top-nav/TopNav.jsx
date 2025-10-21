import { Link } from "react-router";
import "../../../../styles/index.scss";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import SearchDropdown from "../search-dropdown/SearchDropdown";

const TopNav = () => {

  const [openSearch, setOpenSearch] = useState(false);


  const handleSearchDropdown = () => {
    if(openSearch){
      setOpenSearch(false);
    }else{
      setOpenSearch(true);

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

            >
              <FaUser />
              Account
            </div>

          </div>
        </div>
        
      </div>

      <SearchDropdown openSearch={openSearch} />
    </>
  )
}

export default TopNav;