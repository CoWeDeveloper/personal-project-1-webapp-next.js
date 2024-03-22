import Image from "next/image";
// import Image from "next/image";
import Order from "../../../public/assets/icons/Mobile Applications/app1 order.png"
// import
import {applicationData} from "@/data/homedata"

function Application() {
  return (
    <>
     <section className='w-full h-fit bg-[#211c5d] p-20'>
        <div className='container mx-auto px-48 text-center justify-center'>
            <div className=''>
            <h3 className="text-white text-4xl font-black mb-20 ">MOBILE APPLICATIONS</h3>
            <div className="flex flex-wrap gap-7 justify-center items-center">
              
             
             {applicationData.map((applicationData)=>{

              return(
              <div key={applicationData.id} className="w-60 h-60 bg-white rounded-lg ">
             <div className='flex justify-center '>
                <Image className="m-4" src={applicationData.img} alt={applicationData.alt} width={130} height={20} />
              </div>
                <h3 className="text-center font-medium">{applicationData.title}</h3>
              </div>
              )
             })}
             
             
             
            </div>
            </div>
        </div>

     </section>
    </>
  )
}

export default Application;
