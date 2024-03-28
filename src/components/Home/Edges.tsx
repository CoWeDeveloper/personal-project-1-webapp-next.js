
import React from "react";
import Image from "next/image";
// import slider libary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import assets
import SliderEdge from "./SliderEdge";
import WhiteCloudBackground from "../../../public/assets/images/WhiteCloudBackground.png";


function OurEdges() {
  return (
    <section className="bg-white w-full  h-full">
      {/* background Image of cloud */}
      <div className="relative grid max-w-screen-xl lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 items-center md:h-screen">
        <Image
          className="whiteCloudBackground"
          src={WhiteCloudBackground}
          alt="Cloud Background"
        />
        <div className="z-10 w-full lg:col-span-6  lg:ml-14 sm:ml-4 md:ml-2">
          <h2 className="animate__animated animate__slideInLeft  cursor-pointer text-4xl leading-none md:text-6xl xl:text-8xl font-semibold text-[#636468] tracking-tight ">
            OUR EDGES
          </h2>
        </div>
        <div className="z-10 col-span-6 ">
         
            
            <SliderEdge  />
          



          
            

            
    
        </div>
      </div>
    </section>
  );
}

export default OurEdges;
