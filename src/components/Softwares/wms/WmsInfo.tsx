import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Wms/wmssubbanner.png";
import { wmsData } from "@/data/wmsData";

function SnDInfo() {
  return (
    <div className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
        <div className="flex justify-center items-center">
          <Image src={banner} alt="banner" width={600} />
        </div>
        <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]">
        Cloud Tenants’ WMS Extended is a Highly Efficient and effective software to manage Inventory and Stock movement in the Warehouse. The Software is designed to manage extensive operations of the Warehouse, including Inventory Management, Storage, and Movement of goods.

          <br />
          <br />
          Get business intelligence and static reports with our user-friendly Power BI dashboards. We aim to reduce operational costs and eliminate human errors from data entry to inventory management, ensuring optimal accuracy at every step. WMS Extended helps to provide businesses maintain accurate stock control as per warehouse layout and storage configuration. Maximize your available warehouse space now with our system-generated suggestions and MRP forecasting features.
        </p>

        {wmsData.map((data: any) => (
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
                      <h2 className="  px-4 py-1 text-center  text-sm">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnDInfo;
