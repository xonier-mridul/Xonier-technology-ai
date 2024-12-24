"use client"
import React,{useState, useEffect} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdCloudDone } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import TechnologyMenuCenter from './TechnologyMenuCenter';
import MegaMenuRight from './MegaMenuRight';

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

import { MdAppShortcut } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdWebStories } from "react-icons/md";
import { FaSellcast } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";


const TechnologyMegaMenu = ({listOne, listOneIcon, listTwo, listTwoIcon, listThree, listThreeIcon, listFour, listFourIcon, listFive, listFiveIcon, listSix, listSixIcon, listSeven, listSevenIcon, listEight, listEightIcon, hide}) => {

   const [Active, setActive] = useState(1);

   const handleActive = (i)=>{
      setActive(i)
   }
   

  return (
    <>
      <div className='megamenus absolute top-0 w-[100vw] z-30 bg-white light-bg ' onMouseLeave={hide}>
        <div className="max-w-7xl mx-auto flex items-start gap-6">
           <div className="w-1/4 megamenu-left py-5 pr-3 h-screen">
           <ul className='flex flex-col gap-2'>
             <li className={`${Active === 1 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(1)}><span className='flex items-center gap-3'>{listOneIcon}  {listOne}</span> <FaArrowRightLong className={ `mega-icon transition-all duration-500 text-white invisible ${Active === 1 && "bg-active-icon"}`} data-aos="zoom-in" data-aos-duration="400"/></li>

              <li className={`${Active === 2 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize`} onClick={()=>handleActive(2)}> <span className='flex items-center gap-3'> {listTwoIcon} {listTwo}</span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible' data-aos="zoom-in" data-aos-duration="400" /></li>

              {/*<li className={`${Active === 3 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(3)}><span className='flex items-center gap-3'> {listThreeIcon}  {listThree} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/> </li>

             <li className={` ${Active === 4 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(4)}>  <span className='flex items-center gap-3'> {listFourIcon} {listFour}
              </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 5 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(5)}><span className='flex items-center gap-3'> {listFiveIcon} {listFive} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={ `${Active === 6 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(6)}> <span className='flex items-center gap-3'> {listSixIcon} {listSix}  </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 7 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(7)}><span className='flex items-center gap-3'> {listSevenIcon} {listSeven} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 8 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(8)}><span className='flex items-center gap-3'> {listEight} </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li> */}
           </ul>
           
           </div>
           <div className="w-3/4 h-full py-5">
               
            {Active === 1 && <TechnologyMenuCenter icon={<FaArrowTrendUp className='text-4xl text-red-500'/>} heading={'Trending & Platforms'} subheading={'Leading-edge tech solution'} listOneHeading={'Trending'} listTwoHeading={'Platforms'} consultServiceOne={'Artificial Intelligence'}  consultServiceTwo={'Chatbot'}  consultServiceThree={'Machine Learning'}  consultServiceFour={'Big Data'} consultServiceFive={'Data Science'} consultServiceSix={'Blockchain'}  consultServiceSeven={'Data Analytics'} consultServiceEight={'Internet of Things'} consultServiceNine={'Computer Vision'} consultServiceTen={'Serverless'} DevelopmentServiceOne={'Salesforce'}  DevelopmentServiceTwo={'Microsoft Power Platform'}  DevelopmentServiceThree={'Microsoft Dynamic'}  DevelopmentServiceFour={'Power Apps'} DevelopmentServiceFive={'Share Points'} DevelopmentServiceSix={'Amezon Web Service'} DevelopmentServiceSeven={'Odoo'} DevelopmentServiceEight={'Azare'} />}

            {Active === 2 && <TechnologyMenuCenter icon={<FaLaptopCode className='text-4xl text-red-500'/>} heading={'Programming'} subheading={'Leading-edge tech solution'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Python'}  consultServiceTwo={'Node Js'}  consultServiceThree={'Laravel'}  consultServiceFour={'.NET'} consultServiceFive={'React Js'} consultServiceSix={'React Native'}  consultServiceSeven={'Next Js'} consultServiceEight={'Fluter'} consultServiceNine={'PHP'} consultServiceTen={'Angular'} DevelopmentServiceOne={'Salesforce'}  DevelopmentServiceTwo={'Microsoft Power Platform'}  DevelopmentServiceThree={'Microsoft Dynamic'}  DevelopmentServiceFour={'Power Apps'} DevelopmentServiceFive={'Share Points'} DevelopmentServiceSix={'Amezon Web Service'} DevelopmentServiceSeven={'Odoo'} DevelopmentServiceEight={'Azare'} />}


           </div>
           {/* <div className="w-1/4 py-5">


            {Active === 1 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}

            {Active === 2 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}


            {Active === 3 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 4 && <MegaMenuRight heading={'Solutions'} para={'Boost sales with smart eCommerce'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'B2C eCommerce'} headingOnePara={'Gain more customers with B2C solutions'} iconTwo={ <BsBuildingsFill className=" text-3xl text-red-500" />} headingTwo={'B2B eCommerce'} headingTwoPara={'Create digital business solutions with B2B'} iconThree={<MdWebStories className=" text-3xl text-red-500" />} headingThree={'Web Portals'} headingThreePara={'Build user-friendly, feature-rice store'} iconFour={<FaSellcast className=" text-3xl text-red-500" />} headingFour={'Supply Chain Automation'} headingFourPara={'Streamline, optimize, automate supply chain'}/>}

            {Active === 5 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 6 && <MegaMenuRight heading={'Technologies'} para={'Innovating the Future'} iconOne={<FaAws className=" text-3xl text-red-500" />} headingOne={'Amazon AWS'} headingOnePara={'Build, scale, innovate on AWS'} iconTwo={ <VscAzure className=" text-3xl text-red-500" />} headingTwo={'Azure'} headingTwoPara={'End-to-end automation solutions'} iconThree={<SiGooglecloud className=" text-3xl text-red-500" />} headingThree={'Google Cloud'} headingThreePara={'Explore limitless potential with google'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 7 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 8 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}

           </div> */}
        </div>

      </div>
    </>
  )
}

export default TechnologyMegaMenu
