import { Outlet } from "react-router";
import Header from "../components/globals/navigation/header/Header";
import Footer from "../components/globals/footer/Footer";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const SiteLayout = () => {

  const { openMenu } = useContext(NavContext);

  return (
    <div className={openMenu ? "fixed-container" : ""}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SiteLayout