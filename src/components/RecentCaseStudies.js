"use client"
import React,{useState,useEffect} from 'react'
import UseCase from '@/subcomponent/UseCase'
import SubHeading from '@/subcomponent/SubHeading'
import Image from 'next/image'
import Link from 'next/link'

const RecentCaseStudies = () => {
    const [data, setData] = useState(UseCase);


  return (
    <>
      <div className='w-full py-20 bg-[#f8f9fb]'>
        <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-3 items-center justify-center pb-14'>
            <SubHeading heading={'What we done'} pos={'center'}/>
            <h2 className='text-5xl font-black leading-tight capitalize' data-aos="fade-up" data-aos-duration="1000"> Our Case Studies </h2>

         </div>
        
         <div className=" gap-8 grid grid-cols-4">
            {data.slice(0,4).map((e,i)=>(
                <div className='flex flex-col gap-6' key={e.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                   <Image
                   className='w-full h-48 object-cover object-center'
                   src={e.image}
                   height={300}
                   width={300}
                   alt='image'
                   quality={100}
                   />
                   <div className='w-full '>
                <h3 className="text-2xl font-semibold pb-4"> {e.title} </h3>
                <p className="flex  items-center gap-1 pb-3">
                <b>Case Studies:</b> {e.tech} </p>
                <p className='text-ellipsis line-clamp-2 mb-8'> {e.description} </p>
                <Link
                className="px-8 py-[10px] bg-red-500 text-white"
                href={`/case-studies/${e.slug}`}>
                Learn More
              </Link>
                </div>
                </div>
            ))}
         </div>
         </div>
      </div>
    </>
  )
}

export default RecentCaseStudies
