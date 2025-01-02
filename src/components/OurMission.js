import SubHeading from '@/subcomponent/SubHeading'
import React from 'react'
import { PiPathFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import Image from 'next/image';

const OurMission = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-20 flex items-center gap-10'>
        <div className="w-1/2 flex flex-col gap-4">
          <SubHeading heading={'About Us'} pos={'start'}/>
          <h2 className='text-5xl font-black leading-tight'> We’re Delivering The Best Customer Experience </h2>
          <p className='text-[#42545e] font-medium leading-relaxed pb-3'>Xonier Technologies is a digital engineering services provider to emerging businesses that are seeking to transform operations, leveraging Open Source software, Mobile devices, and the public/private cloud.</p>
          <div className='flex items-start gap-5 p-5 hover:shadow-[0_0_25px_#00000025] transition-all duration-300'>
            <span className='h-14 min-w-14 text-white rounded-full bg-red-500 flex items-center justify-center '><PiPathFill className='text-2xl' /></span>
            <div className=''>
                <h3 className='text-xl font-black pb-2'>Our Mission</h3>
                <p className='text-[#42545e] w-3/4 font-medium'> Our Mission is to be the industry’s top-ratede provider issuer enterprise targeting satisfying the most to our clients.</p>
            </div>

          </div>
          <div className='flex items-start gap-5 p-5 hover:shadow-[0_0_25px_#00000025] transition-all duration-300'>
            <span className='h-14 min-w-14 text-white rounded-full bg-red-500 flex items-center justify-center '><FaEye className='text-2xl' /></span>
            <div className=''>
                <h3 className='text-xl font-black pb-2'>Our Vision</h3>
                <p className='text-[#42545e] w-3/4 font-medium'> Our Vision is to be a top Software Development company in the IT sector and progress in our current position in the market.</p>
            </div>

          </div>
        </div>
        <div className="w-1/2 relative h-full">
           <Image
           className='pb-16'
           src={'/About-img-one.jpeg'}
           width={480}
           height={480}
           quality={100}
           alt='img'
           />
           <Image
           className='absolute bottom-0 right-0'
           src={'/About-img-two.jpeg'}
           width={380}
           height={380}
           quality={100}
           alt='img'
           />
        </div>
      </div>
    </>
  )
}

export default OurMission
