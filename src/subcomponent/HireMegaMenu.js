"use client"
import React,{useState, useEffect} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaDev } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { GiTeamUpgrade } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdCloudDone } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import MegaMenuCenter from './MegaMenuCenter';
import MegaMenuRight from './MegaMenuRight';
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


const HireMegaMenu = ({listOne, listOneIcon, listTwo, listTwoIcon, listThree, listThreeIcon, listFour, listFourIcon, listFive, listFiveIcon, listSix, listSixIcon, listSeven, listSevenIcon, listEight, listEightIcon, hide}) => {

   const [Active, setActive] = useState(1);

   const handleActive = (i)=>{
      setActive(i)
   }
   
   console.log(typeof(listThreeIcon))


  return (
    <>
      <div className='megamenus absolute top-0 w-[100vw] z-30 bg-white light-bg ' onMouseLeave={hide}>
        <div className="max-w-7xl mx-auto flex items-start gap-6">
           <div className="w-1/4 megamenu-left py-5 pr-3">
           <ul className='flex flex-col gap-2'>
             <li className={`${Active === 1 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(1)}><span className='flex items-center gap-3'>{listOneIcon}  {listOne}</span> <FaArrowRightLong className={ `mega-icon transition-all duration-500 text-white invisible ${Active === 1 && "bg-active-icon"}`} data-aos="zoom-in" data-aos-duration="400"/></li>

             <li className={`${Active === 2 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize`} onClick={()=>handleActive(2)}> <span className='flex items-center gap-3'> {listTwoIcon} {listTwo}</span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible' data-aos="zoom-in" data-aos-duration="400" /></li>

              <li className={`${Active === 3 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(3)}><span className='flex items-center gap-3'> {listThreeIcon}  {listThree} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/> </li>

             <li className={` ${Active === 4 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(4)}>  <span className='flex items-center gap-3'> {listFourIcon} {listFour}
              </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 5 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(5)}><span className='flex items-center gap-3'> {listFiveIcon} {listFive} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={ `${Active === 6 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(6)}> <span className='flex items-center gap-3'> {listSixIcon} {listSix}  </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 7 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(7)}><span className='flex items-center gap-3'> {listSevenIcon} {listSeven} </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 8 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(8)}><span className='flex items-center gap-3'>{listEightIcon} {listEight} </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>
           </ul>
           
           </div>
           
           <div className="w-2/4 h-full py-5">
               
            {Active === 1 && <MegaMenuCenter icon={<FaCode className="text-4xl text-red-500" />} heading={'Backend'} subheading={'Build robust backend'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Node Js'} consultServiceTwo={'Laravel'}  consultServiceThree={'PHP'}  consultServiceFour={'C/C++'} consultServiceFive={'Django'}  DevelopmentServiceOne={'Python'}  DevelopmentServiceTwo={'Java'} DevelopmentServiceThree={'Firebase '} DevelopmentServiceFour={'Golang'} DevelopmentServiceFive={'.NET'} />}

            {Active === 2 && <MegaMenuCenter icon={<FaReact className="text-4xl text-red-500" />} heading={'Frontend'} subheading={'End-to-end App Development'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'React Js'} consultServiceTwo={'Angular'}  consultServiceThree={'JavaScript'}  consultServiceFour={'Next Js'}  DevelopmentServiceOne={'HTML/CSS'}  DevelopmentServiceTwo={'Vue Js'} DevelopmentServiceThree={'Tailwind'} DevelopmentServiceFour={'Bootstrap'} />}

            {Active === 3 && <MegaMenuCenter icon={<SiNextdotjs className="text-4xl text-red-500" />} heading={'AI/ML'} subheading={'Transform with AI/ML experts'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'AI Engineers'} consultServiceTwo={'LLM Engineers'}  consultServiceThree={'GPT Experts'}  consultServiceFour={'Python'} consultServiceFive={''}  DevelopmentServiceOne={'Chatbot'}  DevelopmentServiceTwo={'Dialogflow'} DevelopmentServiceThree={'RPA'} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

            {Active === 4 && <MegaMenuCenter icon={<BsDatabaseFillGear className="text-4xl text-red-500" />} heading={'Data Solution'} subheading={'Transform with AI/ML experts'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Data Scientists '} consultServiceTwo={'Data Engineers'}  consultServiceThree={'ML Engineers'}  consultServiceFour={'TensorFlow'} consultServiceFive={''}  DevelopmentServiceOne={''}  DevelopmentServiceTwo={''} DevelopmentServiceThree={''} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

            {Active === 5 && <MegaMenuCenter icon={<MdOutlineDeveloperMode className="text-4xl text-red-500" />} heading={'Mobile'} subheading={'Hired skilled mobile developers'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Android '} consultServiceTwo={'iOS'}  consultServiceThree={'React Native'}  consultServiceFour={'Ionic'} consultServiceFive={''}  DevelopmentServiceOne={'Kotlin'}  DevelopmentServiceTwo={'Flutter'} DevelopmentServiceThree={'Swift'} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

            {Active === 6 && <MegaMenuCenter icon={<SiNextdotjs className="text-4xl text-red-500" />} heading={'Full Stack'} subheading={'Fullstack developers for hire'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'MEAN'} consultServiceTwo={'MERN'}  consultServiceThree={''}  consultServiceFour={''} consultServiceFive={''}  DevelopmentServiceOne={''}  DevelopmentServiceTwo={''} DevelopmentServiceThree={''} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

            {Active === 7 && <MegaMenuCenter icon={<FaDev className="text-4xl text-red-500" />} heading={'DevOps'} subheading={'Streamline with DevOps pros'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Azure'} consultServiceTwo={'AWS'}  consultServiceThree={''}  consultServiceFour={''} consultServiceFive={''}  DevelopmentServiceOne={''}  DevelopmentServiceTwo={''} DevelopmentServiceThree={''} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

            {Active === 8 && <MegaMenuCenter icon={<FaWordpress className="text-4xl text-red-500" />} heading={'CMS'} subheading={'Build powerful CMS solutions'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Drupal'} consultServiceTwo={'Wordpress'}  consultServiceThree={'Sitecore'}  consultServiceFour={'Shopify'} consultServiceFive={''}  DevelopmentServiceOne={''}  DevelopmentServiceTwo={''} DevelopmentServiceThree={''} DevelopmentServiceFour={''} DevelopmentServiceFive={''} />}

           </div>
           <div className="w-1/4 py-5">

           <MegaMenuRight heading={'Hire Dedicated Developer'} para={'Build faster with one-demand team'} iconOne={<GiTeamUpgrade className=" text-3xl text-red-500" />} headingOne={'Staff Augmentation'} headingOnePara={'Access top technical resources on-demand'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'Hire Software Developers'} headingTwoPara={'Work with skilled and dedicated developers'} iconThree={<FaPeopleGroup className=" text-3xl text-red-500" />} headingThree={'Dedicated Software Teams'} headingThreePara={'Hire dedicated developers'} iconFour={''} headingFour={''} headingFourPara={''}/>

           </div>
        </div>

      </div>
    </>
  )
}

export default HireMegaMenu
