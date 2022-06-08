import React from 'react';
import members from "./aboutData";
const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1300px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold font-serif'>For Education Purpose</h2>
                <p className='text-2xl py-6 text-gray-500'>Lorem 30 Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture`  any specified custom word i</p>
            </div>
            <h2 className='text-center text-5xl font-serif mt-5 font-bold mb-20'>Members Involved</h2>
            <div className='flex justify-center gap-10 px-2 text-center'>
                {
                    members && members.map((item) => (
                        <div className='border-2 pb-10 px-16 shadow-3xl' >
                            <div className='h-[7rem] w-[7rem] m-auto mb-5 mt-[-3.5rem] box-border rounded-full' 
                                style={{ border: ".1rem solid gray", borderTop: 0, borderRight: "0", borderLeft: "0"}}>
                                <img src={`/img/${item.image}`} alt="About Me profile" className='w-full h-full object-cover rounded-full  opacity-[.8] hover:opacity-100 cursor-pointer border-8 border-white' />
                            </div>
                            <ul>
                                <li className='p-0 text-xl mb-2'>{item.name}</li>
                                <li className='p-0 font-mono text-sm'q>{item.profile}</li>
                                <li className='p-0 font-mono text-sm'>{item.course}</li>
                                <li className='p-0 font-mono text-sm'>{item.sem}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About