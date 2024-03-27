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
    slidesToScroll: 1,
  };
  return (
    <Slider className="w-full" {...settings}>
      <div className="lg:flex-row md:flex-col sm:flex-col flex-wrap items-center ">


        <div className="lg:flex md:flex ms:md:flex-col flex-warp justify-between  px-4 md:mb-8 text-center ">
          <div className="p-7 text-center">
            <span className="text-7xl font-bold text-[#22B8EE]">
              10,000+
            </span>
            <p className="mt-2 text-gray-800 font-semibold text-sm">
              Distribution Sites Implementation Experience
            </p>
          </div>
          <div className="p-7 text-center">
            <span className="text-7xl font-bold text-[#22B8EE]">
              150+
            </span>
            <p className="mt-2 text-gray-800 font-semibold text-sm">
              Highly Capable Team of Professionals
            </p>
          </div>
        </div>
   

        <div className="lg:flex md:flex ms:md:flex-col flex-warp justify-between px-4 md:mb-8 text-center ">
          <div className=" p-7 text-center">
            <span className="text-7xl font-bold text-[#22B8EE]">
              200+
            </span>
            <p className="mt-2 text-gray-800 font-semibold text-sm">
              Restaurant & Food Outlets Implementation Experience
            </p>
          </div>
          <div className="p-7 text-center">
            <span className="text-7xl font-bold text-[#22B8EE]">
            100+
            </span>
            <p className="mt-2 text-gray-800 font-semibold text-sm">
            Supermarkets Implementation Experience
            </p>
          </div>
        </div>
   
        
      </div>

      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}

export default SliderEdge;
