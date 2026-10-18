import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function User(props) {
  const {username,setusername ,type , setType}= props

  function changename (){
setType("namechangebox")
  }

function saveusername (){
setTimeout(() => {
  setType("")
}, 600);
}
  return (
    <>
    <div>
      <div className="tran"><h3>USER</h3></div>
    </div>
    <div className='userlogo'>
<i className="fa-duotone fa-solid fa-circle-user"></i>
    </div>
    <span className='userlogokanaam'> {username}<i className="fa-solid fa-pencil pencilsize" onClick={changename}></i> </span>
<div>
  {type === "namechangebox" && (
    <>
      <input
        placeholder="Enter Name"
        type="text"
        maxLength={15}
        value={username}
        onChange={(i) => {
          setusername(i.target.value);
        }}
      />

      <button type="button" onClick={saveusername}>Save</button>
    </>
  )}
</div>
<div type="button"
>
  <i className="fa-solid fa-circle-info userinformationicon"></i> <span className='userinformationicon' >User Information</span>
</div>

</>

  )
}
