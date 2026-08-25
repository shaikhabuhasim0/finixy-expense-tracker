import { Type } from 'lucide-react';
import React, { useState } from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage(props) {
    const [currentbalance , setcurrentbalance]=useState("");
    const [notification , setnotification]=useState("")
    const [type, setType] = useState("");
    const [startingbalance , setstartingbalance]= useState("")
    const [type2 , settype2] = useState ("")
    const [addtrans,setaddtrans] = useState("");
  const [transaction, setTransaction] = useState({
  type: "",
  source: "",
  amount: ""
});
const [history,sethistory] = useState([]);



// current balance ko functional banane ke liye !! 
const setcurrentbalance1 = history
.filter((item)=>item.type === "income.amount" - "expense.amount")
.every((totalcb,item)=> totalcb + Number(item.amount),0)


// for income
  const totalIncome = history
  .filter((item) => item.type === "income")
  .reduce((total, item) => total + Number(item.amount), 0);

// for expence 
  const totalExpense = history
  .filter((item) => item.type === "expense")
  .reduce((total, item) => total + Number(item.amount), 0);

  const finalBalance =
  Number(currentbalance || 0) +
  totalIncome -
  totalExpense;

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
  setnotification("Task Has Been Saved Successfully ✅")

  setTimeout(()=>{
  setnotification("")
  },3000)
}

  // to delet history 
function delethsitory (){

 if (history.length===0){
setnotification("There is Nothing To Delet 🚫")
setTimeout(()=>{
  setnotification("")
},3000)
 }
 
 else {
  
      localStorage.removeItem(
    "transactions",
  );
 sethistory([]);
  setTimeout(()=>{
    setType("")
  },2000)

setnotification("History Has Been Deleted 🗑️ ")
setTimeout(()=>{
  setnotification("")
},3000)
}


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
  setnotification("Task Has Been Saved Successfully ✅")

  setTimeout(()=>{
    setnotification("")
  },3000)
}



useEffect(() => {
  const data = localStorage.getItem("amount");

  if (data !== null) {
    setcurrentbalance(data);
  }
}, []);

// useEffect(() => {
//   const data = localStorage.getItem("amount");

//   if (data !== null) {
//     {setcurrentbalance(data)};
//   }
// }, []);

useEffect(() => {
  const savedHistory = localStorage.getItem("transactions");

  if (savedHistory !== null) {
    sethistory(JSON.parse(savedHistory));
  }
}, []);

useEffect(() => {
  const data = localStorage.getItem("amount");

  if (data !== null) {
    setstartingbalance(data);
  }
}, []);

 function editcb(){


}

 function savecb(){

localStorage.setItem("amount", currentbalance);

localStorage.setItem("amount", startingbalance);

 setnotification("Current Balance Update Sucessfully 💰")

  setTimeout(()=>{
    setnotification("")
  },3000)
}



// current balance = expense - income 
// cb = 2000 - 10000 
// ab = 8000 
// my simple algoriths 

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
    value={finalBalance}
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
      <h5 className="amounts2"> ₹{totalExpense}</h5>
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
  <h4 className='histo'>History <button onClick={()=>setType("delethsitory")}> <i className="fa-solid fa-trash"></i></button></h4> 


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

{type === "delethsitory" && (
  <div className='historyboxx'><h7 className="historyboxx5"> Do You Want To Delet History ? </h7>
  
<div className='history-buttons '>
    <button type="button" className="btn btn-primary">Cancle</button>
  <button type="button" className="btn btn-danger" onClick={delethsitory}>Delet</button>

</div>
  </div>
  
)}

<div className='notifications'>
  <span className='notifications1'><h6>{notification}</h6></span>
</div>
    </> 
    
  )

}

