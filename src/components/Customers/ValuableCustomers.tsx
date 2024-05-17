import Image from "next/image";

// import assets
import { customersData } from "@/data/customersData";

function ValuableCustomers() {
  return (
    <section id="ValCustomers" className=" w-full h-fit bg-white">
      <div className="max-w-screen-lg mx-auto pt-20">
        <h2 className="text-center text-4xl text-black font-black">
          Our Valuable Customers
        </h2>
        <div className="flex flex-wrap justify-center gap-14 px-10 pt-7 pb-10">
          {customersData.map((customersData) => {
            return (
              <div
                key={customersData.id}
                className="flex justify-center items-center"
              >
                <Image
                  className="w-20 "
                  src={customersData.logo}
                  title={customersData.alt}
                  alt={customersData.alt}
                  width={100}
                  height={120}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValuableCustomers;
