import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import {BiArrowBack} from "react-icons/bi";
import Card from './Card';
import {Link} from "react-router-dom"

const CarDescription = () => {  
  const selector = useSelector(state => state.carInfo);
  const [selectedOption, setSelectedOption] = useState("");
  const [changeData, setChangeData] = useState("year");
  
  let prevYear = [new Date().getFullYear()];
  for (let i = 1; i < 33; i++) {
    selector.registerYear.push(new Date().getFullYear() - i)
  }
  console.log(selectedOption);
  console.log(changeData);


  const handleChange = (e, data) => {
    setSelectedOption(e.target.value);
    console.log(data);
    setChangeData(data)
  }
  
  useEffect(() => {
  })
  return (
      <div className=' m-auto w-[40%] mt-32 h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
          <BiArrowBack className='absolute my-3 text-xl cursor-pointer' />
          <h3 className='text-3xl text-center mb-5'>Car Description</h3>
                {
                  changeData === "year" ? 
                  <>                 
                    <p className='font-slabo mb-3'>Registration Year</p>
                    <select value={selectedOption}  onChange={(e) => handleChange(e, "brand")}
                        className=" overflow-y-scroll px-4 py-2 rounded-t-md w-[100%] text-sm font-serif cursor-pointer shadow-3xl border border-slate-400">
                        {
                          selector.registerYear && selector.registerYear.map((item, index) => (
                            <option className='py-4 px-8 bg-slate-50 w-[50%] rounded-b-md shadow-3xl h-[10rem]' key={index}>{item}</option>
                          ))
                        }
                    </select>
                  </> : changeData === "brand" ? 
                  <>
                  <p className='font-slabo mb-3'>Car Brand</p>
                    <select value={selectedOption} onChange={(e) => handleChange(e, "model")}
                        className=" overflow-y-scroll px-4 py-2 rounded-t-md w-[100%] text-sm font-serif cursor-pointer shadow-3xl border border-slate-400">
                      {
                        selector.carBrand && selector.carBrand.map((item, index) => (
                          <option className='py-4 px-8 bg-slate-50 w-[50%] rounded-b-md shadow-3xl h-[10rem]' key={index}>{item}</option>
                        ))
                      }
                    </select>
                  </> : changeData === "model" ? 
                  <>
                    <p className='font-slabo mb-3'>Car Model</p>
                    <select value={selectedOption} onChange={(e) => handleChange(e, "variant")}
                        className=" overflow-y-scroll px-4 py-2 rounded-t-md w-[100%] text-sm font-serif cursor-pointer shadow-3xl border border-slate-400">
                      {
                        selector.carModel && selector.carModel.map((item, index) => (
                          <option className='py-4 px-8 bg-slate-50 w-[50%] rounded-b-md shadow-3xl h-[10rem]' key={index}>{item}</option>
                        ))
                      }
                    </select> 
                  </> : changeData === "variant" ? 
                  <>
                  <p className='font-slabo mb-3'>Car Variant</p>
                  <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
                      className=" overflow-y-scroll px-4 py-2 rounded-t-md w-[100%] text-sm font-serif cursor-pointer shadow-3xl border border-slate-400">
                    {
                      selector.carVariant && selector.carVariant.map((item, index) => (
                        <option className='py-4 px-8 bg-slate-50 w-[50%] rounded-b-md shadow-3xl h-[10rem]' key={index}>{item}</option>
                      ))
                    }
                  </select>
                  <Link to="/cardetail">
                      <button className='mt-10 hover:text-[#334155] text-lg'
                  // onClick={() => }
                        >Next <BiArrowBack className='inline-block ml-2 text-xl cursor-pointer rotate-180' />
                      </button>
                  </Link>
                  </> : null
                }
                
                
              
          
        </div>
  )
}

export default CarDescription