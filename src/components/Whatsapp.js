import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Whatsapp = () => {
  return (
   
      <Link href={'https://wa.me/918700914459'} className=' fixed bottom-7 right-[-17%] z-20 flex items-center p-3 pr-6 rounded-l-full bg-[#EF4444] text-white gap-2 cursor-pointer hover:right-0 hover:pl-5 transition-all duration-500'>
      <FaWhatsapp className='text-3xl' />
      <h1 className='text-lg font-medium text-white'>Contact with Whatsapp</h1>
      </Link>
    
  )
}

export default Whatsapp
