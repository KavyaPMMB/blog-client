import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <form className="registerForm">
            <span className="registerTitle">Register</span>
            <label>Username</label>
            <input className='registerInput' type="text" placeholder='Username' />
            <label>Email</label>
            <input className='registerInput' type="email" placeholder='Email' />
            <label>Password</label>
            <input className='registerInput' type="password" placeholder='Password' />
            <button className='registerButton'>Register</button>
        </form>
        <button className="registerRegisterButton">Login</button>
    </div>
  )
}

export default Register