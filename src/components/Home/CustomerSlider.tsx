"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { customersData } from "@/data/customersData";

function AutoPlay() {
  const row1Data = customersData.filter((data: any, index: number) => index % 2 === 0 && data.id <= 16);
  const row2Data = customersData.filter((data: any, index: number) => index % 2 !== 0 && data.id <= 16);

  const settingsRow1 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          rtl: true,
          rows: 1,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          rtl: true,
          rows: 1,
        }
      }
    ]
  };

  const settingsRow2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          rtl: false,
          rows: 1,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          rtl: false,
          rows: 1,
        }
      }
    ]

  };

  return (
    <div className="slider-container">
      <div className="row-1 mb-4">
        <Slider {...settingsRow1}>
          {row1Data.map((data: any) => (
            <div key={data.id} className="place-content-center w-full h-24">
              <div className="w-64 flex justify-center items-center">
                <Image className="flex items-center justify-center w-28 " src={data.logo} width={200} height={200} alt={data.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="row-2">
        <Slider {...settingsRow2}>
          {row2Data.map((data: any) => (
            <div key={data.id} className="place-content-center w-full h-24">
              <div className="w-64 flex justify-center items-center">
                <Image className="flex items-center justify-center w-28" src={data.logo} width={200} height={200} alt={data.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
