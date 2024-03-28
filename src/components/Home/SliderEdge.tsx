"use client";
import React from "react";
//  import slider libary
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderEdge() {
  var settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
   
    autoplay: true,
    loop: true,
    mousewheel: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="flex-col flex-wrap items-center ">  

       <div className="flex container">
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">25+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Years of Industry Experience </div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">15+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Moblie Applications</div>
          </div>
 </div>
  
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">15+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center md:px-7 lg:px-7 xl:px-20"> Diversified Business Verticals Powered by Our S&D</div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">7+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center"> S&D Add-On Modules</div>
          </div>

        </div>
       </div>
   
        
      </div>

      <div>
      <div className="flex container xl:gap-14 lg:gap-10 md:gap-5">
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center"> 10,000+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Distribution Sites Implementation Experience </div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">150+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Highly Capable Team of Professionals</div>
          </div>
 </div>
  
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">200+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Restaurant & Food Outlets Implementation Experience </div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">100+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center">Supermarkets Implementation Experience </div>
          </div>

        </div>
       </div>
      </div>
      <div>
      <div className="flex container xl:gap-10 lg:gap-3 md:gap-1">
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">11+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center"> Offices in Pakistan & Growing</div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">3+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center"> Global Offices & Growing </div>
          </div>
    </div>
  
        <div className="flex-col flex-wrap">
          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">7+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center"> e.suite Modules for S&D Business Optimization </div>
          </div>

          <div className="flex-col justify-center items-center p-2 w-38">
            <div className="text-7xl font-bold text-[#22B8EE] text-center">6+</div>
            <div className="mt-2 text-gray-800 font-semibold text-sm text-center"> ERP Modules Suite </div>
          </div>

        </div>
       </div>
      </div>
    </Slider>
</div>
  );
}

export default SliderEdge;
