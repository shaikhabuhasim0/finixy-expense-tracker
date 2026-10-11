import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { getTotalPaid, getTotalRemaining } from "./utils/loanCalc";


export default function Inslights({ formhistory }) {

  const totalPaid = getTotalPaid(formhistory);
  const totalRemaining = getTotalRemaining(formhistory);

  const data = [
    { name: "Paid", value: totalPaid },
    { name: "Remaining", value: totalRemaining },
  ];
const COLORS = [ "#22c55e", "#fd0000"];
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
    </>
  )
}
