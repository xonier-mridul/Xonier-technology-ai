import React from 'react'

const SubHeading = ({heading, pos }) => {
  return (
    <>
      <div className={`flex flex-col gap-2 items-${pos} w-fit`}>
        <h3 className='text-red-500 uppercase font-bold tracking-[1px]'>{heading}</h3>
        <div className='divider border-2 border-[#DEDEDE] w-6 relative'></div>

      </div>
    </>
  )
}

export default SubHeading
