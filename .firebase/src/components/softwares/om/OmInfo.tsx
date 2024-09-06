import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Om/omsubbanner.png";
import { omData } from "@/data/omData";

function OmInfo() {
  return (
    <div id="PosSInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />
           </div> 
            <div className="flex flex-wrap justify-center gap-4 px-auto text-center pt-7 pb-10">
            {omData.map((card: any) => {
              console.log(card)
                return (
                <div
                key={card.id}
                className="flex-col justify-center items-center py-2"
                >
                    <Image
                    className="w-14 mx-auto"
                    src={card.url}
                    alt={card.title}
                    width={150}
                    height={100}
                    />
                    <div className="mx-auto  w-[170px]">
                    <h2 className="  px-4 py-1 text-center  text-sm">{card.title}</h2>
                    </div>
                </div>
                );
            })}
            </div>
   
   
      </div>   
    </div>
  )
}

export default OmInfo;
