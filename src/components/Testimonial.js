'use client'
import React from 'react'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
      <div className='bg-blue testimonial pt-20 pb-10'>
        <div className='flex max-w-7xl mx-auto pb-14'>
        <div className="w-1/2">
        <div className='flex gap-3'>
          <h3 className='text-6xl font-bold text-white'>4.85</h3>
          <div className='flex flex-col gap-2 justify-center'>
            <span className='bg-red-500 px-4 py-2 rounded-full flex '><FaStar className='text-[#0c3246] text-lg' /><FaStar className='text-[#0c3246] text-lg' /><FaStar className='text-[#0c3246] text-lg' /><FaStar className='text-[#0c3246] text-lg' /><FaStar className='text-[#0c3246] text-lg' /></span>
            <p className='uppercase text-white text-sm text-center tracking-wide'>client reviews</p>
          </div>
        </div>
        
        </div>
        <div className="w-1/2">
      <Slider {...settings}>
        <div >
          <p className='font-medium tracking-wide leading-snug text-2xl text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure temporibus sunt optio sed impedit explicabo voluptatem aut non, vel voluptatum culpa repellat perferendis.</p>
          <span className='text-lg text-red-500'> @JOHN DOE</span>
        </div>
        <div >
          <p className='font-medium tracking-wide leading-snug text-2xl text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure temporibus sunt optio sed impedit explicabo voluptatem aut non, vel voluptatum culpa repellat perferendis.</p>
          <span className='text-lg text-red-500'> @JOHN DOE</span>
        </div>
        <div >
          <p className='font-medium tracking-wide leading-snug text-2xl text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure temporibus sunt optio sed impedit explicabo voluptatem aut non, vel voluptatum culpa repellat perferendis.</p>
          <span className='text-lg text-red-500'> @JOHN DOE</span>
        </div>
        
      </Slider>
   </div>
      </div>
      <div className="client-sec max-w-7xl mx-auto grid grid-cols-5 pt-10 border-t-[1px] border-[#FFFFFF1A] ">

        <div className='client-logo p-4 flex items-center justify-center'>
             <Image 
             src={'/hipster.png'}
             width={180}
             height={180}
             alt='logo'
             quality={100}
             />
             
             
        </div>
        <div className='client-logo p-4 flex items-center justify-center'>
             <Image 
             src={'/natural.png'}
             width={180}
             height={180}
             alt='logo'
             quality={100}
             />
             
             
        </div>
        <div className='client-logo p-4 flex items-center justify-center'>
             <Image 
             src={'/hipster.png'}
             width={180}
             height={180}
             alt='logo'
             quality={100}
             />
             
             
        </div>
        <div className='client-logo p-4 flex items-center justify-center'>
             <Image 
             src={'/natural.png'}
             width={180}
             height={180}
             alt='logo'
             quality={100}
             />
             
             
        </div>
        <div className='client-logo p-4 flex items-center justify-center'>
             <Image 
             src={'/hipster.png'}
             width={180}
             height={180}
             alt='logo'
             quality={100}
             />
             
             
        </div>

      </div>
      </div>
    </>
  )
}

export default Testimonial
