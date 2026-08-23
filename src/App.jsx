import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transictions from './components/Transictions';
import { Link } from 'react-router-dom';
import Inslights from './components/Inslights';
import Loan from './components/Loan';
import User from './components/User';
import "@fortawesome/fontawesome-free/css/all.min.css";

 function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    
<Routes>
<Route path="Homepage" element={<Homepage/>}/>
<Route path="Transiction" element={<Transictions/>}/>
<Route path="Inslights" element={<Inslights/>}/>
<Route path="Loan" element={<Loan/>}/>
<Route path="User" element={<User/>}/>

</Routes>

</BrowserRouter>

    
    </>
  )
}

export default App