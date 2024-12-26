import React from "react";
import Link from "next/link";


const TechnologyMenuCenter = ({icon ,heading,subheading, listOneHeading, listTwoHeading, consultServiceOne, consultServiceTwo, consultServiceThree, consultServiceFour, consultServiceFive, consultServiceSix, consultServiceSeven, consultServiceEight, consultServiceNine, consultServiceTen, DevelopmentServiceOne,  DevelopmentServiceTwo,  DevelopmentServiceThree,  DevelopmentServiceFour , DevelopmentServiceFive, DevelopmentServiceSix, DevelopmentServiceSeven, DevelopmentServiceEight}) => {
  return (
    <>
    <div className="megamenu-center w-full " >
      <div className="w-full flex items-center gap-4 border-b-[1px]  pb-6 pl-6">
        <span data-aos="zoom-in" data-aos-duration="400">
          {icon}
        </span>
        <div data-aos="zoom-in" data-aos-duration="400">
          <h3 className="text-2xl font-medium capitalize">
           {heading}
          </h3>
          <p className="text-[#42545e] text-sm normal-case">{subheading}</p>
        </div>

      </div>
      <div className="w-full grid grid-cols-2 gap-3 py-6 pl-6">
        <div >
            <h3 className="text-xl capitalize pb-4" data-aos="zoom-in" data-aos-duration="400"> {listOneHeading}</h3>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 ">
                <li data-aos="zoom-in" data-aos-duration="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceOne}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold  whitespace-nowrap">{consultServiceTwo}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceThree}</p>
                
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceFour}</p>
                </Link></li>
                
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceFive}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="500"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceSix}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="600"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceSeven}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="700"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceEight}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="800" ><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceNine}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="900" ><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceTen}</p>
                </Link></li>

            </ul>
            </div>
        <div >
            <h3 className="text-xl capitalize pb-4" data-aos="zoom-in" data-aos-duration="400">{listTwoHeading}</h3>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 ">
                <li data-aos="zoom-in" data-aos-duration="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{DevelopmentServiceOne}</p>
                
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceTwo}</p>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceThree}</p>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceFour}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceFive}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="500"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceSix}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="600"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceSeven}</p>
                </Link></li>

                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="700"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceEight}</p>
                </Link></li>
            </ul>
            </div>
      </div>
    </div>
    </>
  );
};

export default TechnologyMenuCenter;
