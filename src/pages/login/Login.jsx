import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <form className="loginForm">
            <span className="loginTitle">LOGIN</span>
            <label>Email</label>
            <input className='loginInput' type="email" placeholder='Email' />
            <label>Password</label>
            <input className='loginInput' type="password" placeholder='Password' />
            <button className='loginButton'>Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login