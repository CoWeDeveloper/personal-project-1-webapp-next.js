import Image from "next/image";
import AnimaServices from "./animation/AniServices"

// import data
import { servicesData } from "../../data/homeData";

function OurServices() {
  return (
      <section className="max-w-screen-full w-full h-auto bg-[#211C5D]">
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <AnimaServices />
        </div>
      </section>
  );
}

export default OurServices;
