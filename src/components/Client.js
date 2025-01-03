"use client"
import React from "react";
import SubHeading from "@/subcomponent/SubHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Client = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: false,
    pauseOnHover: false
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed:0,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: false
  };
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex flex-col gap-3 items-center justify-center pb-14">
          <SubHeading heading={"Developers with Technology"} pos={"center"} />
          <h2 className="text-5xl font-black leading-tight capitalize">
            Our Clients
          </h2>
        </div>
        <div className="w-full ">
        <Slider {...settings1}>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" >
          <Image
          src={'/last-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="200">
        <Image
          src={'/goalster-logo.png'}
          width={100}
          height={100}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="400">
        <Image
          src={'/alhokair-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="600">
        <Image
          src={'/pharma-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="800">
        <Image
          src={'/wecare-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="1000">
        <Image
          src={'/chelsea-logo.png'}
          width={120}
          height={120}
          quality={100}
          alt="logos"
          />
        </div>
      </Slider>
        <Slider {...settings2}>
        <div  className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" >
        <Image
          src={'/altius-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div >
        <div className="flex justify-center items-center h-40 " data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="200">
        <Image
          src={'/target-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="400">
        <Image
          src={'/aaxel-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="600">
        <Image
          src={'/one-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="800">
        <Image
          src={'/ethio-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="1000">
        <Image
          src={'/memz.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
      </Slider>
      <Slider {...settings1}>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" >
          <Image
          src={'/sejel-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="200">
        <Image
          src={'/ison-logo.png'}
          width={100}
          height={100}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="400">
        <Image
          src={'/alhokair-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="600">
        <Image
          src={'/pharma-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="800">
        <Image
          src={'/wecare-logo.png'}
          width={150}
          height={150}
          quality={100}
          alt="logos"
          />
        </div>
        <div className="flex justify-center items-center h-40" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="1000">
        <Image
          src={'/chelsea-logo.png'}
          width={120}
          height={120}
          quality={100}
          alt="logos"
          />
        </div>
      </Slider>

        </div>
      </div>
    </>
  );
};

export default Client;
