import React from 'react'
import serData from './servicesData'
const Services = () => {
  return (
      <div className='flex justify-between flex-wrap mt-10'>
        {
            serData.map((item) => (
                <div className='w-[30%] shadow-3xl p-6'>
                  <div className='w-[4rem] h-[4rem] m-auto mb-3'>
                    <img src={`/img/${item.icon}`} className="w-full h-full" />
                  </div>
                  <h4 className='text-3xl leading-10 font-slabo'>{item.title}</h4>
                  <p className='leading-7 tracking-wider font-exo text-[.9rem]'>{item.description}</p>
                  <div className='mt-6'>
                    <button className='hover:text-indigo-600 w-full font-semibold'>Know more</button>
                  </div>
                </div>
            ))
        }
        </div>
  )
}

export default Services;