// import { useState } from 'react'

import { BrowserRouter } from 'react-router'
import './App.css'
import { getApp } from './utils/helpers'

function App() {

  

  const CurrentApp = getApp();
  

  return (
    
      <div className={'container'}>
        <BrowserRouter>

         <CurrentApp />
         
        </BrowserRouter>
      </div>
  )
}

export default App
