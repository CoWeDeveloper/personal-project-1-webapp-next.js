"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Logo from "../../../public/assets/images/Customers/c1.png"
import { customersData }  from "@/data/customersData";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container bg-yellow-400">
      <Slider {...settings}>
      {customersData
  .filter((data: any) => data.id <= 7)
  .map(

    (data: any) => {return(
    <div key={data.id} className="bg-green-400 mx-auto flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-64 mx-auto">
      <Image className="flex items-center justify-center w-36" src={data.logo} width={200} height={200} alt={data.alt} />
        </div>
    </div>
  )})}
        {/* <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
}

export default AutoPlay;