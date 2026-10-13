import React, { useEffect, useState } from 'react'
import {getremainingamount , gettotalAmount ,getLoanRemaining }from "./utils/loanCalc";

export default function Loanlist(props) {
    const {type , setType , form , setform , formhistory , setformhistory , notification , setnotification}= props ;

const allpaidloans = formhistory.filter((loan) => {
  return getLoanRemaining(loan) === 0;
});

  return (
    <>
    <div>Loan History</div>
    <div className='paidloansection'>
    <div className='paidloansection1'>Paid Loans </div>
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
    </>
  )
}
