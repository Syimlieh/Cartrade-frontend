import React from 'react'

const Product = () => {
  return (
      <div className='w-full flex lg:justify-between px-10 xl:px-44 border-red-300'>
          <div className='w-full'>
              <div className='w-2/3'>
                  <img src="/img/vehicle.png" alt="Vehicle Ads" className='w-full' />
                </div>
                <div className='w-1/3'></div>
          </div>
    </div>
  )
}

export default Product;