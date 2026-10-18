import React, { useEffect, useState } from 'react'
import {getremainingamount , gettotalAmount ,getLoanRemaining }from "./utils/loanCalc";

export default function Loanlist(props) {
    const {type , setType , form , setform , formhistory , setformhistory , notification , setnotification}= props ;

const allpaidloans = formhistory.filter((loan) => {
  return getLoanRemaining(loan) === 0;
});

const allunpaidloans = formhistory.filter((loan) => {
  return getLoanRemaining(loan) > 1;
});

  return (
    <>
    <div>
<div className="searchbar">
  <span className="searchicon">⌕</span>
  <input type="text" placeholder="Search loans..." />
</div>

    </div>
    <div>Loan History</div>
    <div className='paidloansection'>
    <div className='paidloansection1'>Paid Loans<span className='right-tick-icon '>✅</span> </div>
{allpaidloans.length > 0 ? (
  allpaidloans.map((loan) => (
    <div key={loan.id}>
      Name = {loan.loanname}
      <br />
      Amount = ₹{loan.totalamount}
      <br />
      Interest = {loan.intrestrate}%
      <br />
      Months = {loan.timeperiod}
      <br />
      Remaining Amount = ₹{getLoanRemaining(loan).toFixed(2)}
      <br/>
      <div className="congratulations">
   Congratulations 🎉!! Loan Paid ... 
</div>

    </div>
  ))
) : (
  <div>No history of Paid Loans</div>
)}
    </div>

    <div className='remainingloancontainer'>
    <div>Unpaid Loans <span className='right-tick-icon '>❌</span>
      {allunpaidloans.length > 0 ? (
  allunpaidloans.map((loan) => (
    <div key={loan.id}>
      Name = {loan.loanname}
      <br />
      Amount = ₹{loan.totalamount}
      <br />
      Interest = {loan.intrestrate}%
      <br />
      Months = {loan.timeperiod}
      <br />
      Remaining Amount = ₹{getLoanRemaining(loan).toFixed(2)}
      <br/>
    </div>
  ))
) : (
  <div>No history of remining Loan Loans</div>
)}
    </div>
    </div>
    <div className='creditscorebox'>
      <span className='creditscoretext'>CREDIT SCORE = {}</span>
    </div>
    <div></div>
    </>
  )
}
