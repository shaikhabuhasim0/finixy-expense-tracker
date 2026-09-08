import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Loan(props) {
  
const {type , setType , form , setform , formhistory , setformhistory }= props ;


function handleclick (){

const newform = {
loanname : form.loanname ,
lendername : form.lendername ,
totalamount : form.totalamount ,
intrestrate: form.intrestrate,
timeperiod : form.timeperiod,
date : new Date().toISOString()
}

  const updatedHistory = [...formhistory , newform];

  setformhistory(updatedHistory);

  localStorage.setItem(
    "form",
    JSON.stringify(updatedHistory)
  )

  setform({
    loanname: "",
    lendername: "",
    totalamount: "",
    intrestrate : "",
    timeperiod:"",
    date:""
  });

}

useEffect(()=>{
const saveHistory = localStorage.getItem("form")

if (saveHistory!== null){
  setformhistory(JSON.parse(saveHistory));
}
},[])

function clearbutton (){
 setTimeout(()=>{
   setType("")
 },300)
}

const totalloan = formhistory.length

const nextdues =  Math.min(
...formhistory.map((item)=>{
  const nextdues1 = new Date(item.date);
  nextdues1.setMonth(nextdues1.getMonth() + 1);
  return nextdues1.getMonth()
})
)

const remainingamount = {}

  return (
    <>
    <div>
      <div className="tran"><h3>LOANS</h3></div>
    </div>

<div className='loancards'>
  <div className='loancards1'>Total Loan {totalloan} </div>
  <div className='loancards2'>Total Paid</div>
</div>

<div className='loancardsnosecond'>
  <div className='loancardsno1'>Remaining</div>
  <div className='loancardsno2'>Next Due on 
   {new Date(nextdues).toLocaleDateString()}
    
  </div>
</div>

<div className='loanbtnnn'>
 <button className="btn btn-primary" type="button" onClick={()=>setType("addnewloan")}> + Add New Loan</button>
</div>

{type === "addnewloan" && (
  <div className='loanboxxx'>
    <div>
    <div>Loan Name :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Enter Name"
    value={form.loanname}
      onChange={(i) =>
    setform({
      ...form,
      loanname: i.target.value
    })
  }
    /> <button type="button" className="btn-close" onClick={clearbutton}></button>
    </div>
        <div>Lender's Name :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Enter Name"
    value={form.lendername}
          onChange={(e) =>
    setform({
      ...form,
      lendername: e.target.value
    })
  }
    />
    </div>
        <div>Total Amount :
  <input
    type="number"
    className="nameinputbox"
    placeholder="Enter Amount"
    value={form.totalamount}
          onChange={(e) =>
    setform({
      ...form,
      totalamount: e.target.value
    })
  }
    />
    </div>
        <div> Intrest Rate % :
  <input
    type="number"
    className="nameinputbox"
    placeholder="Intrest Rate % "
    value={form.intrestrate}
          onChange={(e) =>
    setform({
      ...form,
      intrestrate: e.target.value
    })
  }
    />
    </div>
        <div> Time Period :
  <input
    type="number"
    className="nameinputbox"
    placeholder="Time Period"
    value={form.timeperiod}
          onChange={(e) =>
    setform({
      ...form,
      timeperiod: e.target.value
    })
  }
    />
    </div>
    </div>
    <button type="button" className="btn btn-success" onClick={handleclick}>save </button>
  </div>
  
)}

<div className='allloans'>All Dues
{formhistory.map((item)=>{
  const dueDate = new Date(item.date);
  dueDate.setMonth(dueDate.getMonth() + 1);
return (
<div>Type = {item.loanname} Amount = ₹{item.totalamount}  Next due on {dueDate.toLocaleDateString()}  </div>
)
})}
</div>
    </>
  )
}
