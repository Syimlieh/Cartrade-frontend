import React, { useState } from 'react'
import {IoMdMenu} from "react-icons/io";
import {IoCloseSharp} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleShow = () => {
    setNav(!nav);
  }
  return (
    <div className='w-screen h-[80px] z-1000 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center w-100'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
          
        </div>
        <div className='hidden md:flex justify-self-end pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleShow}>
          {
            nav ? <IoCloseSharp className='text-3xl'/> : <IoMdMenu className='text-3xl' />
          }
          
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute left-0 right-0 bg-zinc-200 w-100 px-8"}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col my-4'>
          <NavLink to="/login">
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          </NavLink>
          <Link to="/register">
            <button className='px-8 py-3'>Sign Up</button>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Header