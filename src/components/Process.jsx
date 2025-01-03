import React from 'react'
import Link from 'next/link'

const Process = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto  pt-8 pb-20'>
        <div className='grid grid-cols-3 gap-40'>

        
        <div className='flex flex-col gap-4' data-aos="fade-up" data-aos-duration="800">
            <div className='relative w-full pb-4'>
            <p className='text-[160px] text-[#18455d26] absolute top-[-40px] right-0 font-black leading-none' data-aos="zoom-in" data-aos-duration="600">1</p>
            <h6 className='uppercase text-red-500 text-sm font-bold tracking-wider pb-2'>step 1</h6>
            <h3 className='font-black  text-4xl'>Analysis <br/> Project </h3>
            </div>
            <p className='text-[#42545e] font-medium'> We focus on the best practices for it solutions and services. </p>
        </div>
        <div className='flex flex-col gap-4' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className='relative w-full pb-4'>
            <p className='text-[160px] text-[#18455d26] absolute top-[-40px] right-0 font-black leading-none'>2</p>
            <h6 className='uppercase text-red-500 text-sm font-bold tracking-wider pb-2'>step 2</h6>
            <h3 className='font-black  text-4xl'>Design & <br/>Develop </h3>
            </div>
            <p className='text-[#42545e] font-medium'> We focus on the best practices for it solutions and services. </p>
        </div>
        <div className='flex flex-col gap-4' data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <div className='relative w-full pb-4'>
            <p className='text-[160px] text-[#18455d26] absolute top-[-40px] right-0 font-black leading-none'>3</p>
            <h6 className='uppercase text-red-500 text-sm font-bold tracking-wider pb-2'>step 3</h6>
            <h3 className='font-black  text-4xl'>Test & <br/>Deliver</h3>
            </div>
            <p className='text-[#42545e] font-medium'> We focus on the best practices for it solutions and services. </p>
        </div>
        </div>
        <div className='flex justify-center items-center pt-14'>
            <div className='border-[1px] rounded-full border-[#dee2e6] p-2 px-5' data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
                <p className='text-lg text-[#18455d] font-semibold'>Have any question? Find your solutions. <Link className='underline text-red-500' href={'tel:+918700914459'}> Call:+91 87009 14459</Link> </p>
            </div>

        </div>
      </div>
    </>
  )
}

export default Process
