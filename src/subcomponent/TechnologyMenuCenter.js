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
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceOne}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceTwo}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceThree}</p>
                
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceFour}</p>
                </Link></li>
                
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceFive}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceSix}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceSeven}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceEight}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceNine}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceTen}</p>
                </Link></li>

            </ul>
            </div>
        <div >
            <h3 className="text-xl capitalize pb-4" data-aos="zoom-in" data-aos-duration="400">{listTwoHeading}</h3>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 ">
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400">
                <p className="normal-case text-[#42545e] font-semibold">{DevelopmentServiceOne}</p>
                
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceTwo}</p>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceThree}</p>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceFour}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceFive}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceSix}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceSeven}</p>
                </Link></li>

                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceEight}</p>
                </Link></li>
            </ul>
            </div>
      </div>
    </div>
    </>
  );
};

export default TechnologyMenuCenter;
