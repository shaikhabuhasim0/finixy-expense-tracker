import React, { useEffect, useState } from 'react'
// import {   Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Pie , PieChart, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getTotalPaid, getTotalRemaining } from "./utils/loanCalc";


export default function Inslights(props) {

   const {  history, sethistory , type , setType , date , setdate , formhistory , setformhistory} = props;

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

const BAR_COLORS = ["#22c55e", "#fd0000"]; // green, red

  return (
    <>
    <div> 
      <div className="tran"><h3>INSLIGHTS</h3></div>
    </div>
    <div className='loankainslights'>
      ~ loan inslights 
    </div>
    <div>
   <div className='loanbargraph'>
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie   data={data} dataKey="value" nameKey="name" innerRadius={35} outerRadius={60}>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
  </div>
</div>
<div className="loanbargraph-text">
  <span className="paid-text">Total Paid : {totalPaid}</span>
  <br />
  <span className="remaining-text">Total Remaining : {totalRemaining}</span>
</div>
<div className='incomesandexpencedata'>
  All Incomes & expence Data 
<div className="incomeexpensebar">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={barData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" barSize={30}>
        {barData.map((entry, i) => (
          <Cell
            key={i}
            fill={entry.type === "income" ? "#22c55e" : "#fd0000"}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>
</div>
    </>
  )
}

