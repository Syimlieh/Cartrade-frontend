import React from 'react'
import { ImLocation } from "react-icons/im";
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import RelatedAds from './RelatedAds';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{ fontSize: "10rem", zIndex: "100", width: "4rem", height: "10rem", color: "rgba(0,212,255,1)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ fontSize: "10rem", zIndex: "100", width: "4rem", height: "10rem", color: "rgba(0,212,255,1)" }}
      onClick={onClick}
     />
  );
}  
const Products = () => {
  const settings = { 
    infinite: true,
    // edgeFriction: 1,
    swipeToSlide: true,
    // accessbility: true,
    draggable: true,
    speed: 500,
    // variableWidth: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow:  <SampleNextArrow/>,
}
  return (
      <div className='w-full flex lg:justify-between px-10 xl:px-[12rem] border-red-300 pt-16'>
      <div className='w-full'>
        <div>
          <h2 className='text-[2.5rem] font-sans font-semibold'>Maruti 800</h2>
          <span className='flex items-center font-sans text-xs -mt-2'>
            <ImLocation className='text-lg' />
            <p className='ml-2 font-semibold font-exo text-slate-700'>Near Ludhiana</p>
          </span>
        </div>
        <div className='mt-10'>
          <Slider {...settings} >
            <div className=' px-20 h-[30rem] m-auto '>
                <img src="/img/vehicle.jpg" alt="Vehicle Ads" className='w-full h-full object-cover' />
            </div>
            <div className=' px-20 h-[30rem] m-auto '>
                <img src="/img/carImage.jpeg" alt="Vehicle Ads" className='w-full h-full object-cover' />
            </div>
            <div className=' px-20 h-[30rem] m-auto '>
                <img src="/img/carImage2.jpeg" alt="Vehicle Ads" className='w-full h-full object-cover' />
            </div>
          </Slider>
        </div>
        <h2 className='text-[2.5rem] font-sans font-semibold text-center mt-10'>$1,00,000</h2>
        <div className='h-[1px] w-4/6 mt-6 border border-slate-1 m-auto' />
        <div className='mt-10 flex justify-between mb-12 w-full'>
          <div className='w-[58%] flex flex-col'>
            <div className='shadow-3xl p-8'>
              <p className='font-semibold break-words'>Maruti Suzuki 800, Reason for selling, little bit about the condition</p>
              <div className='mt-6'>
                <h4 className='font-semibold font-mono text-2xl'>Details</h4>
                <div>
                  <div className='description flex items-center  justify-start mt-8'>
                      <h4 className='font-sans text-lg font-semibold w-[30%]'>Brand</h4>
                      <p className=' ml-2 font-normal text-md font-sans mt-1 w-[70%]'>Maruti Suzuki 800</p>
                  </div>
                  <div className='description items-center flex justify-start mt-4'>
                      <h4 className='font-sans text-lg font-semibold w-[30%]'>Year</h4>
                      <p className=' ml-2 font-normal text-md font-sans mt-1 w-[70%]'>2016</p>
                  </div>
                  <div className='description items-center flex justify-start mt-4'>
                      <h4 className='font-sans text-lg font-semibold w-[30%]'>Fuel Type</h4>
                      <p className=' ml-2 font-normal text-md font-sans mt-1 w-[70%]'>Diesel</p>
                  </div>
                  <div className='description items-center flex justify-start mt-4'>
                      <h4 className='font-sans text-lg font-semibold w-[30%]'>Kms Driven</h4>
                      <p className=' ml-2 font-normal text-md font-sans mt-1 w-[70%]'>8000</p>
                  </div>
                  <div className='description items-center flex justify-start mt-4'>
                      <h4 className='font-sans text-lg font-semibold w-[30%]'>No of Owner</h4>
                      <p className=' ml-2 font-normal text-md font-sans mt-1 w-[70%]'>2nd Owner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8 shadow-3xl px-8 w-full h-max'>
              <RelatedAds />
            </div>
          </div>
          <div className='shadow-3xl p-8 w-[38%] h-max'>
            <h3 className='font-sans text-2xl font-semibold'>Username</h3>
            <span className='flex items-center font-sans text-xs mt-4'>
              <ImLocation className='text-[3rem]' />
              <div className=''>
                <p className='ml-2 text-[.9rem] font-semibold font-exo text-slate-700'>
                  3rd Mile Upper Shillong
                </p>
                <p className='ml-2 font-semibold font-mono text-slate-400 '>Near Khana</p>
              </div>
            </span> 
            <button className='mt-6 w-full' style={{backgroundColor: "linear-gradient(90deg, #005AA7, rgba(67, 56, 202,0.9808298319327731) 35%, rgba(0,212,255,1) 100%)"}}>Chat With Seller</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products