"use client"
import React,{ useState,useEffect} from "react";
import Image from "next/image";
import SubHeading from "@/subcomponent/SubHeading";

const WorkProcess = () => {

    const [active, setactive] = useState(1);

      const manageActive = (e)=>{
          setactive(e)
      }  

  return (
    <>
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col gap-3 items-center justify-center pb-14">
        <SubHeading heading={"Developers with Technology"} pos={"center"} />
        <h2 className="text-5xl font-black leading-tight capitalize"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Our Working Process
        </h2>
      </div>
      <div className="work-process-bg grid grid-cols-3 items-center gap-10">
        <div className="flex flex-col gap-3 items-center" onMouseEnter={()=>manageActive(1)}>
        <div className="relative" data-aos="zoom-in" data-aos-duration="600">
            <Image
           
            src={'/requirement.jpg'}
            className={ `${active === 1 ? "h-60 w-60": "h-48 w-48"} rounded-full transition-all duration-300  object-cover object-center pb-2`}
            height={300}
            width={300}
            alt="img"
            />
           <div className="bg-red-500  h-14 w-14 rounded-full flex items-center justify-center text-2xl font-bold absolute right-0 bottom-5 strokes" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">01</div>
            </div>
            <h3 className="text-xl font-black pb-2">Requirement Analysis</h3>
            <p className="text-[#42545e] w-3/4 font-medium text-center">Lorem ipsum  sit amet, consectetur adipisicing elit. Voluptas</p>
        </div>
        <div className="flex flex-col gap-3 items-center" onMouseEnter={()=>manageActive(2)}>
            <div className="relative" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <Image
            src={'/development.jpg'}
            className={`${active === 2 ? "h-60 w-60": "h-60 w-60"}  rounded-full transition-all duration-300  object-cover object-center pb-2`}
            height={300}
            width={300}
            alt="img"
            />
            <div className="bg-cyan-950 h-14 w-14 rounded-full flex items-center justify-center text-2xl font-bold absolute right-0 top-5 strokes" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">02</div>
            </div>
            <h3 className="text-xl font-black pb-2">Development</h3>
            <p className="text-[#42545e] w-3/4 font-medium text-center">Lorem ipsum  sit amet, consectetur adipisicing elit. Voluptas</p>
        </div>
        <div className="flex flex-col gap-3 items-center" onMouseEnter={()=>manageActive(3)}>
        <div className="relative" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
            <Image
            src={'/deployment.jpg'}
            className={ `${active === 3 ? "h-60 w-60": "h-48 w-48"} rounded-full transition-all duration-300  object-cover object-center pb-2`}
            height={300}
            width={300}
            alt="img"
            />
            <div className="bg-red-500  h-14 w-14 rounded-full flex items-center justify-center text-2xl font-bold absolute right-0 bottom-5 strokes" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">03</div>
            </div>
            <h3 className="text-xl font-black pb-2">Deployment </h3>
            <p className="text-[#42545e] w-3/4 font-medium text-center">Lorem ipsum  sit amet, consectetur adipisicing elit. Voluptas </p>
        </div>
            
      </div>
      </div>
    </>
  );
};

export default WorkProcess;
