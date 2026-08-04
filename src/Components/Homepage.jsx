import React, { useState } from 'react'
import { useEffect } from "react";

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("");
    const [test,settext]=useState("");
    const [type, setType] = useState("");
    const [incomesrc,setincomesrc] = useState ("");
    const [amountsrc, setamountsrc] = useState("");
    const [incomesrc1,setincomesrc1] = useState ("");
    const [amountsrc1, setamountsrc1] = useState("");

useEffect(() => {
  const data = localStorage.getItem("amount");


  if (data !== null) {
    setcurrentbalance(data);
  }
}, []);

useEffect(() => {
  const data = localStorage.getItem("income");


  if (data !== null) {
    setincomesrc(data);
  }
}, []);

useEffect(() => {
  const data = localStorage.getItem("newamount");


  if (data !== null) {
    setamountsrc(data);
  }
}, []);


function incsavebtn (){
localStorage.setItem("income", setincomesrc);
localStorage.setItem("newamount", setamountsrc );
}
  
 function editcb(){


}

 function savecb(){

localStorage.setItem("amount", currentbalance);

}

function addtransiction(){


}

  return (<>
  <div className='homeposition'>
    <div><h3>{props.homepage}</h3></div>
    <div className='usergreetings'> Good Morning Abu ,</div>
    </div>

  
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
  <div className="box">Income 
    <div className="amountbox">
      <h4 className="amounts1">  </h4>
      </div>
  </div>
  <div className="box">Expense
    <div className="amountbox">
      <h4 className="amounts1">   </h4>
      </div> 
    </div>
</div>
<div className="d-grid  col-2 ">
  <button className="btn btn-primary" type="button" onClick={addtransiction}>Add New Transiction + </button>
  </div>
  <div className="transictions">
    <div className="twobtn">
   <button type="button" className="btn btn-outline-warning" onClick={() => setType("income")}>IN</button>
   <button type="button" className="btn btn-outline-warning" onClick={() => setType("expense")}>EX</button>
   
   {type === "income"  && (
    <>
    <div className='liningbox'>
        <h3 className='liningbox2'>Income Form</h3>

        <input type="text" placeholder="Income Source"  onChange={(i)=>setincomesrc(i.target.value)} value={incomesrc}/>
        <input type="number" placeholder="Amount" onChange={(j)=>setamountsrc(j.target.value)} value={amountsrc}/>
       <button  type="button" class="btn btn-primary" onClick={incsavebtn}>Save</button>
    </div>
  
    </>
    
)}

{type === "expense" && (
    <div className='liningbox' >
        <h3 className='liningbox2' >Expense source</h3>

        <input type="text" placeholder="Expense Name" />
        <input type="number" placeholder="Amount" />
    </div>
)}
   </div>
   
  </div>
    </>
  )
}


