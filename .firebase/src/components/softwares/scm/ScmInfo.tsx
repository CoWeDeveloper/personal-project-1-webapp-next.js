import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Scm/scmsubbanner.png";
import { scmData } from "@/data/scmData";

function ScmInfo() {
  return (
    <div id="ScmInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
        <div className="flex justify-center items-center">
          <Image src={banner} alt="banner" width={600} />
        </div>
        <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]">
        Cloud Tenants’ SCM+ (Supply Chain Management) solution offers an end-to-end Supply Chain Cycle. Our module manages the Procurement, Inventory, and Distribution of Materials and Products and the management of Vendors and Suppliers.

          <br />
          <br />

          Maximize your inventory levels and minimize your operational costs by having accurate control and administration over stock management. Make your supply chain process as smooth as silk, by utilizing our latest features of SCM+. Automate your procurement processes and get warehouse team collaboration more than ever before with our Supply Chain Management App.        </p>

        {scmData.map((data: any) => (
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
                    <div className="mx-auto w-[170px] ">
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

export default ScmInfo;
