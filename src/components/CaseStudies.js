"use client";
import React, { useState, useEffect } from "react";
import UseCase from "@/apiss/UseCase";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import SubHeading from "@/subcomponent/SubHeading";

const CaseStudies = () => {
  const [data, setData] = useState(UseCase);
  const [showUseCase, setshowUseCase] = useState(4)
  const length = data.length

  useEffect(() => {
    axios
      .get(UseCase)
      .then((response) => {
        console.log("here is resp", response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, []);

  const handleShow = ()=>{
   showUseCase === 4 ? setshowUseCase(length) : setshowUseCase(4) 
  }

  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
      <div className='flex flex-col gap-3 items-center justify-center pb-14'>
            <SubHeading heading={'Our Case studies'} pos={'center'}/>
            <h2 className='text-5xl font-black leading-tight capitalize'>Our Success Stories</h2>

         </div>
        <div className=" grid grid-cols-2 gap-8 items-center pb-16">
        

       
        {data.slice(0,showUseCase).map((item, index) => (
          <div
            className="case-box flex items-center w-full shadow-[0_0_50px_#00000015] hover:shadow-[0_0_40px_#00000030] transition-all duration-300 relative rounded-sm overflow-hidden"
            key={item.id}
          >
            <div className="w-1/2 h-[325px] relative overflow-hidden">
              <div className="case-overlay absolute h-full w-full top-0 left-0 z-10 bg-[#00000000] transition-all duration-500"></div>
              <Image
                className="case-img w-full h-full object-cover transition-all duration-500"
                src={item.image}
                height={200}
                width={200}
                quality={100}
                alt="logo"/>
            </div>
            <div className="absolute  top-4 left-4 z-20">
              <Image
                className="bg-white h-20 w-28 rounded-md object-contain p-2"
                src={item.logo}
                width={120}
                height={120}
                alt="logo"/>
            </div>
            <div className="w-1/2 p-8 ">
              <h3 className="text-2xl font-semibold pb-4">{item.title}</h3>
              <p className="mb-4 text-ellipsis line-clamp-3">{item.description}</p>
              <p className="flex  items-center gap-1 pb-8">
                <b>Case Studies:</b> {item.tech}
              </p>
              <Link
                className="px-8 py-[10px] bg-red-500 text-white"
                href={item.link}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
        
      </div>
      
      <div className="flex items-center justify-center w-full">
              <button type="button" className="uppercase text-white bg-red-500 py-3 px-8  font-medium flex items-center gap-3 tracking-[1px]" onClick={handleShow}> Show More <FaArrowRightLong className='text-lg'/></button>
        </div>
        </div>
    </>
  );
};

export default CaseStudies;
