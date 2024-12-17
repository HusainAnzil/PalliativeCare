import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Home from './Components/Home'
import VerifyUsers from './Components/admin/VerifyUsers'
import VerifyPalliative from './Components/admin/VerifyPalliative'
import ViewFeedback from './Components/admin/ViewFeedback'


function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />}/> 
      <Route path='/Home' element={<Home />}/> 
      <Route path='/verifyUsers' element={<VerifyUsers/>}/>
      <Route path='/verifyPalliative' element={<VerifyPalliative/>}/>
      <Route path='/vewFeedback' element={<ViewFeedback/>}/>
      
      </Routes>
     </Router>
    </>
  )
}

export default App
