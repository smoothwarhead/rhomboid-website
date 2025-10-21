import { Outlet } from "react-router";
import Header from "../components/globals/navigation/header/Header";
import Footer from "../components/globals/Footer";

const SiteLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default SiteLayout