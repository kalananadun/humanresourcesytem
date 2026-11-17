import "./loginpagestyle.css"
import React from 'react'

const LoginPage = () => {
  return (
    <div className="full-page">
        <div className="w-full max-w-xs m-auto form-container">
            <h1 className="text-2xl mb-4 underline">Login</h1>
            <form className="form-container">
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>

            </form>
        </div>
    </div>

  )
}

export default LoginPage