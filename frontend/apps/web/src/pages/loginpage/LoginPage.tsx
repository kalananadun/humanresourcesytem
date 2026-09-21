import './styles.css'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="login-page">
        <div className="login-container">
            <div className="left-login">

            </div>
            <div className="right-login">
                <form className="login-form">
                    <input type="text" placeholder="email/phone number" />
                    <input type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage