import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="services max-w-7xl mx-auto p-10 bg-white relative grid grid-cols-3 gap-10 gap-y-14 shadow-[0_0_15px_#00000020]">
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/api.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">Software Development</h3>
            <p className="font-medium opacity-90">We focus on the best practices for it solutions and services</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/32.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">Digital Transformation</h3>
            <p className="font-medium opacity-90">Digitalization makes businesses customer-centric and more efficient.</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/web-icon.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">Web Development</h3>
            <p className="font-medium opacity-90">Xonier provides affordable web services for diverse industries.</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/mobile-development.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">App Development</h3>
            <p className="font-medium opacity-90"> Xonier builds apps for easy customer service access.</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/remote.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">Remote Team</h3>
            <p className="font-medium opacity-90">Developers and managers empower your technological capabilities</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-6">
          <div className="relative">
            <Image className="img duration-300 transition-all relative z-10" src={"/consulting.png"} width={98} height={98} alt="software" />
            <div className="service-round h-10 w-10 rounded-full bg-[#18455D] opacity-20 absolute top-[-10px] right-0 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-black text-[21px] ">Consulting
            Service</h3>
            <p className="font-medium opacity-90">Xonier experts audit, strategize, and enhance experience automation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
