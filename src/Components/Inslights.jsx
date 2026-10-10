import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Inslights() {
  const data = [
  { name: "Food", value: 8000 },
  { name: "Rent", value: 5000 },
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
      <Pie data={data} dataKey="value" nameKey="name" innerRadius={35} outerRadius={60}>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
  </div>
</div>
    </>
  )
}
