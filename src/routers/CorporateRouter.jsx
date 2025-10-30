import React from 'react'
import { Route, Routes } from 'react-router'
import SiteLayout from '../layouts/SiteLayout'
import Home from '../pages/corporate/home/Home'
import RhomboidBridge from '../pages/corporate/rhomboid-bridge/RhomboidBridge'
import EHR from '../pages/corporate/ehr/EHR'
import Startup from '../pages/corporate/startup/Startup'
import { NavProvider } from '../context/NavContext'
import SmallMedical from '../pages/corporate/small-medical/SmallMedical'

const CorporateRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<NavProvider> <SiteLayout /> </NavProvider>}>
            <Route index element={ <Home /> } />
            <Route path='/solutions/rhomboidbridge' element={ <RhomboidBridge /> } />
            <Route path='/solutions/electronic-health-records' element={ <EHR /> } />
            <Route path='/who-we-serve/startup-practices' element={ <Startup /> } />
            <Route path='/who-we-serve/small-medical-practices' element={ <SmallMedical/> } />
        </Route>
    </Routes>
  )
}

export default CorporateRouter