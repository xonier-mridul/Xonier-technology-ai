"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { IoMdHome } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";


const PageBanner = ({title,img}) => {

    const router = useRouter()
  return (
    <>
      <div className={`page-banner bg-${img} w-full py-40 pt-48 relative`}>
        <div className="page-banner-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start justify-center gap-6 ">

            <h1 className='text-6xl text-white font-bold capitalize'>{title}</h1>
            <ul className=' px-5 py-2  flex items-center gap-4'>
                <li className='text-white flex items-center gap-2 text-lg font-medium hover:text-red-500 transition-all duration-300 cursor-pointer' onClick={()=>router.push('/')} > <IoMdHome className='text-xl '/> Home </li> 

                <li><FaCircle className='text-[10px] text-red-500'/></li>

                <li className='text-white flex items-center gap-2 text-lg font-medium capitalize'> {title} </li>
                
            </ul>
            
        </div>
      </div>
    </>
  )
}

export default PageBanner
