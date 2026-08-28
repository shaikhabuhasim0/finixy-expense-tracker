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
import { useState } from 'react';

 function App() {


    const [transaction, setTransaction] = useState({
    type: "",
    source: "",
    amount: "",
    date :""
  });
  const [history,sethistory] = useState([]);
  const [addtrans,setaddtrans] = useState("");
  const [currentbalance , setcurrentbalance]=useState("");
  const [type, setType] = useState("");
  const [date , setdate] = useState("")
  

  return (
    <>
    <BrowserRouter>

      <Navbar/>
      
<Routes>
<Route path="/" element={<Homepage 
transaction={transaction} setTransaction={setTransaction}
history={history} sethistory={sethistory} 
addtrans={addtrans} setaddtrans={setaddtrans} 
currentbalance={currentbalance} setcurrentbalance={setcurrentbalance}
date = {date }
setdate = {setdate}
type={type} setType={setType}
/>}/>

<Route path="Homepage" element={<Homepage transaction={transaction} setTransaction={setTransaction}
  history={history} sethistory={sethistory}
  addtrans={addtrans} setaddtrans={setaddtrans} 
  currentbalance={currentbalance} setcurrentbalance={setcurrentbalance}
  type={type} setType={setType}
  date = {date }setdate = {setdate}
  />}/>

<Route path="Transiction" element={<Transictions 
transaction={transaction} setTransaction={setTransaction}
history={history} sethistory={sethistory} 
addtrans={addtrans} setaddtrans={setaddtrans}
currentbalance={currentbalance} setcurrentbalance={setcurrentbalance}
type={type} setType={setType} 
date = {date }setdate = {setdate}
/>}/>

<Route path="Inslights" element={<Inslights/>}/>
<Route path="Loan" element={<Loan/>}/>
<Route path="User" element={<User/>}/>

</Routes>

</BrowserRouter>

    
    </>
  )
}

export default App