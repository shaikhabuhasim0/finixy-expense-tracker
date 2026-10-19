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
 Update User Info <i className="fa-solid fa-circle-info"></i>
</button>

<div className='darkmodetoggle-all'>
  <div className='fordisplayflex-oftoggle'>
    <label className="form-check-label" htmlFor="fieldSwitch">
     Dark-Mode
  </label>
<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="fieldSwitch"
  />
  </div>
</div>
</div>
</div>

<div className='languagesection'>
<div className="language-option">
 ㅤ Language :ㅤ
  <img
    src="https://flagcdn.com/w40/gb.png"
    alt="United Kingdom"
    className="uk-flag"
  />
  <span>ㅤEnglish (UK)</span>
</div>
</div>
<div className='notification-toggle'>
<div className='fordisplayflex-oftoggle'>
    <label className="form-check-label" htmlFor="fieldSwitch">
     Enable Notifications 
  </label>
<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="fieldSwitch"
  />
  </div>
</div>
</div>
<div className='dangerzonediv'>
  <span>Danger Zone ❌ </span>
<button type="button" className="danger-btn">
  <i className="fa-solid fa-trash"></i>
  Clear Data
</button>
</div>

<div>
  <div className="account-section">

  <button className="account-btn" onClick={() => setType("about")}>
    <i className="fa-solid fa-circle-info"></i>
    <span>About Finixy</span>
    <i className="fa-solid fa-chevron-right arrow"></i>
  </button>

  <button
    className="account-btn logout-btn"
    onClick={() => {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("authToken");
        window.location.reload();
      }
    }}
  >
    <i className="fa-solid fa-right-from-bracket"></i>
    <span>Logout</span>
    <i className="fa-solid fa-chevron-right arrow"></i>
  </button>
</div>
</div>

{type==="loadinguserinfoform" && (
  <div>
  <div>
Name = <input type="text" 
placeholder="Enter Name"
        maxLength={15}
        value={userinfo.username}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    username: i.target.value
  });
}}
/>
<br/>
E-Mail = <input type="text" placeholder="Enter E-Mail"
        maxLength={15}
        value={userinfo.usermail}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    usermail: i.target.value
  });
}} />
<br/>
Mobile No = <input type="text" placeholder="Enter Mobile No"
        maxLength={15}
        value={userinfo.usermobileno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    usermobileno: i.target.value
  });
}} />
<br/>
Aadhar No = <input type="text" placeholder="Enter Aadhar No"
        maxLength={15}
        value={userinfo.useraadharno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    useraadharno: i.target.value
  });
}}/>
<br/>
Account NO = <input type="text" placeholder="Enter Account NO "
        maxLength={15}
        value={userinfo.useraccountno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    useraccountno: i.target.value
  });
}}/>
<br/>
Pan No = <input type="text" placeholder="Enter Pan No"
        maxLength={15}
        value={userinfo.userpanno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    userpanno: i.target.value
  });
}}/>
<br/>
<button className="btn-solid btn-styled theme-success" onClick={saveuserinfo}>save</button>
  </div>
</div>
)}

</>
  )
}
