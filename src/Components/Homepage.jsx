import React, { useState } from 'react'

export default function Homepage(props) {
    const [greetname , setgreetname]= useState("User")

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
  />
  <button className="btn btn-primary">Add</button>
  <button className="btn btn-danger">Save</button>
</div>
</div>
    </>
  )
}
