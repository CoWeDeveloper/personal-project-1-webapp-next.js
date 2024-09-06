import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Production/prodsubbanner.png"
import { productionData } from "@/data/productionData";

function ProductionInfo() {
  return (
    <div id="ProductionInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >
          Join the league of businesses that have successfully transformed their production process with Cloud Tenants’ Production software. Stay ahead in this dynamic landscape of manufacturing with a strategic plan in all your production steps from production to order and return we got you covered with our Production software. We ensure better insights into your production process that result in cost-effective manufacturing operations.

            <br />
            <br />
            It offers tools that are designed to assist businesses in Managing, and optimizing their production processes. It helps you Streamline and automate various aspects of Production such as Planning, Scheduling, Inventory Management, Quality Control, and Reporting.
           </p>  
          {productionData.map(( data: any) => (
   <div key={data.id}>
        <h1 className="text-3xl text-black font-extrabold">
            {data.heading}
        </h1>
          <hr className="border-1 text-gray-900 my-2" />
            <div className="flex flex-wrap justify-center gap-4 px-auto text-center pt-7 pb-10">
            {data.cards.map((card: any) => {
                return (
                <div
                key={card.id}
                className="flex-col justify-center items-center py-2  "
                >
                    <Image
                    className="w-14 mx-auto"
                    src={card.url}
                    alt={card.title}
                    width={200}
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
    ))}
      </div>   
    </div>  
  )
}

export default ProductionInfo;
