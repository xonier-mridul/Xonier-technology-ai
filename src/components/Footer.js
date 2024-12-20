"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
  return (
    <>
      <div className='w-full footer bg-[#0C3246]'>
        <div className="max-w-7xl mx-auto py-20 flex flex-col gap-12">
            <div className="flex items-center ">
                <div className="w-[75%]">
                    <h3 className='text-3xl text-white'>We have 7+ years experience.  &nbsp;&nbsp; <span className='w-[70px] h-[1px] bg-red-500 inline-block align-middle '></span><Link href={'mailto:mailto:sales@xoniertech.com'} className='text-red-500 hover:translate-y-[-5px] transition-all duration-500'> &nbsp;&nbsp; sales@xoniertech.com</Link></h3>
                </div>
                <div className="w-[25%] flex justify-end items-end">
                    <Image 
                    src={'/xonier-logo.png'}
                    height={180}
                    width={180}
                    alt='Xonier Logo'
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className='flex flex-col gap-3'>
                <h4 className='uppercase text-white font-semibold -tracking-tight text-[15px]'>development office</h4>
                <p className='text-white opacity-60'>H-161, Office No: 202, Second Floor, H Block, Sector 63, Noida</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h4 className='uppercase text-white font-semibold -tracking-tight text-[15px]'>sales office</h4>
                <p className='text-white opacity-60'>H-187, Office No: 1.2, First Floor, H Block, Sector 63, Noida</p>
                </div>
                <div></div>
                <div className='flex flex-col'>
                    <Link className='text-white font-medium text-2xl border-b-[1px] pb-3 border-[#ffffff70 hover:text-red-500 duration-500 transition-all' href={'mailto:mailto:sales@xoniertech.com'}>sales@xoniertech.com</Link>
                    <Link  className='text-white font-medium text-2xl  pt-2 border-[#ffffff70] hover:text-red-500 duration-500 transition-all' href={'tel:(+1) 347-580-8770'}>(+1) 347-580-8770</Link>
                </div>
            
            </div>
        </div>
        <div className=' max-w-7xl mx-auto flex items-center gap-10 py-5 border-t-[1px] border-[#ffffff80]'>
           <div className='w-[65%] '>
           <ul className='flex items-center justify-between'>
                <li ><Link href={"/"} className={`${pathname === "/" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer "} font-bold uppercase`}>Home</Link></li>
                <li className={`${pathname === "/about" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer"} font-bold uppercase`}>About Us</li>
                <li className={`${pathname === "/services" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer"} text-white font-bold uppercase`}>Services</li>
                <li className={`${pathname === "/project" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer"} text-white font-bold uppercase`}>Projects</li>
                <li className={`${pathname === "/blog" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer"} text-white font-bold uppercase`}>Blogs</li>
                <li className={`${pathname === "/contact" ? "text-red-500" : "text-white hover:text-red-500 transition-all duration-300 cursor-pointer"} text-white font-bold uppercase`}>Contact</li>
            </ul>
           </div>
           <div className='w-[35%] flex items-center justify-end'>
            <p className='text-white'>Copyright &copy; 2025 &nbsp; | &nbsp; All Rights Reserved</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Footer
