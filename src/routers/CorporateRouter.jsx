import React from 'react'
import { Route, Routes } from 'react-router'
import SiteLayout from '../layouts/SiteLayout'
import Home from '../pages/corporate/home/Home'
import RhomboidBridge from '../pages/corporate/rhomboid-bridge/RhomboidBridge'
import EHR from '../pages/corporate/ehr/EHR'
import Startup from '../pages/corporate/startup/Startup'
import { NavProvider } from '../context/NavContext'
import SmallMedical from '../pages/corporate/small-medical/SmallMedical'
import MediumToLarge from '../pages/corporate/medium-to-large/MediumToLarge'
import EnterpriseSystem from '../pages/corporate/enterprise-system/EnterpriseSystem'
import Fqhc from '../pages/corporate/fqhc/Fqhc'
import Contact from '../pages/corporate/contact/Contact'
import WhoWeAre from '../pages/corporate/who-we-serve/WhoWeAre'
import PatientResources from '../pages/corporate/patient-resources/PatientResources'

const CorporateRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<NavProvider> <SiteLayout /> </NavProvider>}>
            <Route index element={ <Home /> } />
            <Route path='/solutions/rhomboidbridge' element={ <RhomboidBridge /> } />
            <Route path='/solutions/electronic-health-records' element={ <EHR /> } />
            <Route path='/who-we-serve/startup-practices' element={ <Startup /> } />
            <Route path='/who-we-serve/small-medical-practices' element={ <SmallMedical/> } />
            <Route path='/who-we-serve/medium-large-medical-practices' element={ <MediumToLarge /> } />
            <Route path='/who-we-serve/enterprises-and-health-systems' element={ <EnterpriseSystem /> } />
            <Route path="/who-we-serve/federally-qualified-health-center" element={ <Fqhc /> } />
            <Route path="/who-we-serve/federally-qualified-health-center" element={ <Fqhc /> } />
            <Route path="/about/contact-us" element={ <Contact /> } />
            <Route path="/about/who-we-are" element={ <WhoWeAre /> } />
            <Route path="/resources/patient-resources" element={ <PatientResources /> } />

            
        </Route>
    </Routes>
  )
}

export default CorporateRouter