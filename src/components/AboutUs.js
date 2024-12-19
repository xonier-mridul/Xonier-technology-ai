"use client"
import SubHeading from '@/subcomponent/SubHeading'
import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import { IoMdArrowUp } from "react-icons/io";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 pt-28 flex gap-12 items-start">
        <div className="w-1/2 flex justify-end relative">
          <Image
          src={'/1719.jpg'}
          className='h-[460px] object-cover object-center rounded-md shadow-[0_0_15px_#00000020] relative hover:z-10 hover:scale-105 transition-all duration-500'
          width={450}
          height={450}
          alt='technology'
          />
          <Image 
          className='absolute left-0 top-[-26px] border-white border-[10px] rounded-md shadow-[0_0_15px_#00000018] hover:scale-105 hover:z-10 transition-all duration-500'
          src={'/dev-team.jpg'}
          width={320}
          height={320}
          alt='dev team'
          quality={100}
          />
          <div className='up-down rounded-md absolute bottom-[-40px] flex justify-center items-center flex-col gap-4  left-0 bg-red-500 px-8 py-9'>
            <h3 className='text-white font-bold text-5xl'><CountUp
            start={0}
            end={350}/>+</h3>
            <h4 className='text-white font-bold text-xl uppercase tracking-wide'>Projects Delivered</h4>

          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start gap-5">
         <SubHeading heading="About Us" pos="start"/>
         <h2 className='text-5xl font-black leading-tight'> Why Choose Xonier Technology</h2>
         <p className='opacity-85  font-medium pb-8'>Xonier Technologies is a digital engineering services provider to emerging businesses that are seeking to transform operations, leveraging Open Source software, Mobile devices, and the public/private cloud.</p>

         <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-3'>
              <div className='text-6xl text-[#18455D] font-semibold pb-6 relative w-fit'>
              <CountUp
              start={0}
              end={7} 
              duration={4}
              />+
              <IoMdArrowUp className='up-arrow text-red-500 text-6xl absolute top-[-25px] right-[-42px]'/>
              </div>
              <h3 className='text-2xl font-bold '>Year of Experience</h3>
              <p className=' opacity-85 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam repellat tempora omnis!</p>

            </div>
            <div className='flex flex-col gap-3'>
              <div className='text-6xl text-[#18455D] font-semibold pb-6 relative w-fit'>
              <CountUp
              start={0}
              end={120} 
              duration={4}
              />+
              <IoMdArrowUp className='up-arrow text-red-500 text-6xl absolute top-[-25px] right-[-42px]'/>
              </div>
              <h3 className='text-2xl font-bold '>Team Members</h3>
              <p className=' opacity-85 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam repellat tempora omnis!</p>

            </div>
         </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs
