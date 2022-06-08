import React from 'react'
import {recommen} from "./homeData"
const Recommendations = () => {
  return (
      <div className='mt-24 px-10 xl:px-44 py-40 h-max flex flex-col justify-between'>
          <h2 className='text-3xl font-bold font-serif text-center gradientText'>Recommendations</h2>
          <div className='flex justify-between flex-wrap mt-10'>
            {
                recommen.map((item) => (
                    <div className=' px-4 mt-20 w-[30%]'>
                        <div className='h-[22rem] shadow-3xl'>
                            <img src={item.img} alt="Vehicle Ads" className='w-full h-2/3 object-cover' />
                            <div className=' h-[30%]'>
                                <div className='px-4 mt-3'>
                                    <h3 className='font-mono font-semibold text-xl'>{item.title}</h3>
                                    <p className='font-normal text-md font-sans '>{item.description}</p>
                                </div>
                                <button className='w-full px-4 mt-2'>Read More</button>
                            </div>
                            
                        </div>  
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Recommendations