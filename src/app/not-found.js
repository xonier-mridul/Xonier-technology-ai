"use client"
import React,{useEffect} from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

  const router = useRouter()

   const handleBack = ()=> router.push('/')

  return (
    <>
      <div className='min-h-screen w-full flex items-center justify-center bg-[#0C3246]'>
        <h1 className=''> Nothing Found Bro</h1>
        <button type='button' onClick={handleBack}>Back to Home</button>

      </div>
    </>
  )
}

export default NotFound
