"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaArrowRightLong } from "react-icons/fa6";
import MegaMenu from '@/subcomponent/MegaMenu'
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { MdCloudDone } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import TechnologyMegaMenu from '@/subcomponent/TechnologyMegaMenu'
import HireMegaMenu from '@/subcomponent/HireMegaMenu'
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaDev } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";


const Navbar = () => {
  const pathname = usePathname()
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMega, setShowMega] = useState(0);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scroll = window.scrollY;
  //     setIsScrolled(scroll !== 0);
  //   };

  //   if (showMega > 0) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //     document.body.style.overflow = "";
      
  //   };
  // }, [showMega]);


  useEffect(() => {
  document.addEventListener('scroll',()=>{
    const scroll = window.scrollY
    if(scroll !== 0){
      setIsScrolled(true)
    }
    else{
      setIsScrolled(false)
    }
  })
}, [])
  
  return (
    <>
    <div className={`${isScrolled? "bg-white shadow-[0_5px_14px_#00000016] " : "bg-transparent"} fixed w-full top-0 left-0 py-5 z-30 border-b-[1px] border-[#ffffff1a]`}>
       <div className="max-w-7xl mx-auto  flex items-center ">
       <div className="w-[20%]" onMouseEnter={()=>setShowMega(0)}>
        
        {isScrolled ? <Link href={'/'}><Image
        src={"/xonier-main-logo.png"}
        width={180}
        height={180}
        alt="xonier-logo"
        /></Link> : <Link href={'/'}><Image
        src={"/xonier-logo.png"}
        width={180}
        height={180}
        alt="xonier-logo"
        /> </Link>}
       </div>
       <div className="w-[55%]">
         <nav>
            <ul className='flex items-center gap-7 justify-end'>
                
                <li> <Link className={`${isScrolled ? "text-[#18455D]" :"text-white"} hover:text-[#ff4c4c]  duration-300 transition-all font-bold uppercase`} href={''} onMouseEnter={()=>setShowMega(1)}> Services </Link>

                {showMega === 1 && <MegaMenu listOne={'Software Development'} listOneIcon={<GrCloudSoftware className='text-xl'/>} listTwo={'Application Development '} listTwoIcon={<MdOutlineDeveloperMode className='text-lg'/>} listThree={'Software Team'} listThreeIcon={<BsMicrosoftTeams className='text-xl'/>} listFour={'eCommerce'} listFourIcon={<FaCartPlus className='text-xl'/>} listFive={'QA and Testing'} listFiveIcon={<MdAutoGraph className='text-xl'/>} listSix={'Cloud Testing'} listSixIcon={<MdCloudDone className='text-xl'/>} listSeven={'Data Solution'} listSevenIcon={<BsDatabaseFillGear className='text-xl'/>} listEight={'AI & ML Solution'} listEightIcon={<FaBrain className='text-xl'/>} hide={()=>setShowMega(0)} />}

                </li>

                <li> <Link href={'/'} className={`${isScrolled ? "text-[#18455D]" : "text-white"} font-bold uppercase hover:text-[#ff4c4c]  duration-300 transition-all`} onMouseEnter={()=>setShowMega(3)}>Hire </Link>
                  
                   {showMega === 3 && <HireMegaMenu listOneIcon={<FaCode className='text-lg'/>} listOne={'Backend'} listTwoIcon={<FaReact className='text-lg'/>} listTwo={'Frontend'} listThreeIcon={<FaBrain className='text-lg'/>} listThree={'AI/ML'} listFourIcon={<BsDatabaseFillGear className='text-lg'/>} listFour={'Data Solution'} listFiveIcon={<MdOutlineDeveloperMode className='text-xl'/>} listFive={'Mobile'} listSix={'Full Stack'} listSixIcon={<SiNextdotjs className='text-lg'/>} listSevenIcon={<FaDev className='text-lg'/>} listSeven={'DevOps'} listEightIcon={<FaWordpress className='text-lg'/>} listEight={'CMS'} hide={()=>setShowMega(0)}/> }

                </li>

                <li><Link className={`${isScrolled ? "text-[#18455D]" : "text-white"} font-bold uppercase hover:text-[#ff4c4c]  duration-300 transition-all`} href={'/'} onMouseEnter={()=>setShowMega(2)} >Technology </Link>

                {showMega === 2 && <TechnologyMegaMenu listOne={'Trending & Platforms'} listOneIcon={<FaArrowTrendUp className='text-xl'/>} listTwo={'Programming'} listTwoIcon={<FaLaptopCode className='text-lg'/>} listThree={''} listThreeIcon={''} listFour={''} listFourIcon={''} listFive={''} listFiveIcon={''} listSix={''} listSixIcon={''} listSeven={''} listSevenIcon={''} listEight={''} listEightIcon={''}  hide={()=>setShowMega(0)}/>}
                </li>

                <li className='relative' onMouseEnter={()=>setShowMega(0)}> <Link href={'/company'} className={`${isScrolled ? "text-[#18454D]" : " text-white"} ${pathname === "/company" && "text-red-500"}  font-bold uppercase cursor-pointer hover:text-[#ff4c4c]  duration-300 transition-all`}> Company</Link> </li>
                
                <li onMouseEnter={()=>setShowMega(0)}> <Link href={'/case-studies'} className={`${isScrolled ? "text-[#18455D]" : "text-white"} ${pathname === "/case-studies" && "text-red-500"} font-bold uppercase cursor-pointer hover:text-[#ff4c4c]  duration-300 transition-all`}> Case Studies </Link> </li>
                
                <li><Link className={`${isScrolled ? "text-[#18455D]" : "text-white"} ${pathname === "/contact" && "text-red-500"} font-bold uppercase cursor-pointer hover:text-[#ff4c4c] duration-300 transition-all`}onMouseEnter={()=>setShowMega(0)} href={'/contact'}> Contact </Link></li>
                
            </ul>
         </nav>

       </div>
       <div className="w-[25%] flex justify-end items-center" onMouseEnter={()=>setShowMega(0)}>

        <Link  className='uppercase text-white bg-red-500 py-3 px-8  font-medium flex items-center gap-3 tracking-[1px]' href={'/'}>Free Quote <FaArrowRightLong className='text-lg'/></Link>
       </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
