import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Hcm/hcmsubbanner.svg"
import { hcmData } from "@/data/hcmData";

function HumInfo() {
  return (
    <div id="HcmInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >Cloud Tenants’ POS Select, is designed specifically for the food service industry to manage Restaurant Operations. It is suitable for small Food Kiosk to Fine Dining Restaurant chains.

            <br />
            <br />
            Our MS Power BI Dashboard is a game changer for businesses that helps management by enabling them to make efficient and effective decisions to propel their business to the height of growth and advancement. Now, Business administrators can manage multi-outlets effortlessly with just a few clicks with our Centralized Management System. Make your order-taking process faster and flawless with our Order Booking App, meanwhile enhance and empower your kitchen staff productivity with our KDS (Kitchen Display System), so they can manage their work efficiently. Make continuous improvements and gain customer trust with our Customer Loyalty App, Reservation/ waiting list App, and Customer feedback management App to make your customers’ experience a memorable one.
           </p>  
          {hcmData.map(( data: any) => (
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

export default HumInfo;
