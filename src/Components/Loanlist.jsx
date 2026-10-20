
import React, { useEffect, useState } from 'react'
import { getremainingamount, gettotalAmount, getLoanRemaining } from "./utils/loanCalc";

export default function Loanlist(props) {
    const { type, setType, form, setform, formhistory, setformhistory, notification, setnotification } = props;

    const [search, setSearch] = useState("");

    // Search ke according loans filter honge
    const filteredLoans = formhistory.filter((loan) => {
        const searchText = search.toLowerCase().trim();

        return (
            (loan.loanname || "").toLowerCase().includes(searchText) ||
            (loan.lendername || "").toLowerCase().includes(searchText)
        );
    });

    // Filtered loans mein se Paid aur Unpaid loans
    const allpaidloans = filteredLoans.filter((loan) => {
        return getLoanRemaining(loan) === 0;
    });

    const allunpaidloans = filteredLoans.filter((loan) => {
        return getLoanRemaining(loan) > 1;
    });

    return (
 <>
 <div>
<div className="searchbar">
    <span className="searchicon">⌕</span>

<input
type="text"
placeholder="Search by loan or lender name..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

 {search && (
   <button
     type="button"
 onClick={() => setSearch("")}
 >
✕
 </button>
 )}
 </div>
</div>

<div>Loan History</div>

<div className='paidloansection'>
<div className='paidloansection1'>
   Paid Loans
  <span className='right-tick-icon'>✅</span>
 </div>

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
  <br />

 <div className="congratulations">
 Congratulations 🎉!! Loan Paid ...
  </div>
 </div>
 ))
 ) : (
  <div>
  {search
 ? "No matching paid loans found"
 : "No history of Paid Loans"}
 </div>
 )}
 </div>

  <div className='remainingloancontainer'>
  <div>
  <span className='unpaidloanscolor'>Unpaid Loans <span className='right-tick-icon'>❌</span></span>

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
     <br />
    </div>
  ))
 ) : (
  <div>
  {search
    ? "No matching unpaid loans found"
  : "No history of remaining loans"}
  </div>
   )}  </div>
  </div>

<div className='creditscorebox'>
  <span className='creditscoretext'>
  CREDIT SCORE = "
   <span className='redwalacreditreconrdtext'>0</span>
 " NO Record Found
  </span>
 </div>

   <div className='loanlistsectionlast'>
  <div>Total paid = {allpaidloans.length}</div>
 <div>Total unpaid = {allunpaidloans.length}</div>
</div>
 </>
    )
}

// LOAN LIST PAGE IS ALL DOENE !!!!! 
