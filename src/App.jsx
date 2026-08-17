import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transictions from './components/Transictions';
import { Link } from 'react-router-dom';

 function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    
<Routes>
<Route path="Homepage" element={<Homepage/>}/>
<Route path="Transiction" element={<Transictions/>}/>
</Routes>

</BrowserRouter>

    
    </>
  )
}

export default App