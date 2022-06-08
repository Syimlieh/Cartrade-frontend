import React from 'react';
import { AiOutlineCloudUpload, AiOutlineDatabase } from "react-icons/ai"
import { GoDatabase } from "react-icons/go";
import { HiPaperAirplane } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

const Hero = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        <div className='w-full flex lg:justify-between px-10 xl:px-44 border-red-300'
            style={{
                background: `linear-gradient(${isTabletOrMobile ? "to bottom" : "90deg"}, #005AA7, rgba(67, 56, 202,0.9808298319327731) 35%, rgba(0,212,255,1) 100%)`,
                height: "calc(100vh - 6rem)"
            }}>
            <div className='flex my-auto relative'>
                <div className='flex flex-col md:items-start w-full px-2 py-8 text-slate-300'>
                    <p className='text-xl '>Selling Made Easy</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Sell Your Used Car</h1>
                    <p className='text-2xl'>Get Instant Offer</p>
                    <Link to="/cardescription" className="sm:w-[60%] h-[3.1em] my-4"><button className='py-3 px-6 w-full'>Get Started</button></Link>
                </div>
                {
                    !isTabletOrMobile && (
                        <div>
                            <img className='w-full' src='/img/cars.svg' alt='hero image' />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Hero