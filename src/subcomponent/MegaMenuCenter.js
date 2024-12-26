import React from "react";
import Link from "next/link";


const MegaMenuCenter = ({icon ,heading,subheading, listOneHeading, listTwoHeading, consultServiceOne, consultServiceOnePara, consultServiceTwo, consultServiceTwoPara, consultServiceThree,consultServiceThreePara, consultServiceFour, consultServiceFourPara,consultServiceFive, consultServiceFivePara, DevelopmentServiceOne, DevelopmentServiceOnePara, DevelopmentServiceTwo, DevelopmentServiceTwoPara, DevelopmentServiceThree, DevelopmentServiceThreePara, DevelopmentServiceFour, DevelopmentServiceFourPara, DevelopmentServiceFive, DevelopmentServiceFivePara}) => {
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
                <li data-aos="zoom-in" data-aos-duration="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceOne}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{consultServiceOnePara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceTwo}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{consultServiceTwoPara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceThree}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{consultServiceThreePara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceFour}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{consultServiceFourPara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{consultServiceFive}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{consultServiceFivePara}</span>
                </Link></li>
            </ul>
            </div>
        <div >
            <h3 className="text-xl capitalize pb-4" data-aos="zoom-in" data-aos-duration="400">{listTwoHeading}</h3>
            <ul className="flex flex-col gap-2">
                <li data-aos="zoom-in" data-aos-duration="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e] font-semibold whitespace-nowrap">{DevelopmentServiceOne}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{DevelopmentServiceOnePara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceTwo}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{DevelopmentServiceTwoPara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceThree}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{DevelopmentServiceThreePara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceFour}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{DevelopmentServiceFourPara}</span>
                </Link></li>
                <li data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400"><Link className="mega-center-list" href={''} >
                <p className="normal-case text-[#42545e]  font-semibold whitespace-nowrap">{DevelopmentServiceFive}</p>
                <span className="normal-case text-[#42545e] font-normal whitespace-nowrap">{DevelopmentServiceFivePara}</span>
                </Link></li>
            </ul>
            </div>
      </div>
    </div>
    </>
  );
};

export default MegaMenuCenter;
