import React from "react";
import Image from "next/image";

// import assets
import WhiteCloudBackground from "../../../public/assets/images/WhiteCloudBackground.png";

function OurEdges() {
  return (
    <section className="bg-white w-full max-sm:w-fit h-full">
      {/* background Image of cloud */}
      <div className=" relative grid max-w-screen-xl lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 items-center md:h-screen">
        <Image
          className="whiteCloudBackground"
          src={WhiteCloudBackground}
          alt="Cloud Background"
        />
        <div className="z-10 w-full col-span-6 ml-14">
          <h2 className="animate__animated animate__slideInLeft cursor-pointer max-sm:text-5xl sm:text-6xl  md:text-7xl lg:text-8xl font-semibold text-[#636468] tracking-tight ">
            OUR EDGES
          </h2>
        </div>
        <div className="z-10 w-full col-span-6">
          <div className="flex flex-wrap justify-center  "></div>
        </div>
      </div>
    </section>
  );
}

export default OurEdges;
