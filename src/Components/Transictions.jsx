import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export default function Transictions(props) {

   const { transaction, setTransaction, history, sethistory ,addtrans ,setaddtrans ,currentbalance, setcurrentbalance , type , setType , date , setdate} = props;
const [filterType, setFilterType] = useState("all");
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

  const datefilter = new Date ( Math.max (...history
    .map((item)=> new Date (item.date).getTime ())
  )
)

const newestdate = [...history].sort(
  (a,b)=> new Date (b.date) - new Date (a.date)
)

const oldesttdate = [...history].sort(
  (a,b)=> new Date (a.date) - new Date (b.date)
)

  return (
    <>
    <div className="tran"><h3>WALLET</h3></div>
    <div className="mainbox-inex">
      <div className="incomeboxes">Heighest Income
        <div className="incomeboxes-value">{showhighestincome}</div>
      </div>
            <div className="incomeboxes">Heighest Expense
        <div className="incomeboxes-value">{showhighestexpense}</div>
      </div>
    </div>
    <div className="mainboxfor-tin">
      <div className="totalincomebox">Total Income`s 
        <div className="totalincomebox1">{totalincomeofalltime}</div>
      </div>
      <div className="totalincomebox">Total Expense`s 
        <div className="totalincomebox1">{totalexpenseofalltime}</div>
      </div>
    </div>

    <div className="dropdown-all">
<div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" >
    Filter Types
  </button>
  <ul className="dropdown-menu">
   <li type="button" onClick={() => setFilterType("all")}>All Transiction</li>
   <li type="button" onClick={() => setFilterType("income")}>Income</li>
   <li type="button" onClick={() => setFilterType("expense")}>Expense</li>
  </ul>

</div>

<div className="btn-group">
  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" >
    Short Dates
  </button>
  <ul className="dropdown-menu">
   <li type="button" onClick={()=>setdate("newsest")}>Newest</li>
   <li type="button" onClick={()=>setdate("oldest")}>Oldest</li>
  </ul>
</div>
    </div>
    <div className="totaltransictoiionnnn">
      <h6>TOTAL NO OF TRANSICTIONS = <span className="boldtrans"> {totalincomeofalltime+totalexpenseofalltime}</span></h6>
    </div>
    <div className="sumarrybox">
      <h5 className="summaryname">SUMMARY  <h6 className={filterType==="income" ? "greencolor" : "redcolor"}>  {filterType==="income"? "All Income" : "All Expense"}</h6> </h5>
{/* start  */}
{history
  .filter((item) => {
    if (filterType === "all") {
      return true;
    }

    return item.type === filterType;
  })
  .map((item) => (
    <div
      key={item.id}
      className={
        item.type === "income"
          ? "history-type income"
          : "history-type expence"
      }
    >
      <span>
        {item.type === "income" ? "+" : "-"} {item.source}
      </span>

      <span>
        ₹{item.amount}
      </span>

      <span className="blueclass">
      {new Date(item.date).toLocaleDateString()}
      </span>
    </div>

  ))}
{/* end  */}
    </div>
    </>
  )
}

