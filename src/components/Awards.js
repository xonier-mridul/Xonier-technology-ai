import React from 'react'
import SubHeading from '@/subcomponent/SubHeading'
import Image from 'next/image'

const Awards = () => {
  return (
    <>
      <div className='py-20 bg-[]'>
        <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <div className='flex flex-col gap-3 items-center justify-center pb-12'>
            <SubHeading heading={'Our Achievements'} pos={'center'}/>
            <h2 className='text-5xl font-black leading-tight capitalize'>Our Awards And Recognition</h2>
         </div>
         <div className='grid-cols-7 w-full grid items-center justify-center mx-auto p-5 py-7 bg-cyan-950 mb-12'>
            <div  data-aos="fade-down" data-aos-duration="500">
            <Image 
           
            className='hover:translate-y-[-19px] transition-all duration-500 '
            src={'/award1.webp'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="150">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award2.png'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award3.webp'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="450">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award4.png'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="600">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award5.png'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="750">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award5.webp'}
            width={150}
            height={150}
            alt='logo'/>
            </div>
            <div  data-aos="fade-down" data-aos-duration="500" data-aos-delay="900">
            <Image 
            className='hover:translate-y-[-19px] transition-all duration-500'
            src={'/award6.png'}
            width={150}
            height={150}
            alt='logo'/>
            </div>

         </div>
         <p className='w-3/4 text-center text-lg text-[#42545e] font-medium'>With over 14+ years of industry experience, our CEO brings a wealth of expertise and leadership to ensure timely and efficient project execution. Get In Touch</p>
        </div>
      </div>
    </>
  )
}

export default Awards
