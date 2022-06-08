import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./carConditions.css";
const CarCondition = () => {

  const [interior, setInterior] = useState('');
  const circle = {
    display: "inline-block",
    height: "1.4rem",
    width: "1.4rem",
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: ``,
    border: "1px solid #35424a",
    position: "absolute",
    left: "-2rem",
    top: ".3rem"
  }
  const listContainer = {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    cursor: "pointer",
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    setInterior(value)
    console.log(interior)
  }


  return (
    <div className='m-auto sm:w-full xl:w-2/3 2xl:w-3/5 transition-all duration-500 ease-out mt-32 max-h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
      <h3 className='text-3xl text-center mb-5'>Car Condition</h3>
      <div className="mt-6 relative px-8">
        <h3 className='mb-5 font-sans text-2xl'>Any interior damaged?</h3>
        <div style={listContainer}>
          <div className='bg-[#E2E2FF] rounded p-4 pl-12 relative w-[45%]'>
            <label htmlFor="damagedinterior"
              className="font-sans capitalize text-xl fontW-[600] relative text-slate-700 block conditionLabel">Some part are damaged
              <input id="damagedinterior" className='hidden' type="radio" name="interior damaged" value="damaged"
                onChange={(e) => handleInputChange(e)}
              />
              <span className="active:shadow-4xl" style={circle}></span>
            </label>
          </div>
          <div className='bg-[#bfe7f3] rounded p-4 pl-12 relative w-[45%]'>
            <label htmlFor="undamagedinterior"
              className='font-sans capitalize text-xl  relative text-slate-700 block conditionLabel'>All parts are intact
              <input id="undamagedinterior" className='hidden' type="radio" name="interior damaged" value="notDamage"
                onChange={(e) => handleInputChange(e)} />
              <span className="active:shadow-4xl" style={circle}></span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6 relative px-8">
        <h3 className='mb-5 font-sans text-2xl'>Does it still start and drive?</h3>
        <div style={listContainer}>
          <div className='bg-[#D9E6FF] rounded p-4 pl-12 relative w-[45%]'>
            <label htmlFor="notStart"
              className="font-sans capitalize text-xl fontW-[600] relative text-slate-700 block conditionLabel">It does not start
              <input id="notStart" type="radio" className='hidden' name="interior damaged" value="notStart"
                onChange={(e) => handleInputChange(e)}
              />
              <span className="active:shadow-4xl" style={circle}></span>
            </label>
          </div>
          <div className='bg-[#E2E4EB] rounded p-4 pl-12 relative w-[45%]'>
            <label htmlFor="start"
              className='font-sans capitalize text-xl  relative text-slate-700 block conditionLabel'>It does start and drive
              <input id="start" type="radio" className='hidden' name="interior damaged" value="start"
                onChange={(e) => handleInputChange(e)} />
              <span className="active:shadow-4xl" style={circle}></span>
            </label>
          </div>

        </div>
        <Link to="/caroffer">
          <button className='mt-8 px-8 text-lg'>Submit</button>
        </Link>
      </div>

    </div>
  )
}

export default CarCondition