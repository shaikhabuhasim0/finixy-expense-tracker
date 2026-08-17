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


export default function Navbar(props) {
  return (
    <>
    <div className='navbar1'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="Homepage"><House size={25} /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="Transiction"><Wallet size={25} /><span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Inslights"><ChartColumn size={25} /></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Loan"><HandCoins size={25} /></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="User"><CircleUser size={25} /></Link>
      </li>
    </ul>
  </div>
</nav>
</div>
</>
  )
}

