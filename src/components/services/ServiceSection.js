import React from 'react'
import Testimonial from '../testimonial/Testimonial'
import Services from './Services'

const ServiceSection = () => {
  return (
    <div className='px-10 xl:px-44 py-40 h-screen flex flex-col justify-between'>
        <div>
            <Services />
        </div>
        <div className='mt-20'>
          <h2 className='text-3xl font-bold font-serif text-center gradientText' >Testimonials</h2>
          <h5 className='text-md font-medium font-sans text-center'>What our customer says</h5>
          <Testimonial />
        </div>
    </div>
  )
}

export default ServiceSection;