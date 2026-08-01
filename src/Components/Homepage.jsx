import React, { useState } from 'react'
import { useEffect } from "react";

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("")

useEffect(() => {
  const data = localStorage.getItem("amount");
  console.log("Loaded:", data);

  if (data !== null) {
    setcurrentbalance(data);
  }
}, []);

  
 function editcb(){


}

 function savecb(){

// localStorage.setItem("amount",currentbalance)
localStorage.setItem("amount", currentbalance);

}

function addtransiction(){


}

  return (<>
  <div className='homeposition'>
    <div><h3>{props.homepage}</h3></div>
    <div className='usergreetings'> Good Morning Abu ,</div>
    </div>

    {/* main box of CURRENT BALANCE  */}
    <div className='input-cb'>
      <p>CURRENT BALANCE </p>
    <div className="d-flex gap-2">
  <input
    type="text"
    className="form-control"
    placeholder="Enter Amount$"
    value={currentbalance}
    onChange={(e)=>setcurrentbalance(e.target.value)}
    />

  <button className="btn btn-primary" onClick={editcb}>Edit</button>
  <button className="btn btn-danger" onClick={savecb}>Save</button>
</div>
</div>

<div className="container1">
  <div className="box">Income </div>
  <div className="box">Expense </div>
</div>
<div className="d-grid  col-2 ">
  <button className="btn btn-primary" type="button" onClick={addtransiction}>Add New Transiction + </button>
  </div>
    </>
  )
}


