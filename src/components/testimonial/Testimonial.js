import React from 'react'
import TestimonialData from "./testimonialData";
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        className={className}
        style={{ fontSize: "2rem", width: "2rem", height: "2rem", color: "green" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className={className}
        style={{ fontSize: "2rem", width: "2rem", height: "2rem", color: "green" }}
        onClick={onClick}
       />
          
    );
  }  

const Testimonial = () => {
    const settings = { 
        infinite: true,
        edgeFriction: 1,
        swipeToSlide: true,
        // variableWidth: true,
        // accessbility: true,
        draggable: true,
        speed: 500,
        nextArrow:  <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
  return (
    <div className='h-[13rem] flex items-center shadow-3xl mt-12'>
        
        <div className='overflow-hidden px-16 '>
        <Slider {...settings} >
        {
            TestimonialData.map((item, index) => (
                <div>
                    <div className='flex p-6 max-w-[90%]' >
                        <img src={`/img/${item.image}`} alt={item.title}           
                            className="rounded-[50%] mr-5 object-cover w-[5rem] h-[5rem] shadow-lg" />
                        <span className='mb-6 whitespace-nowrap'>
                            <h5 className='font-serif text-2xl'>{item.name}</h5>
                            <p className='break-words whitespace-normal'>{item.description}</p>
                        </span>
                    </div>
                </div>
            ))
        }
        </Slider>
        </div>
    </div>
  )
}

export default Testimonial;