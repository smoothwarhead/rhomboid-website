import React from 'react'
import { Route, Routes } from 'react-router'
import SiteLayout from '../layouts/SiteLayout'
import Home from '../pages/corporate/home/Home'
import RhomboidBridge from '../pages/corporate/rhomboid-bridge/RhomboidBridge'
import EHR from '../pages/corporate/ehr/EHR'

const CorporateRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <SiteLayout /> }>
            <Route index element={ <Home /> } />
            <Route path='/solutions/rhomboidbridge' element={ <RhomboidBridge /> } />
            <Route path='/solutions/electronic-health-records' element={ <EHR /> } />
        </Route>
    </Routes>
  )
}

export default CorporateRouter