import React from 'react';
import { Link } from "react-router-dom";

const CarOffer = () => {
    return (
        <div className='m-auto sm:w-full xl:w-2/3 2xl:w-3/5 transition-all duration-500 ease-out mt-32 max-h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
            <h2 className='text-center font-sans text-3xl'>Our Offer</h2>
            <h5 className='text-center font-sans text-2xl mt-10'>Your Car Price Is between <span className='italic'>$250 to $270</span> depending on the condition</h5>
            <div className='mt-10'>
                <p className='text-lg text-exo font-normal'>Accept the offer now and we will arrange all the document for you. We will come and pick it up and payment will be done on the spot.</p>
            </div>
            <div className='w-full flex justify-center'>
                <Link to="/message">
                    <button className='mt-10 m-auto'>
                        Accept the offer
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CarOffer