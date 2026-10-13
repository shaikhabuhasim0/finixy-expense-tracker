import React, { useEffect, useState } from 'react'

export default function Loanlist(props) {
    const {type , setType , form , setform , formhistory , setformhistory , notification , setnotification}= props ;

    
  return (
    <>
    <div>Loan History</div>
    <div className='paidloansection'>
    <div className='paidloansection1'>Paid Loans </div>
    </div>
    </>
  )
}
