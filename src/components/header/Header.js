import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInitiate } from '../../redux/actions/authActions';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const loggedIn = useSelector((state) => state.auth.user);
    const dispatch = useDispatch()
    console.log(loggedIn)
    const handleSignOut = () => {
        dispatch(logoutInitiate())
    }
    return (
        <div className=' h-[6rem] px-10 xl:px-44'
            style={{ background: isTabletOrMobile ? "#005AA7" : "linear-gradient(90deg, #005AA7, rgba(67, 56, 202,0.9808298319327731) 35%, rgba(0,212,255,1) 100%)" }}
        >
            <div className='flex justify-between h-full items-center text-slate-100'>
                <div className='flex items-center'>
                    {
                        isTabletOrMobile && (
                            <div>
                                {toggle ? <IoCloseSharp className='text-3xl cursor-pointer' onClick={() => setToggle(!toggle)} /> : <IoMdMenu className='text-3xl cursor-pointer' onClick={() => setToggle(!toggle)} />}
                            </div>
                        )
                    }
                    <Link to="/"><h2 className='text-3xl ml-6 font-semibold'>LOGO</h2></Link>
                </div>
                <div className='flex flex-col w-screen absolute lg:relative top-[6rem] lg:top-0 left-0 text-center bg-transparent z-50'
                    style={{ display: isTabletOrMobile && !toggle ? "none" : "flex" }}>
                    <ul className='flex flex-col justify-center lg:flex-row text-xl'>
                        <li className=' text-slate-800 lg:text-slate-200'>Services</li>
                        <Link to="/about"><li className='text-slate-800 lg:text-slate-200'>About</li></Link>
                        <li className=' text-slate-800 lg:text-slate-200'>Contact</li>
                    </ul>
                </div>
                {
                    loggedIn ?
                        <button className='whitespace-nowrap px-6 border-none' onClick={() => handleSignOut()}>Sign Out</button> : 
                        <div className='hidden xs:flex whitespace-nowrap'>
                            <Link to="/login">
                                <button className='mr-6 border-none bg-transparent'>Sign In</button>
                            </Link>
                            <Link to="/register">
                                <button>Sign Up</button>
                            </Link>
                        </div>
                }
                
            </div>
        </div>
    )
}

export default Header