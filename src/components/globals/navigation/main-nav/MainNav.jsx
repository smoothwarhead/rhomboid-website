import { Link } from 'react-router';
import NavLogo from './navLogo.png';




const MainNav = () => {
  return (
    <div className='main-nav'>
      <div className="main-nav-con">

        <Link className="main-nav-logo">
          <img src={NavLogo} alt='company-logo' />
          <span className="main-nav-logo-text">RHOMBOID HEALTH</span>

        </Link>
        

        <div className="main-nav-right"></div>


      </div>
    </div>


  )
}

export default MainNav;