import AniServices from "./animation/AniServices";
// import data
import { networkData } from "@/data/networkData";

function Services() {
  return (
    <>
      {networkData.map((networkData, index) => {
        const bgColor = index % 2 == 0 ? "bg-white" : "bg-gray";
     
        return (
          <section id="Services" key={networkData.id} className={` ${bgColor} w-full h-fit overflow-hidden`}>
           <AniServices networkData={networkData  } /> 
          </section>
        );
      })}
    </>
  );
}

export default Services;
