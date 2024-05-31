import React from 'react'
import './setting.css'
import SideBar from '../../sidebar/SideBar'
import pp from './pexels-nathan-cowley-1199590.jpg'

function Setting() {
  return (
    <div className='setting'>
        <div className="settingWrapper">
    <div className="settingTitle">
        <span className="settingUpdateTitle">Update Your Account</span>
        <span className="settingDeleteTitle">Delete Account</span>

    </div>
    <form className="settingForm">
<label>Profile Picture</label>
<div className="settingpp">
    <img src={pp} alt="" />
    <label htmlFor="fileInput">
        <i className='settingPPIcon far fa-user-circle'></i>
    </label>
    <input type="file" id='fileInput' style={{display:"none"}} />
</div>
<label htmlFor="">Username</label>
<input type="text" placeholder='Kavya' />

<label htmlFor="">Email</label>
<input type="email" placeholder='kavya@gmail.com' />

<label htmlFor="">Password</label>
<input type="password"  />
<button className='settingSubmit'>Update</button>

    </form>
        </div>
        <SideBar/>
    </div>
  )
}

export default Setting