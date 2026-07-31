import React from 'react'
import {
  House,
  Wallet,
  ChartColumn,
  HandCoins,
  CircleUser,
} from "lucide-react";


export default function Navbar(props) {
  return (
    <>
    <div className='navbar1'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><House size={25} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Wallet size={25} /><span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><ChartColumn size={25} /></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><HandCoins size={25} /></a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#"><CircleUser size={25} /></a>
      </li>
    </ul>
  </div>
</nav>
</div>
</>
  )
}

