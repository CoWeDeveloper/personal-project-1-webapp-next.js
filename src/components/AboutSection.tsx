import Image from "next/image";

// import assets
import WhiteCloudBackground from "../../public/assets/images/WhiteCloudBackground.png";
import {aboutData} from "../data/homedata";

function About() {
  return (
    <>
      <section className="bg-white w-full max-sm:w-fit h-full">
        {/* background Image of cloud */}
        <div className=" relative grid max-w-screen-xl lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 items-center md:h-screen">
          <Image
            className="whiteCloudBackground"
            src={WhiteCloudBackground}
            alt="Cloud Background"
          />

          <div className="z-10 w-full col-span-5 ml-14">
            <h2 className="animate__animated animate__slideInLeft cursor-pointer max-sm:text-5xl sm:text-6xl  md:text-7xl lg:text-8xl font-semibold text-[#636468] tracking-tight ">
              ABOUT US
            </h2>
          </div>
          <div className="z-10 w-full col-span-7">
            <div className="flex flex-wrap justify-center  ">
              {aboutData.map((aboutData) => {
                return (
                  <div
                    key={aboutData.id}
                    className="duration-500 hover:scale-110 flex-wrap my-4 justify-center items-center"
                  >
                    <div className="group my-2 mx-4 w-72 px-120 py-4 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                      <Image
                        className=" group-hover:scale-x-[-1] transition ease-in-out duration-500 justify-center w-20 h-30 m-4"
                        width={100}
                        height={40}
                        src={aboutData.img}
                        alt={aboutData.alt}
                      />
                    </div>
                    <h3 className="flex font-semibold  justify-center items-center">
                      {aboutData.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
