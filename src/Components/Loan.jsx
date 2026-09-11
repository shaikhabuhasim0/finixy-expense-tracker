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

 setTimeout(()=>{
   setType("")
 },300)

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

function payduebtn (item){
setform(item)
setType("loadpayingform");
}

const interest = (Number(form.totalamount) * Number(form.intrestrate)) / 100;

const totalAmount = Number(form.totalamount) + interest;

const permonthamount = Number(totalAmount) / Number(form.timeperiod)

const totalremainingamount = formhistory.reduce((total, item) => {

  const interest =
    (Number(item.totalamount) * Number(item.intrestrate)) / 100;

  const totalLoanAmount =
    Number(item.totalamount) + interest;

  return total + totalLoanAmount;

}, 0);

  return (
    <>
    <div>
      <div className="tran"><h3>LOANS</h3></div>
    </div>

<div className="loancards">
  <div className="loancard">
    <span>Total Loan</span>
    <strong>{totalloan}</strong>
  </div>

  <div className="loancard">
    <span>Total Paid</span>
    <strong>₹0</strong>
  </div>
</div>

<div className="loancardsnosecond">
  <div className="loancard">
    <span>Remaining</span>
    <strong>₹ {totalremainingamount} </strong>
  </div>

  <div className="loancard">
    <span>Next Due</span>
    <strong>
      {new Date(nextdues).toLocaleDateString()}
    </strong>
  </div>
</div>

<div className='loanbtnnn'>
 <button className="btn btn-primary" type="button" onClick={()=>setType("addnewloan")}> + Add New Loan</button>
</div>

{type === "addnewloan" && (

 <div className="modal-overlay">

<div className="loanboxxx">

  <h4>Add New Loan</h4>

  <button
    type="button"
    className="btn-close loan-close"
    onClick={clearbutton}
  ></button>

  <div className="loan-field">
    <label className='boldnames'>Loan Name</label>
    <input
      type="text"
      className="nameinputbox"
      placeholder="Enter loan name"
      value={form.loanname}
      onChange={(i) =>
        setform({
          ...form,
          loanname: i.target.value
        })
      }
    />
  </div>

  <div className="loan-field">
    <label className='boldnames'>Lender's Name</label>
    <input
      type="text"
      className="nameinputbox"
      placeholder="Enter lender name"
      value={form.lendername}
      onChange={(e) =>
        setform({
          ...form,
          lendername: e.target.value
        })
      }
    />
  </div>

  <div className="loan-field">
    <label className='boldnames'>Total Amount</label>
    <input
      type="number"
      className="nameinputbox"
      placeholder="Enter amount"
      value={form.totalamount}
      onChange={(e) =>
        setform({
          ...form,
          totalamount: e.target.value
        })
      }
    />
  </div>

  <div className="loan-field">
    <label className='boldnames'>Interest Rate %</label>
    <input
      type="number"
      className="nameinputbox"
      placeholder="Interest rate"
      value={form.intrestrate}
      onChange={(e) =>
        setform({
          ...form,
          intrestrate: e.target.value
        })
      }
    />
  </div>

  <div className="loan-field">
    <label className='boldnames'>Time Period</label>
    <input
      type="number"
      className="nameinputbox"
      placeholder="Months"
      value={form.timeperiod}
      onChange={(e) =>
        setform({
          ...form,
          timeperiod: e.target.value
        })
      }
    />
  </div>

  <button
    type="button"
    className="btn btn-success save-loan-btn"
    onClick={handleclick}
  >
    Save Loan
  </button>

</div>
</div>
)}

<div className='allloans'>All Dues
{formhistory.map((item)=>{
  const dueDate = new Date(item.date);
  dueDate.setMonth(dueDate.getMonth() + 1);
return (
 <div className="due-item">
    <div className="due-row">
      <span className="due-label"><b>Type = </b></span>
      <span className="due-value">{item.loanname}</span>
    </div>

    <div className="due-row">
      <span className="due-label"><b>Amount = </b> </span>
      <span className="due-value">₹{item.totalamount}</span>
    </div>

    <div className="due-footer">
      <span className="due-label"><b>Next Due =</b> </span>
      <span className="due-date">{dueDate.toLocaleDateString()}</span>
      <button 
        type="button"
        className="btn btn-success my-btn"
        onClick={() => payduebtn(item)}
      >
        Pay
      </button>
    </div>
  </div>
)
})}
</div>
<div>
  {type==="loadpayingform" && (
    <div className="modal-overlay2">
    <div className='payingform'><h4>PAY REMAINING DUE <button type="button" className="btn-close" onClick={clearbutton}></button></h4> 
    
<div>
  Name = {form.loanname}
  <br />
  Lender = {form.lendername}
  <br />
  Amount = ₹{form.totalamount}
  <br />
  Intrest = {form.intrestrate} %
  <br />
  Months  = {form.timeperiod}
  <br />
  Remaining Amount = {totalAmount}
  <br />
  Per Month = ₹ {permonthamount}
</div>

    </div>
    </div>
  )}
</div>
    </>
  )
}
