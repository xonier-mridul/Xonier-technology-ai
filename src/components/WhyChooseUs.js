import SubHeading from '@/subcomponent/SubHeading'
import React from 'react'
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <>
      <div className='w-full flex items-end'>
        <div className="w-[44%] choose-bg h-[520px]">
        </div>
        <div className="w-[56%] whychoose-bg py-20 px-10 flex flex-col gap-4">
           <SubHeading heading={'Why choose us'} pos={'start'}/>
           <h2 className='text-5xl font-black leading-tight text-white pb-5'>We are building a sustainable future</h2>

           <p className='text-white opacity-90 leading-relaxed pb-8'>
           We are a global digital solutions and services firm that believes in leveraging the power of technology for the betterment of human endeavors in both business and society. We aim to be accelerators in the digital journey of our clients across many industries in our global market geographies.
           </p>
           <div className='grid-cols-3 grid gap-6'>
              <div className='icon-box flex flex-col gap-4'>
              <GrCloudSoftware className='icon-box-svg transition-all duration-300 text-white text-5xl'/>
               <h3 className='text-lg text-white font-bold'> Software Development </h3>
              </div>
              <div className='icon-box flex flex-col gap-4'>
              <MdOutlineDeveloperMode className='icon-box-svg transition-all duration-300 text-white text-5xl'/>
               <h3 className='text-lg text-white font-bold'> App Development </h3>
              </div>
              <div className='icon-box flex flex-col gap-4'>
              <BsRobot className='icon-box-svg transition-all duration-300 text-white text-5xl'/>
               <h3 className='text-lg text-white font-bold'> AI Development </h3>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
