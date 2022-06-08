import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerInitiate } from '../../../redux/actions/authActions';
import {Link, useNavigate} from "react-router-dom"
const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(name, userName, email, password));
    router("/login")
  }
  
  return (
      <div className=' w-screen h-max  flex justify-center items-center'>
      <div className='w-3/5 h-max pt-10 mt-20 shadow-xl bg-slate-100'>
        <div>
          <h3 className='text-center font-serif font-bold text-4xl text-indigo-800 '>CarTrade</h3>
        </div>
        <div className='w-4/5 m-auto p-14'>
          <form onSubmit={handleSubmit}>
            <div className='py-10 flex flex-col'>
              <label htmlFor='email' className='text-2xl text-black mb-3'>Name:</label>
              <input type="text" onChange={e => setName(e.target.value)} name='name' className='p-2 rounded-md' value={name} id="name" />
            </div>
            <div className='py-10 flex flex-col'>
              <label htmlFor='email' className='text-2xl text-black mb-3'>Username:</label>
              <input type="text" onChange={e => setUserName(e.target.value)} name='userName' className='p-2 rounded-md' value={userName} id="email" />
            </div>
            <div className='py-10 flex flex-col'>
              <label htmlFor='email' className='text-2xl text-black mb-3'>Email:</label>
              <input type="email" onChange={e => setEmail(e.target.value)} name='email' className='p-2 rounded-md' value={email} id="email" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='password' className='text-2xl text-black mb-3'>Password:</label>
              <input type="password" className='p-2 rounded-md' onChange={e => setPassword(e.target.value)} value={password} id="password" />
            </div>
            <button className='mt-14 text-xl py-2 w-full '>Register</button>
            <div className='flex justify-between mt-6'>
              <Link to="/login">
                <p className='text-xl text-black cursor-pointer'>Login</p>
              </Link>
              <p className='text-xl text-black cursor-pointer'>Forgot Your Password</p>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Register