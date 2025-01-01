import React from 'react'
import { CiMobile3 } from "react-icons/ci";
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

const ContactInfoBox = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto py-20 grid grid-cols-3 items-start'>
        <div className='flex gap-5 contact-box'>
            <div className='contact-box-icon transition-all duration-300 bg-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg text-red-500'> <CiMobile3 className='text-4xl'/></div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black text-cyan-900 text-xl'>Phone Number</h3>
                <div className='flex flex-col gap-1'>
            <Link className='text-gray-600 hover:text-red-500 transition-all duration-300' href={'tel:+91 120 444 5440'}>+91 120 444 5440</Link>
            <Link className='text-gray-600 hover:text-red-500 transition-all duration-300' href={'tel:+1 347-580-8770'}>+1 347-580-8770</Link>
            </div>
        </div>

        </div>
        <div className='flex gap-5 contact-box'>
            <div className='contact-box-icon transition-all duration-300 bg-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg text-red-500'> <FaLocationDot className='text-3xl'/></div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black text-cyan-900 text-xl'>Location</h3>
                <div className='flex flex-col gap-1'>
            <Link className='w-4/5 text-gray-600 hover:text-red-500 transition-all duration-300' href={''}>H-161, Office No: 202, Second Floor, Sector 63, Noida</Link>
            
            </div>
        </div>

        </div>
        <div className='flex gap-5 contact-box'>
            <div className='contact-box-icon transition-all duration-300 bg-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg text-red-500'> <FaRegEnvelope className='text-3xl'/></div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-black text-cyan-900 text-xl'>Email Address</h3>
                <div className='flex flex-col gap-1'>
            <Link className='text-gray-600 hover:text-red-500 transition-all duration-300' href={'mailto:sales@xoniertech.com'}>sales@xoniertech.com</Link>
            
            </div>
        </div>

        </div>
       
    </div>
      
    </>
  )
}

export default ContactInfoBox
