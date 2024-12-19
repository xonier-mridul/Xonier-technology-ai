"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname()
  
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
 
  
  
  document.addEventListener('scroll',()=>{

    const scroll = window.scrollY
    console.log(scroll)
    if(scroll !== 0){
      setIsScrolled(true)
    }
    else{
      setIsScrolled(false)
    }
  })
}, [])
  
  


  return (
    <>
    <div className={`${isScrolled? "bg-white shadow-[0_5px_14px_#00000016]": "bg-transparent"} fixed w-full top-0 left-0 py-5 z-20 border-b-[1px] border-[#ffffff1a]`}>
       <div className="max-w-7xl mx-auto  flex items-center ">
       <div className="w-[20%]">
        
        {isScrolled ?<Image
        src={"/xonier-main-logo.png"}
        width={180}
        height={180}
        alt="xonier-logo"
        /> :<Image
        src={"/xonier-logo.png"}
        width={180}
        height={180}
        alt="xonier-logo"
        />}
       </div>
       <div className="w-[55%]">
         <nav>
            <ul className='flex items-center justify-between'>
                <li ><Link href={"/"} className={`${pathname === "/" ? "text-red-500" : "text-white"} font-bold uppercase`}>Home</Link></li>
                <li className={`${isScrolled? "text-[#18455D]" :"text-white"} font-bold uppercase`}>About Us</li>
                <li className={`${isScrolled? "text-[#18455D]" :"text-white"} font-bold uppercase`}>Services</li>
                <li className={`${isScrolled? "text-[#18455D]" :"text-white"} font-bold uppercase`}>Projects</li>
                <li className={`${isScrolled? "text-[#18455D]" :"text-white"} font-bold uppercase`}>Blogs</li>
                <li className={`${isScrolled? "text-[#18455D]" :"text-white"} font-bold uppercase`}>Contact</li>
            </ul>
         </nav>

       </div>
       <div className="w-[25%] flex justify-end items-center">

        <Link  className='uppercase text-white bg-red-500 py-3 px-8  font-medium flex items-center gap-3 tracking-[1px]' href={'/'}>Free Quote <FaArrowRightLong className='text-lg'/></Link>
       </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
