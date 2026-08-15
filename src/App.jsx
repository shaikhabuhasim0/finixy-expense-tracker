import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App() {
  return (
    <>
    <BrowserRouter>
<Routes>

</Routes>
    </BrowserRouter>
    <Navbar/>
    <Homepage homepage="HOME"/>
    
    </>
  )
}

export default App