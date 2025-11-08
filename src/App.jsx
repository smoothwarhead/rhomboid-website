// import { useState } from 'react'

import { BrowserRouter, HashRouter } from 'react-router'
import './App.css'
import { getApp } from './utils/helpers'

function App() {

  

  const CurrentApp = getApp();
  

  return (
    
      <div className={'container'}>
        <HashRouter>

         <CurrentApp />
         
        </HashRouter>
      </div>
  )
}

export default App
