"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CounterAnimation from "./CounterAnimation";

function SliderEdge() {
  const sliderRef = useRef<Slider | null>(null);
  const [sliderKey, setSliderKey] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    loop: true,
    mousewheel: true,
    beforeChange: () => {
      setSliderKey((prevKey) => prevKey + 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          mousewheel: true,
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container justify-center items-center mx-auto w-64 md:w-96 lg:w-full">
      <Slider  ref={sliderRef} {...sliderSettings}>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center xl:gap-14 lg:gap-10 md:gap-1">
            <div className="flex-col flex-wrap items-center justify-center">
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-4xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={25} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Years of Industry Experience
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-4xl sm:text-md font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={15} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold sm:text-sm text-center">
                  Mobile Applications
                </div>
              </div>
            </div>
            <div className="flex-col flex-wrap items-center justify-center">
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-4xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={15} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Diversified Business Verticals Powered by Our S&D
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-4xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={7} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  S&D Add-On Modules
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-[100%] xl:gap-14 lg:gap-10 md:gap-5">
            <div className="flex-col flex-wrap">
              <div className="flex-col justify-center items-center p-0 lg:w-64">
                <div className="lg:text-7xl text-3xl  font-bold text-[#22B8EE] text-center">
                  <CounterAnimation  key={sliderKey } value={10000} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Distribution Sites Implementation Experience
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={150} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Highly Capable Team of Professionals
                </div>
              </div>
            </div>
            <div className="flex-col flex-wrap">
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={200} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Restaurant & Food Outlets Implementation Experience
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={100} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Supermarkets Implementation Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-[100%] xl:gap-14 lg:gap-10 md:gap-5">
            <div className="flex-col flex-wrap">
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={11} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Offices in Pakistan & Growing
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={3} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  Global Offices & Growing
                </div>
              </div>
            </div>
            <div className="flex-col flex-wrap">
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={7} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  E.Suite Modules for S&D Business Optimization
                </div>
              </div>
              <div className="flex-col justify-center items-center p-2 lg:w-64">
                <div className="lg:text-7xl text-3xl font-bold text-[#22B8EE] text-center">
                  <CounterAnimation key={sliderKey} value={6} />+
                </div>
                <div className="mt-2 text-gray-800 font-semibold text-sm text-center">
                  ERP Modules Suite
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderEdge;
