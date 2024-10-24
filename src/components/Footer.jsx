import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---- Left Section ---- */}
            <div className=''>
                <img className='mb-5 w-40' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                Prescripto is an online doctor appointment booking platform where patients can easily schedule and manage appointments, while doctors efficiently handle bookings. It features a simple interface and secure payments.
                </p>
            </div>

            {/* ---- Center Section ---- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ---- Right Section ---- */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-234-567-890</li>
                    <li>deepak.21bcon569@jecrcu.edu.in</li>
                </ul>
            </div>
        </div>

        {/* ---- Copyright Text ---- */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
