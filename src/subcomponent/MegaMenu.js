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


const MegaMenu = () => {

   const [Active, setActive] = useState(2);

   const handleActive = (i)=>{
      setActive(i)
   }


  return (
    <>
      <div className='megamenus absolute top-0 w-[100vw] z-30 bg-white light-bg '>
        <div className="max-w-7xl mx-auto flex items-start gap-6">
           <div className="w-1/4 megamenu-left py-5 pr-3">
           <ul className='flex flex-col gap-2 '>
             <li className={`${Active === 1 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(1)}><span className='flex items-center gap-3'> <GrCloudSoftware className='text-xl'/> Software Development</span> <FaArrowRightLong className={ ` mega-icon transition-all duration-500 text-white invisible ${Active === 1 && "bg-active-icon"}`}/></li>

             <li className={`${Active === 2 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(2)}> <span className='flex items-center gap-3'> <MdOutlineDeveloperMode className='text-lg'/>Application Development </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={` ${Active === 3 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(3)}><span className='flex items-center gap-3'> <BsMicrosoftTeams className='text-xl'/> Software Team </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/> </li>

             <li className={` ${Active === 4 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(4)}>  <span className='flex items-center gap-3'> <FaCartPlus className='text-xl'/>eCommerce
              </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 5 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(5)}><span className='flex items-center gap-3'> <MdAutoGraph className='text-xl'/> QA and Testing </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={ `${Active === 6 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(6)}> <span className='flex items-center gap-3'> <MdCloudDone className='text-xl'/> Cloud Testing  </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={` ${Active === 7 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(7)}><span className='flex items-center gap-3'> <BsDatabaseFillGear className='text-xl'/>Data Solution </span> <FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>

             <li className={`${Active === 8 && "bg-active"} mega-list p-3 flex items-center gap-3 w-full justify-between rounded-md text-[#18455D] capitalize `} onClick={()=>handleActive(8)}><span className='flex items-center gap-3'> <FaBrain className='text-xl'/> AI & ML Solution </span><FaArrowRightLong className='mega-icon transition-all duration-500 text-white invisible'/></li>
           </ul>
           
           </div>
           <div className="w-2/4  h-full py-5">
               
            {Active === 1 && <MegaMenuCenter icon={<GrCloudSoftware className="text-4xl text-red-500" />} heading={'Software Development'} subheading={'Innovative, future-proof software solutions'} listOneHeading={'Consulting'} listTwoHeading={'Development'} consultServiceOne={'Software Consulting'} consultServiceOnePara={'Expert advice on tech'} consultServiceTwo={'IT Consulting'} consultServiceTwoPara={'Expert IT solutions, delivered'} consultServiceThree={'Agile Consulting'} consultServiceThreePara={'Agile expertise, faster results'} consultServiceFour={'CRM Consulting'} consultServiceFourPara={'Optimizing Customers Relation'} DevelopmentServiceOne={'Custom Software'} DevelopmentServiceOnePara={'Tailored solutions for excellence'} DevelopmentServiceTwo={'Enterprise Software'}  DevelopmentServiceTwoPara={'Powering enterprise growth'} DevelopmentServiceThree={'Software Product Engineering '} DevelopmentServiceThreePara={'Building market ready software'} DevelopmentServiceFour={'Application Development'} DevelopmentServiceFourPara={'Transform idea into powerful apps'}/>}

            {Active === 2 && <MegaMenuCenter icon={<MdOutlineDeveloperMode className="text-4xl text-red-500" />}  heading={'Application Development'} subheading={'And-to-end app development'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Web App Development'} consultServiceOnePara={'Innovative browser application'} consultServiceTwo={'Mobile App Development'} consultServiceTwoPara={'Seamless Mobile Experience'} consultServiceThree={'API Development'} consultServiceThreePara={'Efficient API development'} consultServiceFour={'Website & Portal Development'} consultServiceFourPara={'Secure user-centric solution'} DevelopmentServiceOne={'Front End Development'} DevelopmentServiceOnePara={'Flawless UI/UX creation'} DevelopmentServiceTwo={'Backend Development'}  DevelopmentServiceTwoPara={'Robust server/client experience'} DevelopmentServiceThree={'Cross-Platform App Development'} DevelopmentServiceThreePara={'Unified multi-platform solution'} DevelopmentServiceFour={'Full Stack Development'} DevelopmentServiceFourPara={'Secure scalable applications '}/>}

            {Active === 3 && <MegaMenuCenter icon={<BsMicrosoftTeams className="text-4xl text-red-500" />}  heading={'Dedicated Software Team'} subheading={'Skilled developers, Transparent billing '} listOneHeading={'Expertise'} listTwoHeading={'solutions'} consultServiceOne={'Staff Augmentation'} consultServiceOnePara={'Access top technical resources on-demand'} consultServiceTwo={'Hire Software Developers'} consultServiceTwoPara={'Work with skilled & dedicated developers'} consultServiceThree={'IT Outsourcing'} consultServiceThreePara={'Technical expertise, shared time zone'} consultServiceFour={''} consultServiceFourPara={''} DevelopmentServiceOne={'Offshore Development Center'} DevelopmentServiceOnePara={'Unleash the power of offshore development'} DevelopmentServiceTwo={'Offshore Software Development'}  DevelopmentServiceTwoPara={'Leverage talent, cost-effectiveness'} DevelopmentServiceThree={'Nearshore Software Development'} DevelopmentServiceThreePara={'Technical expertise, shared time zone'} DevelopmentServiceFour={'Software Development in India'} DevelopmentServiceFourPara={'Technical expertise, shared time zone'}/>}

            {Active === 4 && <MegaMenuCenter icon={<FaCartPlus className="text-4xl text-red-500" />}  heading={'eCommerce'} subheading={'Next level solution for B2B & B2C'} listOneHeading={'Expertise'} listTwoHeading={'Technology'} consultServiceOne={'eCommerce Consulting'} consultServiceOnePara={'Your store, our success strategy'} consultServiceTwo={'eCommerce Web Design'} consultServiceTwoPara={'Designing conversion pathways'} consultServiceThree={'eCommerce Implementation'} consultServiceThreePara={'Bring digital storefronts to life'} consultServiceFour={'Maintenance & Support'} consultServiceFourPara={'Elevate every eExperience'} DevelopmentServiceOne={'Magento'} DevelopmentServiceOnePara={' Work with certified Magento developers'} DevelopmentServiceTwo={'Shopify'}  DevelopmentServiceTwoPara={'Create top-quality eCommerce services'} DevelopmentServiceThree={'WooCommerce'} DevelopmentServiceThreePara={'Make eCommerce site more responsive'} DevelopmentServiceFour={''} DevelopmentServiceFourPara={''}/>}

            {Active === 5 && <MegaMenuCenter icon={<MdAutoGraph className="text-4xl text-red-500" />}  heading={'QA & Testing'} subheading={'Comprehensive QA & testing solutions'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'QA Consulting'} consultServiceOnePara={'Define policies, audit compliance, monitor quality'} consultServiceTwo={'Application Testing'} consultServiceTwoPara={'Ensure quality, performance, functionality'} consultServiceThree={'Mobile App Testing'} consultServiceThreePara={'Validate mobile apps for optimal performance'} consultServiceFour={'Web App Testing'} consultServiceFourPara={'Make flawless apps for improved performance'} DevelopmentServiceOne={'Testing Teams'} DevelopmentServiceOnePara={'Testing experts for every stage & environment'} DevelopmentServiceTwo={'Hire Software QA'}  DevelopmentServiceTwoPara={'Plan, build, deliver quality products'} DevelopmentServiceThree={'QA Outsourcing'} DevelopmentServiceThreePara={'Hire experts for flawless performance'} DevelopmentServiceFour={''} DevelopmentServiceFourPara={''}/>}

            {Active === 6 && <MegaMenuCenter icon={<MdCloudDone className="text-4xl text-red-500" />}  heading={'Cloud Services'} subheading={'Seamless, secure, superior cloud services'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Cloud Strategy & Consulting'} consultServiceOnePara={'Strategic cloud guidance'} consultServiceTwo={'DevOps as a Service'} consultServiceTwoPara={'Effortless DevOps integration'} consultServiceThree={'24x7 Managed Services'} consultServiceThreePara={'Round-the-clock seamless service'} consultServiceFour={''} consultServiceFourPara={''} DevelopmentServiceOne={'Cloud FinOps Services'} DevelopmentServiceOnePara={'Cloud savings made simple'} DevelopmentServiceTwo={'Cloud Migration'}  DevelopmentServiceTwoPara={'Seamless, swift cloud transition'} DevelopmentServiceThree={''} DevelopmentServiceThreePara={''} DevelopmentServiceFour={''} DevelopmentServiceFourPara={''}/>}

            {Active === 7 && <MegaMenuCenter icon={<BsDatabaseFillGear className="text-4xl text-red-500" />}  heading={'Data Solution'} subheading={'Turn data into success'} listOneHeading={''} listTwoHeading={''} consultServiceOne={'Data engineering'} consultServiceOnePara={'Create scalable data systems'} consultServiceTwo={'Data Science'} consultServiceTwoPara={'Innovate with data science'} consultServiceThree={'Data Analytics'} consultServiceThreePara={'Turn data into strategies'} consultServiceFour={''} consultServiceFourPara={''} DevelopmentServiceOne={'Business Intelligence (BI)'} DevelopmentServiceOnePara={'Drive success with BI insights'} DevelopmentServiceTwo={'Data Visualization and Dashboarding '}  DevelopmentServiceTwoPara={'Visualize data, drive clarity'} DevelopmentServiceThree={'Big Data'} DevelopmentServiceThreePara={'Big data, smarter solutions'} DevelopmentServiceFour={''} DevelopmentServiceFourPara={''}/>}

            {Active === 8 && <MegaMenuCenter icon={<FaBrain className="text-4xl text-red-500" />}  heading={'AI & ML Solution'} subheading={'Derive technological innovation'} listOneHeading={'Artificial Intelligence'} listTwoHeading={'MI & Advanced Analytics '} consultServiceOne={'AI Consulting'} consultServiceOnePara={'Navigating AI is future'} consultServiceTwo={'AI Development'} consultServiceTwoPara={'Advancing intelligent solutions'} consultServiceThree={'AI Chatbot Development'} consultServiceThreePara={'Future-ready chatbots '} consultServiceFour={'AI-Powered App Development'} consultServiceFourPara={'Innovative AI mobile apps'} DevelopmentServiceOne={'MLOps Consulting'} DevelopmentServiceOnePara={'ML operations optimized'} DevelopmentServiceTwo={'ML Development'}  DevelopmentServiceTwoPara={'Harnessing data power'} DevelopmentServiceThree={'Computer Vision Solutions'} DevelopmentServiceThreePara={'Transforming visual data'} DevelopmentServiceFour={'RPA Services'} DevelopmentServiceFourPara={'Efficient RPA automation'}/>}
           </div>
           <div className="w-1/4 py-5">


            {Active === 1 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}

            {Active === 2 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}


            {Active === 3 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 4 && <MegaMenuRight heading={'Solutions'} para={'Boost sales with smart eCommerce'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'B2C eCommerce'} headingOnePara={'Gain more customers with B2C solutions'} iconTwo={ <BsBuildingsFill className=" text-3xl text-red-500" />} headingTwo={'B2B eCommerce'} headingTwoPara={'Create digital business solutions with B2B'} iconThree={<MdWebStories className=" text-3xl text-red-500" />} headingThree={'Web Portals'} headingThreePara={'Build user-friendly, feature-rice store'} iconFour={<FaSellcast className=" text-3xl text-red-500" />} headingFour={'Supply Chain Automation'} headingFourPara={'Streamline, optimize, automate supply chain'}/>}

            {Active === 5 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 6 && <MegaMenuRight heading={'Technologies'} para={'Innovating the Future'} iconOne={<FaAws className=" text-3xl text-red-500" />} headingOne={'Amazon AWS'} headingOnePara={'Build, scale, innovate on AWS'} iconTwo={ <VscAzure className=" text-3xl text-red-500" />} headingTwo={'Azure'} headingTwoPara={'End-to-end automation solutions'} iconThree={<SiGooglecloud className=" text-3xl text-red-500" />} headingThree={'Google Cloud'} headingThreePara={'Explore limitless potential with google'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 7 && <MegaMenuRight heading={'Client Type'} para={'Tailored solutions for all businesses'} iconOne={<MdRocketLaunch className=" text-3xl text-red-500" />} headingOne={'For Startups'} headingOnePara={'Custom software for business goals'} iconTwo={ <MdFactory className=" text-3xl text-red-500" />} headingTwo={'For Enterprises'} headingTwoPara={'End-to-end automation solutions'} iconThree={<BsBuildingsFill className=" text-3xl text-red-500" />} headingThree={'For Agencies'} headingThreePara={'Expand with white-label services'} iconFour={''} headingFour={''} headingFourPara={''}/>}

            {Active === 8 && <MegaMenuRight heading={'Other Services'} para={'Explore our diverse services'} iconOne={<MdAppShortcut className=" text-3xl text-red-500" />} headingOne={'Application Modernization'} headingOnePara={'Update your application'} iconTwo={ <MdAppSettingsAlt className=" text-3xl text-red-500" />} headingTwo={'OTT App Development'} headingTwoPara={'Innovative, future-proof software'} iconThree={<MdOutlineSupportAgent className=" text-3xl text-red-500" />} headingThree={'App Maintenance & Support'} headingThreePara={'Innovative, future-proof software'} iconFour={<MdCloudDone className=" text-3xl text-red-500" />} headingFour={'Cloud App Development'} headingFourPara={'Innovative, future-proof software'}/>}

           </div>
        </div>

      </div>
    </>
  )
}

export default MegaMenu
