'use client' 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation' 

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error]);

  const rounter = useRouter();
 
  return (
    <div className='min-h-screen flex justify-center items-center bg-[#0C3246]'>
      <h2 className='text-white text-lg tracking-wider'>Something went wrong! &nbsp; </h2>
      <button
      className='text-red-500 text-xl font-medium'
        onClick={() => reset()
        }>
        Try again
      </button>
    </div>
  )
}