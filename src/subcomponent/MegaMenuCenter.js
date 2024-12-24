import React from "react";
import Link from "next/link";


const MegaMenuCenter = ({icon ,heading,subheading, listOneHeading, listTwoHeading, consultServiceOne, consultServiceOnePara, consultServiceTwo, consultServiceTwoPara, consultServiceThree,consultServiceThreePara, consultServiceFour, consultServiceFourPara, DevelopmentServiceOne, DevelopmentServiceOnePara, DevelopmentServiceTwo, DevelopmentServiceTwoPara, DevelopmentServiceThree, DevelopmentServiceThreePara, DevelopmentServiceFour, DevelopmentServiceFourPara}) => {
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
            <ul className="flex flex-col gap-2 ">
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceOne}</p>
                <span className="normal-case text-[#42545e] font-normal">{consultServiceOnePara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceTwo}</p>
                <span className="normal-case text-[#42545e] font-normal">{consultServiceTwoPara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceThree}</p>
                <span className="normal-case text-[#42545e] font-normal">{consultServiceThreePara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e] font-semibold">{consultServiceFour}</p>
                <span className="normal-case text-[#42545e] font-normal">{consultServiceFourPara}</span>
                </Link></li>
            </ul>
            </div>
        <div >
            <h3 className="text-xl capitalize pb-4" data-aos="zoom-in" data-aos-duration="400">{listTwoHeading}</h3>
            <ul className="flex flex-col gap-2">
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400">
                <p className="normal-case text-[#42545e] font-semibold">{DevelopmentServiceOne}</p>
                <span className="normal-case text-[#42545e] font-normal">{DevelopmentServiceOnePara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceTwo}</p>
                <span className="normal-case text-[#42545e] font-normal">{DevelopmentServiceTwoPara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceThree}</p>
                <span className="normal-case text-[#42545e] font-normal">{DevelopmentServiceThreePara}</span>
                </Link></li>
                <li><Link className="mega-center-list" href={''} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
                <p className="normal-case text-[#42545e]  font-semibold">{DevelopmentServiceFour}</p>
                <span className="normal-case text-[#42545e] font-normal">{DevelopmentServiceFourPara}</span>
                </Link></li>
            </ul>
            </div>
      </div>
    </div>
    </>
  );
};

export default MegaMenuCenter;
