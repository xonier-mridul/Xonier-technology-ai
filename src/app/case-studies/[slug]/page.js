"use client"
import React from 'react'
import UseCase from '@/subcomponent/UseCase'
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { SiOpensourcehardware } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import Link from 'next/link';
const page = ({params}) => {

    const newParams = React.use(params)

    const filteredData = UseCase.filter((e) => e.slug === newParams.slug);
    const router = useRouter()

  return (
    <>
      { filteredData.map((e)=>(
        <>
        <div key={e.id}>
        <div className={`w-full py-40 pt-48 bg-center bg-cover relative scroll-smooth`} style={{ backgroundImage: `url(${e.image})` }} >
            <div className='absolute top-0 left-0 w-full h-full bg-[#00000060]'></div>
            <div className="max-w-7xl mx-auto relative">
                <h1 className='text-6xl text-white font-bold capitalize pb-5'>{e.title}</h1>
                <ul className=' px-5 py-2 bg-[#fff3] flex items-center gap-4 w-fit'>
                                <li className='text-white flex items-center gap-2 text-lg font-medium hover:text-red-500 transition-all duration-300 cursor-pointer' onClick={()=>router.push('/case-studies')} > <FaSearch className='text-xl '/> Case Studies</li> 
                
                                <li><FaCircle className='text-[10px] text-red-500'/></li>
                
                                <li className='text-white flex items-center gap-2 text-lg font-medium capitalize'> {e.title} </li>
                                
                            </ul>
            </div>

        </div>
        <div className='max-w-7xl mx-auto py-20 flex  gap-14 '>
            <div className="w-[28%] border-r-[1px] border-[#eee] sticky top-28 h-fit"
              style={{ maxHeight: 'calc(100vh - 80px)' }}>
            <h3 className='text-3xl font-bold pb-6'>Case Studies</h3>
             <ul className='flex flex-col gap-2'>
                <li><Link className='text-xl font-medium p-3 hover:bg-[#18455d] transition-all duration-300 w-full flex items-center gap-2 hover:text-white' href={`/case-studies/${e.slug}/#industry`}><BsBuildingFillGear className='text-red-500 text-2xl'/> Industry</Link></li>
                <li><Link className='text-xl font-medium p-3 hover:bg-[#18455d] transition-all duration-300 w-full flex items-center gap-2 hover:text-white' href={`/case-studies/${e.slug}/#challenges`}><SiOpensourcehardware className='text-red-500 text-2xl'/>Challenges</Link></li>
                <li><Link className='text-xl font-medium p-3 hover:bg-[#18455d] transition-all duration-300 w-full flex items-center gap-2 hover:text-white' href={`/case-studies/${e.slug}/#solutions`}> <AiOutlineSolution className='text-red-500 text-2xl'/> Solutions</Link></li>
                <li><Link className='text-xl font-medium p-3 hover:bg-[#18455d] transition-all duration-300 w-full flex items-center gap-2 hover:text-white' href={`/case-studies/${e.slug}/#benefit`}> <FaClipboardCheck className='text-red-500 text-2xl' /> Benefits</Link></li>
             </ul>

            </div>
            <div className="w-[72%] flex flex-col gap-10">
               <div id="industry">
                <h3 className='text-3xl font-bold pb-5'>About </h3>
                <p className='opacity-85 text-lg pb-4'>{e.about}</p>
                <p className='opacity-90 text-lg text-red-500 font-medium'>  <b className='font-semibold text-xl text-[#18455D]'>Technologies: &nbsp;</b> {e.tech} </p>

               </div>
               <div id="challenges">
               <h3 className='text-3xl font-bold pb-5'>Challenges </h3>
               <p className='opacity-85 text-lg pb-4'>{e.chalenges.description}</p>
               <div className='opacity-85 text-lg pb-4 flex flex-col gap-3'>{e.chalenges.chal.map((e,i)=>(
                 <p className='flex items-center gap-4'> <FaCircle className='text-[10px] text-red-500'/> {e}</p>
               ))}</div>
               
               </div>

               <div id="solutions">
               <h3 className='text-3xl font-bold pb-5'>Solutions</h3>
               <p className='opacity-85 text-lg pb-4'>{e.solutions.description}</p>
               <div className='opacity-85 text-lg pb-4 flex flex-col gap-3'>{e.solutions?.sel?.map((e,i)=>(
                 <p className='flex items-center gap-4'> <FaCircle className='text-[10px] text-red-500'/> {e}</p>
               ))}</div>
               </div>

               <div id="benefit">
               <h3 className='text-3xl font-bold pb-5'>Benefits</h3>
               <p className='opacity-85 text-lg pb-4'>{e.benefits}</p>
               </div>
            
            </div>

        </div>
        </div>
        </>
      ))
      }
    </>
  )
}

export default page
