import React, { useState } from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("");

    const [type, setType] = useState("");

    const [addtrans,setaddtrans] = useState("");
  const [transaction, setTransaction] = useState({
  type: "",
  source: "",
  amount: ""
});
    const [history,sethistory] = useState([]);
    
    // for income
  const totalIncome = history
  .filter((item) => item.type === "income")
  .reduce((total, item) => total + Number(item.amount), 0);

// for expence 
  const totalIncome1 = history
  .filter((item) => item.type === "expense")
  .reduce((total, item) => total + Number(item.amount), 0);

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

function delethsitory (){
  
}

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
      <h5 className="amounts1"> ₹{totalIncome}
         
        </h5>
      </div>
  </div>
  <div className="box">Expense
    <div className="amountbox">
      <h5 className="amounts2"> ₹{totalIncome1}</h5>
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


<div className='historybox'>
  <h4 className='histo'>History <button onClick={delethsitory}> <i className="fa-solid fa-trash"></i></button></h4> 

  {history.map((item) => 

  (
    
    <div key={item.id} className={item.type==="income"? "history-type income" : "history-type expence"}>
      <span>{item.type === "income" ? "+" : "-"} {item.source}</span>
      <span>

        ₹{item.amount} {item.type === "income" ? " IN" : "  EX"}

      </span>
    </div>
  
  ))}
</div>
    </> 
    
  )

}

