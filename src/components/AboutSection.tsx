
import Image from "next/image"

// import assets 
import WhiteCloudBackground from "../../public/assets/images/WhiteCloudBackground.png";
import grayCloudBackground from "../../public/assets/images/GraycloudBackground.png"; 
import style from "../app/style/custom.module.css"
// import Icons
import techIcon from "../../public/assets/icons/tech.png";

function About() {

  return (
    <>
      <section className= 'bg-white w-full h-[100vh]'  >
        <div className=' relative grid max-w-screen-xl lg:grid-cols-12 mx-auto p x-4 py-8 lg:py-16 items-center md:h-screen'>
          <Image className="z-0  hidden md:flex items-center w-full absolute top=[50%] 
          h-fit object-contain px-[8%] mx-auto transition-all duration-300 ease-linear 
          hover:invert-[1%] hover:sepia-[1%] hover:saturate-[2261%] hover:hue-rotate-[314deg] hover:brightness-[115%] hover:contrast-[88%]
          "  src={WhiteCloudBackground}
          alt="Cloud Background" width={700} height={300} />

          <div className='z-10 w-full col-span-6'>
          <h1 className='text-8xl font-semibold text-[#636468] tracking-tight '>ABOUT US</h1>
          </div>  
          <div className='z-10 w-full col-span-6'>
            <div className="  container mx-auto"></div>
            <div className='  flex flex-wrap justify-center   '>
              <div className=" flex-wrap justify-center items-center">
                <div className="my-4 mx-4 w-64 px-9 py-2 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                <Image className="justify-center w-20 h-30 m-4" src={techIcon} alt="TechnologiesIcon" />
                </div>
                 <h3 className="flex justify-center items-center">Technologies</h3>
                 
              </div>
              <div className=" flex-wrap justify-center items-center">
                <div className="my-4 mx-4 w-64 px-9 py-2 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                <Image className="justify-center w-20 h-30 m-4" src={techIcon} alt="TechnologiesIcon" />
                </div>
                 <h3 className="flex justify-center items-center">Technologies</h3>
                 
              </div>
              <div className=" flex-wrap justify-center items-center">
                <div className="my-4 mx-4 w-64 px-9 py-2 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                <Image className="justify-center w-20 h-30 m-4" src={techIcon} alt="TechnologiesIcon" />
                </div>
                 <h3 className="flex justify-center items-center">Technologies</h3>
                 
              </div>
              <div className="flex-wrap justify-center items-center">
                <div className="my-4 mx-4 w-64 px-9 py-2 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                <Image className="justify-center w-20 h-30 m-4" src={techIcon} alt="TechnologiesIcon" />
                </div>
                 <h3 className="flex justify-center items-center">Technologies</h3>
                 
              </div>
              


            


            </div>
            
          </div>
        </div>

        
      </section>
    </>
  )
}

export default About
