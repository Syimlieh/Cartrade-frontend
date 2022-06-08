import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginInitiate, logoutInitiate } from '../../../redux/actions/authActions';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const router = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password, router));
  }

  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className='w-3/5 h-max pt-10 shadow-xl bg-slate-100'>
          <div>
            <h3 className='text-center font-serif font-bold text-4xl text-indigo-800'>CarTrade</h3>
          </div>
          <div className='w-4/5 m-auto p-14'>
            <form>
              <div className='py-10 flex flex-col'>
                <label htmlFor='email' className='text-2xl text-black mb-3'>Email:</label>
                <input type="email" className='p-2 rounded-md' id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-2xl text-black mb-3'>Password:</label>
                <input type="password" className='p-2 rounded-md' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className='mt-14 text-xl py-2 w-full text-black' type='submit' onClick={(e) => handleSubmit(e)}>Login</button>
            <div className='flex justify-between mt-6'>
              <Link to="/register">
                <p className='text-xl text-black cursor-pointer'>Register</p>
              </Link>
                <p className='text-xl text-black cursor-pointer'>Forgot Your Password</p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login