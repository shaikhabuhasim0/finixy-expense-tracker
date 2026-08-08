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
    const [addtrans,setaddtrans] = useState("");

// function for new trans btn 
function handleClick() {
  //save btn fun to save things 
  // save btn fun to get it before stage 
          function incsavebtn (){
localStorage.setItem("income", incomesrc);
localStorage.setItem("newamount", amountsrc );
}

function reverse(){
  addtrans === false
}

incsavebtn()
reverse()
}


useEffect(() => {
  const data = localStorage.getItem("amount");


  if (data !== null) {
    setcurrentbalance(data);
  }
}, []);

useEffect(() => {
  const data1 = localStorage.getItem("income");


  if (data1 !== null) {
    setincomesrc(data1);
  }
}, []);

useEffect(() => {
  const data1 = localStorage.getItem("newamount");


  if (data1 !== null) {
    setamountsrc(data1);
  }
}, []);

useEffect(() => {
  const data = localStorage.getItem("income1");


  if (data !== null) {
    setincomesrc1(data);
  }
}, []);

useEffect(() => {
  const data = localStorage.getItem("newamount1");


  if (data !== null) {
    setamountsrc1(data);
  }
}, []);

// save btn function first == remove this one after all 
// function incsavebtn (){
// localStorage.setItem("income", incomesrc);
// localStorage.setItem("newamount", amountsrc );
// }
  
// save btn function second
function incsavebtn1 (){
localStorage.setItem("income1", incomesrc1);
localStorage.setItem("newamount1", amountsrc1 );
}

 function editcb(){


}

 function savecb(){

localStorage.setItem("amount", currentbalance);

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
      <h5 className="amounts1">{amountsrc}</h5>
      </div>
  </div>
  <div className="box">Expense
    <div className="amountbox">
      <h5 className="amounts2"> {amountsrc1}  </h5>
      </div> 
    </div>
</div>
<div className="d-grid  col-2 ">
  <button className="btn btn-primary" type="button" onClick={() => setaddtrans("moneyform")}>Add New Transiction + </button>
  <div><h1>ABU HASIM </h1></div>
  </div>

  {addtrans === "moneyform" && (

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
       <button  type="button" class="btn btn-primary" onClick={handleClick}  >Save</button>
    </div>
  
    </>
    
)}

 
{type === "savetoremove" && (
  {}
)}


{type === "expense" && (
    <div className='liningbox' >
        <h3 className='liningbox2' >Expense source</h3>

        <input type="text" placeholder="Expense Name" onChange={(x)=>setincomesrc1(x.target.value)} value={incomesrc1} />
        <input type="number" placeholder="Amount" onChange={(z)=>setamountsrc1(z.target.value)} value={amountsrc1} />
        <button  type="button" class="btn btn-primary" onClick={incsavebtn1}>Save</button>
        
    </div>
    
)}
   </div>
   
  </div>
  )} 
    </> 
    
  )
}



