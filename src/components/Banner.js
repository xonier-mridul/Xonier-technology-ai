import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div className='pt-52 pb-60 home-banner relative w-full'>
        <div className="overlay absolute w-full h-full top-0 left-0 z-0 "></div>
        <Image src={'/line.png'} width={240} height={240 } alt='line' className="line absolute  right-0 top-44 r z-10 "/>
        <Image
        className='absolute left-right z-10 right-10 top-14'
        src={'/shape10.png'}
        width={112}
        height={112}
        alt='shape'
        quality={100}
        />
        <div className="max-w-7xl mx-auto  flex flex-col justify-center items-center relative opacity-100 z-10">
            <div className='text-red-500 tracking-[2px] uppercase text-[15px] text-lg font-bold pb-4' data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Welcome to <span className='bg-largeLine relative inline-block pl-1 pr-1'> Xonier Technologies </span></div>
            <h1 className='text-[88px] font-bold text-white text-center w-[80%] leading-none pb-12 capitalize opacity-100 ' data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">Execute your next big <span className='bg-line relative inline-block' >Business Idea</span></h1> 
            <Link  className='uppercase text-white bg-red-500 py-[14px] px-10  font-medium flex items-center gap-3 tracking-[1px]' href={'/'} data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">Get Started <FaArrowRightLong className='text-lg'/></Link>

        </div>

      </div>
    </>
  )
}

export default Banner
