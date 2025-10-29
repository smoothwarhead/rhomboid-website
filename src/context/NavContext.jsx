import {
  createContext,
  //  useRef,
  useState,
} from "react";

export const NavContext = createContext({});

export const NavProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(null);
  

  return (
    <NavContext.Provider
      value={{
       openMenu, 
       setOpenMenu
       
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;