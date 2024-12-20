import SubHeading from '@/subcomponent/SubHeading'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-20'>
         <div className='flex flex-col gap-3 items-center justify-center pb-20'>
            <SubHeading heading={'Our team'} pos={'center'}/>
            <h2 className='text-5xl font-black leading-tight capitalize'>Our motivated team</h2>

         </div>
         <div className='grid grid-cols-3 gap-10 items-center w-full'>
            <div className='team-container cursor-pointer flex flex-col justify-center items-center'>

                <Image
                className='w-[375px] team-img transition-all duration-300'
                src={'/team1.webp'}
                width={300}
                height={300}
                alt='dhiredra Kumar'
                />
                <div className=' team-box transition-all duration-500 w-[80%] bg-white p-4 flex justify-center flex-col items-center hover:border-[1px] hover:border-[#f6f3ee]'>
                    <h2 className='text-2xl font-bold pb-2'>Dhirendra Kumar</h2>
                    <span className='text-lg text-red-500 font-medium pb-4'>Co Founder & CEO</span>
                    <ul className='team-social flex invisible justify-center items-center gap-3'>
                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaLinkedinIn /></Link></li>

                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaFacebookF /></Link></li>
                    </ul>
                </div>
            </div>
            <div className='team-container cursor-pointer flex flex-col justify-center items-center'>

                <Image
                className='w-[375px] team-img transition-all duration-300'
                src={'/team2.webp'}
                width={300}
                height={300}
                alt=' Krishna Basudevan'
                />
                <div className='team-box transition-all duration-500 w-[80%] bg-white p-4 flex justify-center flex-col items-center hover:border-[1px] hover:border-[#f6f3ee]'>
                    <h2 className='text-2xl font-bold pb-2'> Krishna Basudevan </h2>
                    <span className='text-lg text-red-500 font-medium pb-4'> Co-founder & Mentor</span>
                    <ul className='team-social flex invisible justify-center items-center gap-3'>
                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaLinkedinIn /></Link></li>
                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaFacebookF /></Link></li>
                    </ul>
                </div>
            </div>
            <div className='team-container cursor-pointer flex flex-col justify-center items-center'>

                <Image
                className='w-[375px] team-img transition-all duration-300'
                src={'/team6.webp'}
                width={300}
                height={300}
                alt='dhiredra Kumar'
                />
                <div className=' team-box transition-all duration-500 w-[80%] bg-white p-4 flex justify-center flex-col items-center hover:border-[1px] hover:border-[#f6f3ee] '>
                    <h2 className='text-2xl font-bold pb-2'>Arun Mahajan </h2>
                    <span className='text-lg text-red-500 font-medium pb-4'>VP, Projects & Global Delivery</span>
                    <ul className='team-social flex invisible justify-center items-center gap-3'>
                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaLinkedinIn /></Link></li>
                        <li><Link className='bg-[#18455D] h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500' href={'/'}><FaFacebookF /></Link></li>
                    </ul>
                </div>
            </div>

         </div>
      </div>
    </>
  )
}

export default Team
