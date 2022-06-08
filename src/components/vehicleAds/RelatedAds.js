import React from 'react'
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{ fontSize: "5rem", zIndex: "100", width: "3rem", height: "5rem", color: "rgba(0,212,255,1)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ fontSize: "5rem", zIndex: "100", width: "3rem", height: "5rem", color: "rgba(0,212,255,1)" }}
      onClick={onClick}
     />
  );
}  


const RelatedAds = () => {
    const settings = { 
        infinite: true,
        // edgeFriction: 1,
        swipeToSlide: true,
        // accessbility: true,
        draggable: true,
        speed: 500,
        variableWidth: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow:  <SampleNextArrow/>,
    }
  return (
      <>
          <div className='mt-10 h-80 w-full mb-12'>
              <div>
                  <h2 className='font-semibold font-mono text-2xl'>Related Ads</h2>
              </div>
            <Slider {...settings} className="p-6">
            
            <div className='px-4'>
                <div className='h-[18rem] shadow-3xl'>
                    <img src="/img/carImage.jpeg" alt="Vehicle Ads" className='w-full h-[70%] object-cover' />
                    <div className='p-4'>
                        <h3 className='font-mono font-semibold text-xl'>Product Title</h3>
                        <p className='font-normal text-md font-sans '>Toyota Innova Crysta</p>
                    </div>
                </div>      
            </div>
            <div className='px-4'>
                <div className='h-[18rem] shadow-3xl'>
                    <img src="/img/carImage2.jpeg" alt="Vehicle Ads" className='w-full h-[70%] object-cover' />
                    <div className='p-4'>
                        <h3 className='font-mono font-semibold text-xl'>Product Title</h3>
                        <p className='font-normal text-md font-sans '>Toyota Innova Crysta</p>
                    </div>
                </div>      
            </div>
            <div className='px-4'>
                <div className='h-[18rem] shadow-3xl'>
                    <img src="/img/vehicle.jpg" alt="Vehicle Ads" className='w-full h-[70%] object-cover' />
                    <div className='p-4'>
                        <h3 className='font-mono font-semibold text-xl'>Product Title</h3>
                        <p className='font-normal text-md font-sans '>Toyota Innova Crysta</p>
                    </div>
                </div>      
            </div>
            </Slider>
        </div>
    </>
  )
}

export default RelatedAds