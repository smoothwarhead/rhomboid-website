import { Link } from 'react-router';
import NavLogo from './navLogo.png';
import { navItems } from './nav-items';
import MainDropdown from '../main-dropdown/MainDropdown';
import { useEffect, useState } from 'react';




const MainNav = () => {

    const [openMainDropdown, setOpenMainDropdown] = useState(false);
    const [contents, setContents] = useState(null);
  

    const handleHoverEnter = (e) => {

      setOpenMainDropdown(true);

      if(e.type === 'mouseenter'){
        // console.log(e.target.innerText);

        const findContent = navItems.find(n => n.item.toLowerCase().includes(e.target.innerText.toLowerCase()))

        setContents(findContent.children);

      }

      
    }



  return (
    <>
      <div className='main-nav'>
        <div className="main-nav-con">

          <Link className="main-nav-logo">
            <img src={NavLogo} alt='company-logo' />
            <span className="main-nav-logo-text">RHOMBOID HEALTH</span>

          </Link>

          

          <div className="main-nav-right">
            {
              navItems.map((nav, i) => (
                <span
                  key={i}
                  className='nav-items'
                  // onClick={handleMainDropdown}
                  onMouseEnter={handleHoverEnter}
                  onMouseLeave={() => setOpenMainDropdown(false)}
                >
                  {nav.item}
                </span>
              ))
            }

          </div>


        </div>
      </div>

      <MainDropdown 
        mainDropdown={openMainDropdown}
        contents = {contents}
      />
      
    </>

  )
}

export default MainNav;