import React, { useEffect, useState } from 'react'

export default function Loan(props) {

const {type , setType , form , setform , formhistory , setformhistory }= props ;

// pay modal me user jo amount daalega wo yaha store hoga (form.amountreceived = ab tak total paid)
const [payAmount, setPayAmount] = useState("");

function handleclick (){ // start hai btn !!!! 

const newform = {
id : Date.now(),
loanname : form.loanname ,
lendername : form.lendername ,
totalamount : form.totalamount ,
intrestrate: form.intrestrate,
timeperiod : form.timeperiod,
date : new Date().toISOString(),
amountreceived : form.amountreceived
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
    date:"" ,
    amountreceived :""
  });

 setTimeout(()=>{
   setType("")
 },300)

} // yha end hai ye btn !!!!!!! 

useEffect(()=>{
try {
  const saveHistory = localStorage.getItem("form")

  if (saveHistory!== null){
    const parsed = JSON.parse(saveHistory);
    // purane loans me id nahi thi, to unko id de do
    const withIds = parsed.map((l, i) => l.id ? l : { ...l, id: Date.now() + i });
    setformhistory(withIds);
  }
} catch (err) {
  console.log("localStorage data kharab hai", err);
}
},[])

function clearbutton (){
 setPayAmount("");
 setTimeout(()=>{
   setType("")
 },300)
}

const totalloan = formhistory.length

const nextdues = Math.min(
  ...formhistory.map((item) => {
    const nextdues1 = new Date(item.date);
    nextdues1.setMonth(nextdues1.getMonth() + 1);

    return nextdues1.getTime();
  })
);

// pay button (All Dues list wala) - modal kholta hai
function payduebtn (item){
setform(item)       // form.amountreceived = ab tak jitna paid hai
setPayAmount("");   // nayi payment ka input khali se start
setType("loadpayingform");
}

const interest = (Number(form.totalamount) * Number(form.intrestrate)) / 100;

const totalAmount =
  Number(form.totalamount) +
  interest -
  (Number(form.amountreceived) || 0);

const permonthamount = (Number(totalAmount) / Number(form.timeperiod)) 

const totalremainingamount = formhistory.reduce((total, item) => {

  const interest =
    (Number(item.totalamount) * Number(item.intrestrate)) / 100;

  const totalLoanAmount =
    Number(item.totalamount) + interest;

  const paid =
    Number(item.amountreceived) || 0;

  return total + totalLoanAmount - paid;

}, 0);

// saare loans ka total paid
const totalPaid = formhistory.reduce((total, item) => {
  return total + (Number(item.amountreceived) || 0);
}, 0);

const remainingamount = Number(totalAmount) || 0 ;

// second pay btn for loan !! 
// user ne jitni value daali, utni usi loan me add hoti hai aur sab kuch update hota hai
function payduebtn2 (){
  const amt = Number(payAmount);

  // invalid ya zyada amount ho to kuch mat karo
  if (!amt || amt <= 0) return;
  if (amt > remainingamount + 0.001) return;

  const updatedHistory = formhistory.map((loan) =>
    loan.id === form.id
      ? {
          ...loan,
          amountreceived: Number(
            ((Number(loan.amountreceived) || 0) + amt).toFixed(2)
          )
        }
      : loan
  );

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
    date:"" ,
    amountreceived :""
  });

  setPayAmount("");

  setTimeout(()=>{
   setType("")
 },300)
}

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
    <strong className='allpaidtransictions'>₹{totalPaid.toFixed(2)}</strong>
  </div>
</div>

<div className="loancardsnosecond">
  <div className="loancard">
    <span>Remaining</span>
    <strong className='allunpaidtransictions'>₹{totalremainingamount.toFixed(2)}  </strong>
  </div>

  <div className="loancard">
    <span>Next Due</span>
    <strong>
      {formhistory.length ? new Date(nextdues).toLocaleDateString() : "-"}
    </strong>
  </div>
</div>

<div className='loanbtnnn'>
 <button
  className="btn btn-primary"
  type="button"
  onClick={() => {
    setform({
      loanname: "",
      lendername: "",
      totalamount: "",
      intrestrate: "",
      timeperiod: "",
      date: "",
      amountreceived: ""
    });

    setType("addnewloan");
  }}
>
  + Add New Loan
</button>
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
    onClick={() => {
      if (
        form.loanname.length === 0 ||
        form.lendername.length === 0 ||
        form.totalamount.length === 0 ||
        form.intrestrate.length === 0 ||
        form.timeperiod.length === 0
      ) {
        console.log("fill all fields");
        return;
      }
      handleclick();
    }}
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
<div className="due-item" key={item.id}>
  <div className="due-row">
    <span className="due-label">Type = </span>
    <span className="due-value">{item.loanname}</span>
  </div>
  <div className="due-row">
    <span className="due-label">Amount = </span>
    <span className="due-value">₹{item.totalamount}</span>
  </div>
  <div className="due-footer">
    <span className="due-date">Next Due = {dueDate.toLocaleDateString()}</span>
    <button type="button" className="btn btn-success my-btn" onClick={() => payduebtn(item)}>Pay</button>
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
  Remaining Amount = ₹{remainingamount.toFixed(2)}
  <br />
 Per Month = ₹ {Number(permonthamount || 0).toFixed(2)}
  <br />
  <input
  type = "number"
  className='inputtagtocloseloan'  
  placeholder={String(remainingamount.toFixed(2))}
  value = {payAmount}
  max = {remainingamount}
  onChange={(e) => {
    const value = Number(e.target.value);

    // remaining se zyada amount allow nahi
    if (value <= remainingamount) {
      setPayAmount(e.target.value);
    }
  }}
/>
  <button
  type="button"
  className="btn btn-success my-btn2"
  disabled={!Number(payAmount) || Number(payAmount) <= 0}
  onClick={payduebtn2}
>
  Pay
</button>
</div> 

    </div>
    </div>
  )}
</div>
    </>
  )
}