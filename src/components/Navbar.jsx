import React from 'react'
import {
  House,
  Wallet,
  ChartColumn,
  HandCoins,
  CircleUser,
} from "lucide-react";
import Transictions from './Transictions';
import Homepage from './Homepage';
import { Link } from "react-router-dom";
import Loanlist from './Loanlist';


export default function Navbar(props) {
  return (
    <>
  <div className='navbar1'>
    <Link className="nav-icon" to="Homepage"><House size={25} /></Link>
    <Link className="nav-icon" to="Transiction"><Wallet size={25} /></Link>
    <Link className="nav-icon" to="Inslights"><ChartColumn size={25} /></Link>
    <Link className="nav-icon" to="Loan"><HandCoins size={25} /></Link>
    <Link className="nav-icon" to="User"><CircleUser size={25} /></Link>
  </div>
</>
  )
}

