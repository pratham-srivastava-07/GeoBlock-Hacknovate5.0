import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Upload from './pages/Upload'

function App() {
 
  return (
    <>
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/upload" element= {<Upload/>} />
        </Routes>      
      </BrowserRouter>
   </div>
    </>
  )
}

export default App