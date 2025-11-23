import { Outlet } from "react-router";
import AccountHeader from "../../components/globals/navigation/header/AccountHeader";



const AccountLayout = () => {
  return (
    <div className="account-layout">
        <AccountHeader />
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default AccountLayout