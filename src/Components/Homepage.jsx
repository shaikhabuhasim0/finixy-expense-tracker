import React, { useState } from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("");
    // const [test,settext]=useState("");
    const [type, setType] = useState("");
    // const [incomesrc,setincomesrc] = useState ("");
    // const [amountsrc, setamountsrc] = useState("");
    // const [incomesrc1,setincomesrc1] = useState ("");
    // const [amountsrc1, setamountsrc1] = useState("");
    // const [hsitory,sethsitory]= useState("");
    const [addtrans,setaddtrans] = useState("");
  const [transaction, setTransaction] = useState({
  type: "",
  source: "",
  amount: ""
});
    const [history,sethistory] = useState([]);
    

// function for new trans btn 
// function handleClick() {
//   save btn fun to save things 
//   save btn fun to get it before stage 
//           function incsavebtn (){
// localStorage.setItem("income", incomesrc);
// localStorage.setItem("newamount", amountsrc );
// }

// setTimeout (function reverse(){
//       setaddtrans("");
//     setType("");

//     alert ("saved successfuly ")
// },1500);

// incsavebtn()
// reverse()
// }


function handleClick() {

  const newTransaction = {
    id: Date.now(),
    type: "income",
    source: transaction.source,
    amount: transaction.amount
  };

  const updatedHistory = [...history, newTransaction];

  sethistory(updatedHistory);

  localStorage.setItem(
    "transactions",
    JSON.stringify(updatedHistory)
  );

  setTransaction({
    type: "",
    source: "",
    amount: ""
  });

  setaddtrans("");
  setType("");
}
// 

// function handleClick1(){

// function incsavebtn1 (){
// localStorage.setItem("income1", incomesrc1);
// localStorage.setItem("newamount1", amountsrc1 );
// }

// setTimeout (function reverse1(){
//       setaddtrans("");
//     setType("");


//     // alert ("saved successfuly ")
// },1500);

// incsavebtn1()
// reverse1()
// }

function handleClick1() {

  const newTransaction = {
    id: Date.now(),
    type: "expense",
    source: transaction.source,
    amount: transaction.amount
  };

  const updatedHistory = [...history, newTransaction];

  sethistory(updatedHistory);

  localStorage.setItem(
    "transactions",
    JSON.stringify(updatedHistory)
  );

  setTransaction({
    type: "",
    source: "",
    amount: ""
  });

  setaddtrans("");
  setType("");
}



useEffect(() => {
  const data = localStorage.getItem("amount");


  if (data !== null) {
    setcurrentbalance(data);
  }
}, []);

useEffect(() => {
  const savedHistory = localStorage.getItem("transactions");

  if (savedHistory !== null) {
    sethistory(JSON.parse(savedHistory));
  }
}, []);

// useEffect(() => {
//   const data1 = localStorage.getItem("income");

// added 


//   if (data1 !== null) {
//     setincomesrc(data1);
//   }
// }, []);

// useEffect(() => {
//   const data1 = localStorage.getItem("newamount");


//   if (data1 !== null) {
//     setamountsrc(data1);
//   }
// }, []);

// useEffect(() => {
//   const data = localStorage.getItem("income1");
  

//   if (data !== null) {
//     setincomesrc1(data);
//   }
// }, []);

// useEffect(() => {
//   const data = localStorage.getItem("newamount1");


//   if (data !== null) {
//     setamountsrc1(data);
//   }
// }, []);

// save btn function first == remove this one after all 
// function incsavebtn (){
// localStorage.setItem("income", incomesrc);
// localStorage.setItem("newamount", amountsrc );
// }
  
// save btn function second
// function incsavebtn1 (){
// localStorage.setItem("income1", incomesrc1);
// localStorage.setItem("newamount1", amountsrc1 );
// }

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
      <h5 className="amounts1">0</h5>
      </div>
  </div>
  <div className="box">Expense
    <div className="amountbox">
      <h5 className="amounts2"> 0</h5>
      </div> 
    </div>
</div>
<div className='transictionbtnnn'>
<div className="d-grid  col-2 ">
  <button className="btn btn-primary" type="button" onClick={() => setaddtrans("moneyform")}>Add New Transiction + </button>
  </div>
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

        {/* <input type="text" placeholder="Income Source"  onChange={(i)=>setincomesrc(i.target.value)} value={incomesrc}/> */}
        <input
  type="text"
  placeholder="Income Source"
  value={transaction.source}
  onChange={(e) =>
    setTransaction({
      ...transaction,
      source: e.target.value
    })
  }
/>
        {/* <input type="number" placeholder="Amount" onChange={(j)=>setamountsrc(j.target.value)} value={amountsrc}/> */}
        <input
  type="number"
  placeholder="Amount"
  value={transaction.amount}
  onChange={(e) =>
    setTransaction({
      ...transaction,
      amount: e.target.value
    })
  }
/>
        {/* <p>
  {transaction.source} - {transaction.amount}
</p> */}
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

        {/* <input type="text" placeholder="Expense Name" onChange={(x)=>setincomesrc1(x.target.value)} value={incomesrc1} /> */}
        <input
  type="text"
  placeholder="Expense Name"
  value={transaction.source}
  onChange={(e) =>
    setTransaction({
      ...transaction,
      source: e.target.value
    })
  }
/>
        {/* <input type="number" placeholder="Amount" onChange={(z)=>setamountsrc1(z.target.value)} value={amountsrc1} /> */}
        <input
  type="number"
  placeholder="Amount"
  value={transaction.amount}
  onChange={(e) =>
    setTransaction({
      ...transaction,
      amount: e.target.value
    })
  }
/>
        <button  type="button" class="btn btn-primary" onClick={handleClick1}>Save</button>
        
    </div>
    
)}
   </div>
   
  </div>
  )} 

{/* <div className='historybox'>
  <h4 className='histo'>History</h4>

  <h6 className='colornames'>
    {amountsrc} IN
  </h6>

  <h6 className='colornames1'>
    {amountsrc1} EX
  </h6>
</div> */}
<div className='historybox'>
  <h4 className='histo'>History</h4>

  {history.map((item) => (
    <div key={item.id} className="history-item">
      <span>{item.source}</span>
      <span>
        ₹{item.amount} {item.type === "income" ? "IN" : "EX"}
      </span>
    </div>
  ))}
</div>
    </> 
    
  )

}

