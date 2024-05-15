import Image from "next/image";
import banner from "../../../../public/assets/images/Software/PosXtreme/posxsubbanner.svg"
import { posXData } from "@/data/posXtremeData";

function SnDInfo() {
  return (
    <div className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >Cloud Tenants’ POS Xtreme is a leading Point of Sale Solution suitable for Small Retail Shops to Multi Outlets Businesses. It is the Central Hub for processing Sales, Managing Inventory, and providing an overall Seamless Customer Experience.

            <br />
            <br />
            We are here to provide a Competitive advantage over the dynamic retail market, with our scalable and versatile system. POS Xtreme fosters customer management and relationships with its Comprehensive Loyalty Program module, which empowers businesses with repetitive sales and customer satisfaction. Minimize long queues and accelerate checkouts with our Comprehensive Sales Module and Digital Payment Integration.</p>
         
          {posXData.map(( data: any) => (
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
    ))}

      </div>   
    </div>
  )
}

export default SnDInfo
