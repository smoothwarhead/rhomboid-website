// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SiteLayout from './layouts/SiteLayout'
import { getApp } from './utils/helpers'

function App() {

  const CurrentApp = getApp();
  

  return (
    
      <div className='container'>
        <BrowserRouter>

         <CurrentApp />
         
        </BrowserRouter>
      </div>
  )
}

export default App
