import React, { useState } from 'react'

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("")


  
 function editcb(){


}

 function savecb(){

let a =localStorage.setItem("amount","currentbalance")

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
    {localStorage.setItem("amount",currentbalance)}

  <button className="btn btn-primary" onClick={editcb}>Edit</button>
  <button className="btn btn-danger" onClick={savecb}>Save</button>
</div>
</div>

<div className="container1">
  <div className="box">Income </div>
  <div className="box">Expense </div>
</div>
    </>
  )
}


