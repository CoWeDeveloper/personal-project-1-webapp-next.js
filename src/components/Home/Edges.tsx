import Image from "next/image";
import AnimaEdge from "./animation/AniEdge";

import WhiteCloudBackground from "../../../public/assets/images/WhiteCloudBackground.png";

function OurEdges() {
  return (  
    <section className="bg-white w-full -z-10  lg:h-screen ">
      {/* background Image of cloud */}
      <div className=" relative overflow-hidden grid max-w-screen-xl lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 items-center w-full md:h-full sm:h-fit ">
        <Image
          className="whiteCloudBackground flex w-[100%]"
          src={WhiteCloudBackground}
          alt="Cloud Background"
        />
        <AnimaEdge />
      </div>
    </section>
  );
}

export default OurEdges;
