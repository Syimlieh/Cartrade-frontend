import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    return (
        <div className='m-auto sm:w-full xl:w-2/3 2xl:w-3/5 transition-all duration-500 ease-out mt-32 max-h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
            <h2 className='text-center font-sans text-3xl'>Thank You For Using our services</h2>
            <div className='mt-10'>
                <p className='text-lg text-exo font-normal'>We Will Contact You within 24 hours working days and we'll set up a date and time for picking up your Car.</p>
            </div>
            <div className='w-full flex justify-center'>
                <Link to="/">
                    <button className='mt-10 m-auto'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ThankYouPage