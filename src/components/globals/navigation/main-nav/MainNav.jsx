import { Link } from "react-router";
import NavLogo from "./navLogo.png";
import { navItems } from "./nav-items";
import MainDropdown from "../main-dropdown/MainDropdown";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap, Power2, Power3 } from "gsap";
import NavContext from "../../../../context/NavContext";

const MainNav = () => {

  const { openMenu, setOpenMenu } = useContext(NavContext);

  const dropdownRefs = useRef({});
  const navRef = useRef(null);



  useEffect(() => {

    // initialize dropdowns as hidden
    Object.keys(dropdownRefs.current).forEach((key) => {
      gsap.set(dropdownRefs.current[key], { display: "none", opacity: 0 });
    });

    if(!openMenu){
        closeAllMenus();

    }


    // handle click outside
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);


  }, [openMenu]);




  const toggleMenu = (menu) => {
    const isOpen = openMenu === menu;

    setOpenMenu(isOpen ? null : menu);

    Object.keys(dropdownRefs.current).forEach((key) => {
      // console.log(isOpen, menu, key);

      if (key.toLowerCase() === menu.toLowerCase() && !isOpen) {
        gsap.fromTo(
          dropdownRefs.current[key],
          {
            y: -10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            display: "block",
            ease: Power2.easeOut,
          }
        );
      } else {
        gsap.to(dropdownRefs.current[key], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
    Object.keys(dropdownRefs.current).forEach((key) => {
      gsap.to(dropdownRefs.current[key], {
        display: "none",
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  };

  return (
    <>
      <div className="main-nav" ref={navRef}>
        <div className="main-nav-con">
          <div className="main-nav-logo">
            <Link>
              <img src={NavLogo} alt="company-logo" />
              <span className="main-nav-logo-text">RHOMBOID HEALTH</span>
            </Link>
          </div>

          <div className="main-nav-right">
            {navItems.map((nav, i) => (
              <span key={i} className="nav-items">
                <span className="nav-item" onClick={() => toggleMenu(nav.item)}>
                  {nav.item}
                </span>

                <MainDropdown
                  // mainDropdown={openMainDropdown}
                  // contents = {contents}
                  ref={(el) => (dropdownRefs.current[nav.item] = el)}
                  contents={navItems[i].children}
                  // innerRef = {(el) => (innerDropdownRefs.current[i] = el)}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
