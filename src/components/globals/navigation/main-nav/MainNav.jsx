import { Link } from 'react-router';
import NavLogo from './navLogo.png';
import { navItems } from './nav-items';
import MainDropdown from '../main-dropdown/MainDropdown';
import { useEffect, useRef, useState } from 'react';
import { gsap, Power2, Power3 }from "gsap";





const MainNav = () => {

  
    const dropdownRefs = useRef([]);
    const innerDropdownRefs = useRef([]);



    const showDropdown = (index) => {
   

      gsap.fromTo([dropdownRefs.current[index], innerDropdownRefs.current[index]], {
        y: -10,
        opacity: 0,

      },{
        y: 0,
        opacity: 1,
        duration: 0.4,
        display: "block",
        ease: Power2.easeOut

      })



    }

    const hideDropdown = (index) => {
      gsap.to(dropdownRefs.current[index], {
        // height: 0,
        opacity: 0,
        duration: 0.3,
        display: "none",
        ease: Power2.easeIn
      })
    }




  return (
    <>
      <div className='main-nav'>
        <div className="main-nav-con">

          <div className="main-nav-logo">
            <Link>
              <img src={NavLogo} alt='company-logo' />
              <span className="main-nav-logo-text">RHOMBOID HEALTH</span>

            </Link>
          </div>
         

          <div className="main-nav-right">
            {
              navItems.map((nav, i) => (
                <span
                  key={i}
                  className='nav-items'
                  // onClick={handleHoverEnter}
                  onMouseEnter={() => showDropdown(i)}
                  onMouseLeave={() => hideDropdown(i)}
                >
                  {nav.item}

                  
                  <MainDropdown 
                    // mainDropdown={openMainDropdown}
                    // contents = {contents}
                    ref = {(el) => (dropdownRefs.current[i] = el)}
                    contents = {navItems[i].children}
                    innerRef = {(el) => (innerDropdownRefs.current[i] = el)}

                  />
                  
                </span>
              ))
            }

          </div>


        </div>
      </div>

      
    </>

  )
}

export default MainNav;