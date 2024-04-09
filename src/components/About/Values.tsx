import Image from "next/image";
import integrity from "../../../public/assets/images/About/abt1.png";
import one from "../../../public/assets/images/About/abtinfo1.png"

function Values() {
  return (
    <section className='w-full h-fit bg-[#f1f1f1]'>
        <div className="max-w-screen-lg mx-auto px-10">
            <h3 className='text-3xl text-black font-black text-center'>
                Our Values
            </h3>
            <div className=' pt-5 w-[250px] pb-10'>
                 <div className="flex flex-wrap justify-center">
                <div className="pt-2 pr-2  bg-white shadow-md">
                     <div className='bg-[#f1f1f1] p-10 flex flex-col justify-center items-center place-content-center'>
                     <Image src={integrity} width={60} height={40} alt="Integrity" />
                     <h5 className="text-2xl font-bold">Integrity</h5>
                     <p className="text-sm text-center text-[#636468]">Do the right thing, Take responsibility, Do what you say.</p>
                     </div>
                 </div>
                 </div>
              </div> 
        </div>  

    </section>
  )
}

export default Values
