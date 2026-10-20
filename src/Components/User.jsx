import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
export default function User(props) {
const {
  username,
  setusername,
  type,
  setType,
  userinfo,
  setuserinfo,
  sethistory,
  setformhistory ,
  notification , setnotification
} = props;


  function changename (){
setType("namechangebox")
  }

function saveusername (){
setTimeout(() => {
  setType("")
}, 600);
}

function saveuserinfo() {
  localStorage.setItem("userinfo", JSON.stringify(userinfo));
  setType("");
  
}

function loaduserinfoform(){
setType("loadinguserinfoform")
}

// to delet all data 
function deletallthedata() {
  // Delete saved data
  localStorage.removeItem("transactions");
  localStorage.removeItem("form");
  localStorage.removeItem("userinfo");

  // Reset React states
  sethistory([]);
  setformhistory([]);

  setuserinfo({
    username: "",
    usermail: "",
    usermobileno: "",
    useraadharno: "",
    useraccountno: "",
    userpanno: ""
  });
}

//for loan history terminator 
const navigate = useNavigate();
function openabountpage (){
      navigate('/About');
}

function canclebtn (){
  setType("")
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
  <div className='save-btn-displayflex'>
  {type === "namechangebox" && (
    <>
    <div className="form-backdrop">
    <div className='username-updatebox'>
      <span className='margin-nameki'>update name <button type="button" className="btn-close cutbuttoncss" onClick={canclebtn}></button> </span>
      <input
      className='inputboxof-name'
       type="text"
        placeholder="Enter Name"
        maxLength={15}
        value={username}
        onChange={(i) => {
          setusername(i.target.value);
        }}
      />
<div className='savebtnofusername' ><button type="button" onClick={()=>{
  if (username.trim().length === 0 ){
    setnotification("Please Enter a Name")
    return;
  }
  saveusername()
  setTimeout(() => {
    setType("")
  }, 100);
  setnotification("User name has been updated successfully .")
      setTimeout(() => {
  setnotification("")
      }, 3000);
}} className='savebuttonnnn'>Save</button></div>
      </div>
      </div>
    </>
  )}
</div>

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
    <label className="form-check-label" htmlFor="fieldSwitch" >
     Dark-Mode
  </label>
<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="fieldSwitch"
    onClick={()=>{
      setnotification("Dark Mode Is Not Available 🚫")
      setTimeout(() => {
  setnotification("")
      }, 3000);
     
    }}
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
        onClick={()=>{
      setnotification("Notifications Are Enable !! ")
      setTimeout(() => {
  setnotification("")
      }, 3000);
     
    }}
  />
  </div>
</div>
</div>
<div className='dangerzonediv'>
  <span>Danger Zone  </span>
<button type="button" className="danger-btn" onClick={()=>{setType("delethsitory")}}>
  <i className="fa-solid fa-trash"></i>
  Clear Data
</button>
</div>

<div>
  <div className="account-section">

  <button className="account-btn" onClick={openabountpage}>
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
  <div className="form-backdrop">
  <div className='useringomation-form-border'>
  <div className='useringomation-form-inputs'>
       <div className="cutbutton">
  <button type="button" className="btn-close" onClick={canclebtn} ></button>
</div>
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
        maxLength={30}
        value={userinfo.usermail}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    usermail: i.target.value
  });
}} />
<br/>
Mobile no = <input type="Number" placeholder="Enter Mobile No"
        maxLength={10}
        value={userinfo.usermobileno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    usermobileno: i.target.value
  });
}} />
<br/>
Aadhar no = <input type="Number" placeholder="Enter Aadhar No"
        maxLength={15}
        value={userinfo.useraadharno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    useraadharno: i.target.value
  });
}}/>
<br/>
Account no = <input type="Number" placeholder="Enter Account NO "
        maxLength={15}
        value={userinfo.useraccountno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    useraccountno: i.target.value
  });
}}/>
<br/>
Pan no = <input type="text" placeholder="Enter Pan No"
        maxLength={15}
        value={userinfo.userpanno}
        onChange={(i) => {
  setuserinfo({
    ...userinfo,
    userpanno: i.target.value
  });
}}/>
<br/>
<div className='savebuttonnnn'><button className="btn-solid btn-styled theme-success" onClick={()=>{
  if (
        userinfo.username.length === 0 ||
        userinfo.usermail.length === 0 ||
        userinfo.usermobileno.length === 0 ||
        userinfo.useraadharno.length === 0 ||
        userinfo.useraccountno.length === 0 ||
        userinfo.userpanno.length === 0 ||
        userinfo.usermobileno.length <=0 ||
        userinfo.useraadharno.length <=0 ||
        userinfo.useraccountno.length <=0
      ) {
        console.log("fill all fields");
        return;
      }
      saveuserinfo()
      setnotification("User Information Has Been Updated.")
      setTimeout(() => {
  setnotification("")
      }, 3000);
}}>save</button></div>
  </div>
</div>
</div>
)}

{type === "delethsitory" && (
  <div className="form-backdrop-histodelet">
  <div className='historyboxx'><h6 className="historyboxx5"> Do You Want To FActory Reset  </h6>
  
<div className='history-buttons '>
    <button type="button" className="btn btn-primary" onClick={canclebtn}>Cancle</button>
  <button type="button" className="btn btn-danger" onClick={()=>{
    deletallthedata () 
    setnotification("All Data Has Been Deleted Permanently .")
      setTimeout(() => {
  setnotification("")
      }, 3000);
  }}>Delet?</button>

</div>
  </div>
  </div>
)}
<div className='notificationpanel-userpage'>{notification}</div>

</>
  )
}
