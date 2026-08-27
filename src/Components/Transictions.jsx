import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export default function Transictions(props) {

   const { transaction, setTransaction, history, sethistory ,addtrans ,setaddtrans ,currentbalance, setcurrentbalance ,} = props;

const showhighestincome = Math.max(
  ...history
    .filter((item) => item.type === "income")
    .map((item) => Number(item.amount)),
  0
);

const showhighestexpense = Math.max(
  ...history
    .filter((item) => item.type === "expense")
    .map((item) => Number(item.amount)),
  0
);

const totalincomeofalltime = history
  .filter((item) => item.type === "income").length

const totalexpenseofalltime = history
  .filter((item) => item.type === "expense").length

  const totaltransictionsofalltime = history
  .filter((item)=>item.type==="income" + item.type==="expence").length

  return (
    <>
    <div className="tran"><h3>WALLET</h3></div>
    <div className="mainbox-inex">
      <div className="incomeboxes">Heighest IN
        <div className="incomeboxes-value">{showhighestincome}</div>
      </div>
            <div className="incomeboxes">Heighest EX
        <div className="incomeboxes-value">{showhighestexpense}</div>
      </div>
    </div>
    <div className="mainboxfor-tin">
      <div className="totalincomebox">IN`S 
        <div className="totalincomebox1">{totalincomeofalltime}</div>
      </div>
      <div className="totalincomebox">EX`S 
        <div className="totalincomebox1">{totalexpenseofalltime}</div>
      </div>
    </div>

    <div className="dropdown-all">
<div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" >
    Filter Types
  </button>
  <ul className="dropdown-menu">
   <li type="button">All Transiction</li>
   <li type="button">Income</li>
   <li type="button">Expense</li>
  </ul>

</div>

<div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" >
    Short Dates
  </button>
  <ul className="dropdown-menu">
   <li type="button">Newest</li>
   <li type="button">Oldest</li>
  </ul>
</div>
    </div>
    </>
  )
}
