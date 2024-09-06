import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Import/importsubbanner.png"
import { importData } from "@/data/importData";

function ImportInfo() {
  return (
    <div id="ImportInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >
          Cloud Tenants’ import module ensures that the import operations adhere to custom regulatory standards that avoid penalties and minimize delays. Our import module ensures accurate calculations of taxes and import duties and helps businesses to get precise tax management. Now, you may have a seamless import journey with a simplified LC opening and arrival procedure, multi-currency financial setup, and much more with our high-tech import+ management software.

            <br />
            <br />
            It manages Landed Cost Tracking, Duty and Taxes, LC Opening/Arrival, and Import Good Received Notes (GRN).
           </p>  
          {importData.map(( data: any) => (
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

export default ImportInfo;
