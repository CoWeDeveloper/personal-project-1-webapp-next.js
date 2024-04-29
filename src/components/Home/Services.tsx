import Image from "next/image";
import "animate.css";

// import data
import { servicesData } from "../../data/homeData";

function OurServices() {
  return (
    <>
      <section className="max-w-screen-full w-full h-auto bg-[#211C5D]">
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h3 className=" animate__animated animate__slideInLeft animate__slow  tracking-wide text-center py-10 cursor-pointer text-4xl font-extrabold text-white tracking-tight">
            OUR SERVICES
          </h3>

          <div className="flex flex-wrap gap-6 justify-center w-full mx-auto">
            {/* card UI */}
            {servicesData.map((servicesData) => {
              return (
                <div
                  key={servicesData.id}
                  className="p-10 w-[24rem] bg-white flex flex-col items-center justify-center
                   rounded-lg h-54 relative overflow-hidden group">
                  {/* to change the filling color orgin. Select from top instead of origin right in the following div */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-white via-blue-500 to-blue-400 
                   origin-right transform scale-y-0 bg-[length:200%_200%] transition-transform duration-500 group-hover:scale-y-100"
                  ></div>

                  {/* <div className="flex justify-center items-center py-2"> */}
                    <Image
                      className="py-2 group-hover:invert-[100%] group-hover:sepia-[0%] group-hover:saturate-[100%] group-hover:hue-rotate-[272deg] group-hover:brightness-[0%] group-hover:contrast-[103%]"
                      src={servicesData.img}
                      width={100}
                      height={30}
                      alt={servicesData.alt}
                    />
                  {/* </div> */}
                  <h5 className="text-gray-600 hover:text-white z-0 group-hover:text-white text-2xl text-center text-warp font-medium">
                    {servicesData.title}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
