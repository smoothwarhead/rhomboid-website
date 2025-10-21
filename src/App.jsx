// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SiteLayout from './layouts/SiteLayout'

function App() {
  

  return (
    
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SiteLayout />}>
              {/* <Route /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
