import React from 'react'

export default function Loan(props) {
  
const {type , setType }= props ;

  return (
    <>
    <div>
      <div className="tran"><h3>LOANS</h3></div>
    </div>

<div className='loancards'>
  <div className='loancards1'>Total Loan</div>
  <div className='loancards2'>Total Paid</div>
</div>

<div className='loancardsnosecond'>
  <div className='loancardsno1'>Remaining</div>
  <div className='loancardsno2'>Next Due</div>
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
    />
    </div>
    
        <div>Lender's Name :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Enter Name"
    />
    </div>
        <div>Total Amount :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Enter Amount"
    />
    </div>
        <div> Intrest Rate % :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Intrest Rate % "
    />
    </div>
        <div> Time Period :
  <input
    type="text"
    className="nameinputbox"
    placeholder="Time Period"
    />
    </div>
    </div>
  </div>
  
)}
    </>
  )
}
