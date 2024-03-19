import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const submitLoginForm = (e) => {
        e.preventDefault()

        const loginData = {email, password}
    console.log(loginData)
  }

  return (
    <div>
        <Navbar />
        <div className='form-container d-flex justify-content-center align-items-center vh-100 '>
            <form onSubmit={submitLoginForm} action='' className='border border-3 rounded p-5'>
                <h2 className='text-center'>Log in</h2>
                <div className='input-contianer my-4'>
                    <label htmlFor=""> Email: </label>
                    <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='m-2 border 0 rounded p-1'
                    placeholder='Enter your email address' />
                </div>

                <div className='input-contianer my-4'>
                    <label htmlFor=""> Password: </label>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='m-2 border rounded 0 p-1'
                    placeholder='Enter your password' />
                </div>

                <div className="btn-container my-3">
            <button className="btn btn-primary w-100">Log in</button>
          </div>

            </form>
        </div>

    </div>
  )
}

export default Login