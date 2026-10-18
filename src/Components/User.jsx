import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function User(props) {
  const {username,setusername ,type , setType , userinfo , setuserinfo}= props


  function changename (){
setType("namechangebox")
  }

function saveusername (){
setTimeout(() => {
  setType("")
}, 600);
}

function saveuserinfo (){
  setTimeout(() => {
  setType("")
}, 600);
}

function loaduserinfoform(){
setType("loadinguserinfoform")
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
       type="text"
        placeholder="Enter Name"
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
<div className='boxofuserdetails'>
  <div className='boxofuserdetailsform'> 
Name :  <span>{userinfo.username}</span> 
  <br/>
  Mail : <span>{userinfo.usermail}</span>
  <br/>
  Mobile No : <span>{userinfo.usermobileno}</span>
  <br/>
  Aadhar No : <span>{userinfo.useraadharno}</span>
  <br/>
  Account NO : <span>{userinfo.useraccountno}</span>
  <br/>
  Pan No : <span>{userinfo.userpanno}</span>
 </div>
</div>

<div 
className='userinfomationdiv'
>
<button type="button" className="btn btn-primary btn-sm updateuserinfobtn" onClick={loaduserinfoform}>
Update User Info <i class="fa-solid fa-circle-info"></i>
</button>
</div>
Danger Button 

{type==="loadinguserinfoform" && (
  <div>
  <div>
Name = <input type="text" 
placeholder="Enter Name"
        maxLength={15}
        value={userinfo.username}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }}
/>
<br/>
E-Mail = <input type="text" placeholder="Enter E-Mail"
        maxLength={15}
        value={userinfo.usermail}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }} />
<br/>
Mobile No = <input type="text" placeholder="Enter Mobile No"
        maxLength={15}
        value={userinfo.usermobileno}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }} />
<br/>
Aadhar No = <input type="text" placeholder="Enter Aadhar No"
        maxLength={15}
        value={userinfo.useraadharno}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }}/>
<br/>
Account NO = <input type="text" placeholder="Enter Account NO "
        maxLength={15}
        value={userinfo.useraccountno}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }}/>
<br/>
Pan No = <input type="text" placeholder="Enter Pan No"
        maxLength={15}
        value={userinfo.userpanno}
        onChange={(i) => {
          setuserinfo(i.target.value);
        }}/>
<br/>
<button className="btn-solid btn-styled theme-success" onClick={saveuserinfo}>save</button>
  </div>
</div>
)}

</>
  )
}
