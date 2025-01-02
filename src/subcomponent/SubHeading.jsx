import React from 'react'

const SubHeading = ({heading, pos }) => {
  return (
    <>
      <div className={`flex flex-col gap-2 items-${pos} w-fit`} >
        <h3 className='text-red-500 uppercase font-bold tracking-[1px]' data-aos="fade-up" data-aos-duration="700" >{heading}</h3>
        <div className='divider border-2 border-[#DEDEDE] w-6 relative' data-aos="fade-up" data-aos-duration="700" data-aos-delay="200"></div>

      </div>
    </>
  )
}

export default SubHeading
