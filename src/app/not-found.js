"use client"
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])
  
   
  return (
    <>
      <div className='min-h-screen w-full flex items-center justify-center bg-[#0C3246]'>
        <h1 className='text-white font-lg '> Nothing Found Bro</h1>
        <button className='text-red-500 text-lg font-medium' type='button' onClick={()=>router.push('/')}>Back to Home</button>

      </div>
    </>
  )
}

export default NotFound
