import React from 'react'

const ProgressBar = ({progress, bgColor}) => {
  return (
    <div className={`h-8 ${width} ${bgColor} rounded-sm`}>
        <div className={`h-full w-[${progress}%] ${bgColor}`}>
            <span className='p-3 bold'>{`${progress}%`}</span>
        </div>
    </div>
  )
}

export default ProgressBar