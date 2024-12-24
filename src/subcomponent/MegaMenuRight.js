import React from "react";


import Link from "next/link";

const MegaMenuRight = ({heading, para, iconOne, headingOne, headingOnePara, iconTwo, headingTwo, headingTwoPara, iconThree, headingThree, headingThreePara, iconFour, headingFour, headingFourPara}) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col  border-b-[1px] pb-6 " >
          <h3 className="text-2xl font-medium capitalize" data-aos="zoom-in" data-aos-duration="400">{heading}</h3>
          <p className="text-[#42545e] text-sm normal-case" data-aos="zoom-in" data-aos-duration="400">
            {para}
          </p>
        </div>
        <ul className="w-full py-6 flex flex-col gap-5">
          <li>
            <Link className="flex items-center gap-3" href={"/"} data-aos="zoom-in" data-aos-duration="400">
              <span>
                {iconOne}
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  {headingOne}
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  {headingOnePara}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
              
              <span>
               {iconTwo}
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  {headingTwo}
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  {headingTwoPara}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="200">
              
              <span>
                {iconThree}
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  {headingThree}
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  {headingThreePara}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"} data-aos="zoom-in" data-aos-duration="400" data-aos-delay="300">
              
              <span>
                {iconFour}
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                 {headingFour}
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  {headingFourPara}
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MegaMenuRight;
