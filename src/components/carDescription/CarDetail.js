import React, { useState } from 'react';
import {BiArrowBack} from "react-icons/bi";
import { Link } from 'react-router-dom';
import Card from './Card';

const CarDetail = () => {
    const [kmsDriven, setKmsDriven] = useState('');
    const [changeActive, setChangeActive] = useState('');
    const [ownershipType, setOwnershipType] = useState('');
    const buttonStyle = {
        borderRadius: "1rem",
        padding: ".4rem 1.5rem",
        cursor: "pointer",
        margin: "2rem 2rem .5rem 0",
        // color: "#334155",
        fontSize: ".98Srem",
        fontFamily: "font-serif",
        backgroundColor: "transparent"
        
    }
    const buttonStyleActive = {
        borderRadius: "1rem",
        padding: ".4rem 1.5rem",
        cursor: "pointer",
        margin: "2rem 2rem .5rem 0",
        fontSize: ".98Srem",
        color: "#fef",
        fontFamily: "font-serif"
    }
    const handleActive = (type) => {
        setChangeActive(type);
        console.log(changeActive)
    }
  return (
    <div className='m-auto w-[40%] mt-32 max-h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
        <Link to="/carDescription">
          <BiArrowBack className='absolute top-6 left-6 text-xl cursor-pointer' />
        </Link>
        <label className=" inline-block mt-4 w-full">
            <p className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-600 font-exo font-medium text-lg">Kilometer Driven</p>
            <input type="text" onChange={(e) => setKmsDriven(e.target.value)} placeholder="KMS Driven" 
                className='p-6 py-3 font-serif shadow-3xl w-full rounded-md mb-10 mt-3 text-sm'
        /></label>
        <h5 className='text-lg text-slate-600 font-exo font-medium'>Number of Owner</h5>
        <div className='flex flex-wrap'>
          
            <button style={changeActive == "one" ? buttonStyleActive : buttonStyle}
                className={` active:bg-blue-600 
                text-[#334155]
                `}
                onClick={() => handleActive("one")}>1<sup>st</sup> Owner
            </button>
      
            <button style={changeActive == "two" ? buttonStyleActive : buttonStyle}
                className={`  text-[#334155] active:bg-blue-600`} onClick={() => handleActive("two")} >2<sup>nd</sup> Owner
            </button>
      
            <button style={changeActive == "three" ? buttonStyleActive : buttonStyle}
                className={`text-[#334155]  active:bg-blue-600 `} onClick={() => handleActive("three")} >3<sup>rd</sup> Owner
            </button>
      
            <button style={changeActive == "four" ? buttonStyleActive : buttonStyle}
              className={` text-[#334155]  active:bg-blue-600 `} onClick={() => handleActive("four")} >4<sup>th</sup> Owner
            </button>
      
            <button style={changeActive == "five" ? buttonStyleActive : buttonStyle}
                className={` text-[#334155]  active:bg-blue-600 `} onClick={() => handleActive("five")} >5<sup>th</sup> Owner
            </button>
      
            <button style={changeActive == "six" ? buttonStyleActive : buttonStyle}
                className={` text-[#334155] active:bg-blue-600`} onClick={() => handleActive("six")} >6<sup>th</sup> Owner
            </button>
        </div>
        <h5 className='mt-10 text-lg text-slate-600 font-exo font-medium'>Ownership type</h5>
        <div className='flex flex-wrap'>
          
                  <button style={ownershipType == "loan" ? buttonStyleActive : buttonStyle} className=" text-[#334155]"
                    onClick={() => setOwnershipType("loan")} 
                  >Loan</button>
                  <button style={ownershipType == "lease" ? buttonStyleActive : buttonStyle} className=" text-[#334155]"
                    onClick={() => setOwnershipType("lease")} 
                  >On Lease</button>
                  <button style={ownershipType == "owned" ? buttonStyleActive : buttonStyle} className=" text-[#334155] "
                    onClick={() => setOwnershipType("owned")} 
                  >Owned</button>
        </div>
        <Link to="/caroffer">
            <button className='mt-10 hover:text-[#334155] text-lg'
        // onClick={() => }
              >Next <BiArrowBack className='inline-block ml-2 text-xl cursor-pointer rotate-180' />
            </button>
        </Link>
        
      </div>
  )
}

export default CarDetail;