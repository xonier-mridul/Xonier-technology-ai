"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {ssr: false });

const CenterModeCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "20%", 
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true, 
  };

  const images = [
    {no:1, title: "Software Development", src: "/img1.jpg", alt: "Image 1" },
    {no:2, title: "Front Development", src: "/web.jpg", alt: "Image 2" },
    {no:3, title: "Back Development", src: "/backend.jpg", alt: "Image 3" },
    {no:4, title: "App Development" , src: "/app-development.jpg", alt: "Image 4" },
    {no:5, title: "AI Development", src: "/ai.jpg", alt: "Image 5" },
  ];

  return (
    <div className="slider-container mx-auto w-full overflow-hidden py-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative transition-transform duration-500 ease-in-out"
          >
            <div
              className="image-wrapper flex justify-center items-center w-[700px] h-96 mx-auto rounded-lg overflow-hidden bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="bg-white flex flex-col gap-6 p-8 pt-10 ">
                <h4 className="absolute">{image.no}</h4>
                <h3 className="text-2xl font-semibold">
                  {image.title}
                </h3>
                <p className="opacity-85">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </p>
                <Link
                  className="flex items-center gap-3 text-[#18455D] font-semibold"
                  href={""}
                >
                  Learn More <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      
      <style jsx>{`
        .slick-center .image-wrapper {
          transform: scale(1.2); /* Scale up center slide */
          transition: transform 0.5s ease-in-out;
          z-index: 2; /* Bring the center slide to the front */
        }

        .slick-slide:not(.slick-center) .image-wrapper {
          opacity: 0.6; /* Dim non-center slides */
          transform: scale(0.9); /* Slightly reduce size of other slides */
        }
      `}</style>
    </div>
  );
};

export default CenterModeCarousel;
