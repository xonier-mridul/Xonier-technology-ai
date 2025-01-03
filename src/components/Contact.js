
import React from 'react'
import Link from 'next/link'
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    


  return (
    <>
      <div className='w-full py-20 contact-bg relative overflow-hidden'>
      <video className='w-full absolute top-0 left-0' width="320" height="320" autoPlay loop controls >
      <source className='w-full h-[500px] inline-block'  src="/brain-ai.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
        <div className="max-w-7xl mx-auto flex items-center h-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 relative z-10  ">
            <div className='p-14 bg-[#ffffffcf] ' data-aos="fade-left" data-aos-duration="1000">
               <h2 className='text-4xl font-black pb-3 opacity-100'>Contact Us</h2>
               <p className='text-lg font-medium text-[#18455D] pb-6 opacity-100'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, atque!</p>
               <ul className='flex flex-col gap-4 pb-6'>
                <li><Link className='flex items-center text-[#18455D] text-lg font-medium hover:translate-x-4 hover:text-red-500 transition-all duration-500 gap-3 opacity-100' href={'mailto:sales@xoniertech.com'}><FaRegEnvelope className='text-red-500 font-lg'/>sales@xoniertech.com</Link></li>
                <li><Link className='flex items-center text-[#18455D] text-lg font-medium hover:translate-x-4 hover:text-red-500 transition-all duration-500 gap-3 opacity-100' href={'tel:+911204445440'}><FaPhoneAlt className='text-red-500 font-lg'/>+91 120 444 5440</Link></li>
                <li><Link className='flex items-center text-[#18455D] text-lg font-medium hover:translate-x-4 hover:text-red-500 transition-all duration-500 gap-3 opacity-100' href={'https://maps.app.goo.gl/hpo7pxZCzGz3cPY17'}><FaLocationDot className='text-red-500 font-lg'/>H-161, Office No: 202, Second Floor, Sector 63, Noida</Link></li>
               </ul>
               <ul className='flex gap-4 border-t-[1px] border-[#18455d99] pt-5'>
                    <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center hover:translate-y-[-8px] transition-all duration-500 hover:bg-red-500' href={'/'}><FaLinkedinIn className='text-white text-lg'/></Link></li>
                    <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center hover:translate-y-[-8px] transition-all duration-500 hover:bg-red-500' href={'/'}><FaFacebookF className='text-white text-lg'/></Link></li>
                    <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center hover:translate-y-[-8px] transition-all duration-500 hover:bg-red-500' href={'/'}><FaInstagram className='text-white text-lg'/></Link></li>
                </ul>
            </div>
            
            </div>

        </div>

      </div>
    </>
  )
}

export default Contact
