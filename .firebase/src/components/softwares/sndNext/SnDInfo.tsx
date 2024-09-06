"use client";
import {motion, useAnimation} from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/assets/images/Software/SnDNext/sndNHeader.svg"

import AniSnDInfo from "./animation/AniSnDInfo";

function SnDInfo() {


  return (
    <div id="SnDInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
      
         <AniSnDInfo />
   

<div className="flex justify-center">
 <Link  href={'/softwares/snd-esuite'}>
   <button className="ring-[#0A9AC8] text-[#0A9AC8] duration-500 transition-all px-5 py-2.5 text-xs font-medium ring-2 focus:outline-none rounded-lg text-center mx-auto flex w-fit justify-center hover:bg-[#066B8A] hover:text-white hover:ring-[#066B8A]">
Explore S&D Add-On Modules
</button>
</Link>
</div>
      </div>   
    </div>
  )
}

export default SnDInfo;
