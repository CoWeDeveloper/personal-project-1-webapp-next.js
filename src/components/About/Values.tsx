import Image from "next/image";

// import assets
import {valueData} from "@/data/aboutData"

function Values() {
  return (
    <section className='w-full h-fit bg-[#f1f1f1]'>
        <div className="max-w-screen-lg mx-auto px-10 pb-5">
            <h3 className='text-3xl text-black font-black text-center pt-10'>
                Our Values
            </h3>
            <div className="flex flex-wrap justify-center items-center">

            {
              valueData.map((valueData)=>{
                return(
                  
                  <div key={valueData.id} className='pt-5 w-[230px] max-sm:pb-1 lg:pb-5 mx-5 '>
                      <div  className="flex flex-wrap justify-center m-1">
                     <div className="  pt-2 pr-2  bg-white rounded-lg shadow-md">
                          <div  className="bg-[#f1f1f1] h-56 py-6 px-5 ">
                    <div style={{backgroundImage: `url('${valueData.bgImg}')`}}  className='bg-no-repeat bg-contain h-full '>
                    {/* <Image src={one} width={60} height={40} alt="Integrity" className="z-0 absolute flex justify-center left-2 items-center h-[70%]" /> */}
                    <div className="flex flex-col justify-center items-center"> 

                    <Image src={valueData.icon} width={60} height={40} className="z-10" alt="Integrity" />
                    <h5 className="text-xl font-bold z-10 pt-5">{valueData.title}</h5>
                    <p className="text-sm text-center text-[#636468] z-10">{valueData.description}</p>
                    </div>
                    </div>  
                    </div>
                </div>
                </div>
           </div> 
          )
        }
      )
    }
    </div>
         
        </div>  

    </section>
  )
}

export default Values
