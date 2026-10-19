import React, { useEffect, useState } from 'react'
// import {   Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Pie , PieChart, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getTotalPaid, getTotalRemaining, gettotalIncome ,gettotalExpense , gettotalPaid1 , gettotalremainingamount} from "./utils/loanCalc";

export default function Inslights(props) {

   const {  history, sethistory , type , setType , date , setdate , formhistory , setformhistory , getallpaidloans , getallunpaidloans} = props;

  const totalPaid = getTotalPaid(formhistory);
  const totalRemaining = getTotalRemaining(formhistory);

  const data = [
    { name: "Paid", value: totalPaid },
    { name: "Remaining", value: totalRemaining },
  ];

const COLORS = [ "#22c55e", "#fd0000"];

// name me type , value me amount !! 
const barData = history.map((item, i) => ({
  name: item.title || item.name || `#${i + 1}`,   // x-axis pe label
  value: Number(item.amount) || 0,
  type: item.type,                                // income ya expense
}));

const BAR_COLORS = ["#2563c1", "#fd0000"]; // green, red

// first one 
const income = gettotalIncome(history);
const expense = gettotalExpense(history);
const savinginpercent =  income > 0 ? Number(income-expense) / income * 100 : 0

// second one 
const totalpaid = gettotalPaid1(formhistory);
const totalremainingg = gettotalremainingamount(formhistory)

const remainingamountinpercent =  totalpaid > 0 ? Number(totalpaid-totalremainingg) / totalpaid * 100 : 0

    const data2 = [
    { name: "Empty", value: 60 },
    { name: "Empty", value: 40 },
  ];

  const Colors2 = ["#4cdde7" , "#e74ccd"]

  return (
    <>
    <div> 
      <div className="tran"><h3>INSLIGHTS</h3></div>
    </div >
    <div className='loankainslights'>
      ~ loan inslights 
    </div>
    <div className='borderofdonut'>
    <div>
   <div className='loanbargraph'>

    {formhistory.length> 0 ? (
        <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie   data={data} dataKey="value" nameKey="name" innerRadius={35} outerRadius={60}>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
    ) : (  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie   data={data2} dataKey="value" nameKey="name" innerRadius={35} outerRadius={60}>
        {data.map((_, i) => <Cell key={i} fill={Colors2[i % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>)
    }
  </div>
  </div>
</div>

<div className="loanbargraph-text">
  <span className="paid-text">Total Paid : {totalPaid}</span>
  <br />
  <span className="remaining-text">Total Remaining : {totalRemaining}</span>
</div>
<div className='incomesandexpencedata'>
<div className="incomeexpensebar">
  {history.length > 0 ? (<ResponsiveContainer width="100%" height="100%">
    <BarChart data={barData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" barSize={20}>
        {barData.map((entry, i) => (
          <Cell
            key={i}
            fill={entry.type === "income" ? "#22c55e" : "#fd0000"}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
) : (
  <div className='inslights-texttt'> No History Record Found... </div>)
  }
   
</div>
</div>
<div className='donokabaap'> 
<div className='betano11'> savings ={savinginpercent.toFixed(1)}%</div> 
<div className='betano22'>  Remaining ={remainingamountinpercent.toFixed(1)}% </div>
</div>
    </>
  )
}

// (income - expense) / income * 100 formula !! 
