"use client"
import React, {useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SubHeading from '@/subcomponent/SubHeading'

const Technologies = () => {

    const [Active, setActive] = useState(true);

  return (
    <>
      <div className='max-w-7xl mx-auto py-20'>

      <div className='flex flex-col gap-3 items-center justify-center pb-14'>
            <SubHeading heading={'Developers with Technology'} pos={'center'}/>
            <h2 className='text-5xl font-black leading-tight capitalize' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Our Leading Tech Stack</h2>

         </div>
         <div className='w-full flex justify-center '>
            <ul className='flex items-center gap-8 border-[#0c324640] border-[1px] rounded-full p-3'>
                <li className='capitalize text-lg px-12 font-medium py-3 bg-[#0C3246] text-white rounded-full cursor-pointer tracking-wide'>Technology </li>
                <li className='capitalize text-lg px-12 font-semibold py-3 bg-[#0c324636] text-[#18455D] rounded-full cursor-pointer tracking-wide'>by Role </li>
            </ul>

            <div className='grid grid-cols-1'>

            </div>

         </div>

      </div>
    </>
  )
}

export default Technologies
