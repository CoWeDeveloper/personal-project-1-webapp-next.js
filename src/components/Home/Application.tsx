import Image from "next/image";
// import Image from "next/image";
import Order from "../../../public/assets/icons/Mobile Applications/app1 order.png"
// import
import {applicationData} from "@/data/homeData"

function Application() {
  return (
    <>
     <section className='w-full h-fit bg-[#211c5d] p-20'>
        <div className=' mx-auto lg:px-[11rem] md:px-38 max-w-screen-xl text-center justify-center'>
          
            <h3 className="tracking-wide text-white text-3xl font-black mb-14">MOBILE APPLICATIONS</h3>
            <div className="flex flex-wrap gap-7  justify-center items-center">
              
             
             {applicationData.map((applicationData)=>{

              return(
              <div key={applicationData.id} className="cursor-pointer hover:-translate-y-2  hover:shadow-orange-300 hover:shadow-lg duration-500 w-44 h-48 bg-white rounded-lg ">
             <div className='flex justify-center '>
                <Image className="mt-4" src={applicationData.img} alt={applicationData.alt} width={100} height={20} />
              </div>
                <h3 className="text-center py-2 px-4 font-medium text-[#446363]">{applicationData.title}</h3>
              </div>
              )
             })}
             
             
             
            </div>
         
        </div>

     </section>
    </>
  )
}

export default Application;
