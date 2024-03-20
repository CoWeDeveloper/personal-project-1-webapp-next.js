import Image from 'next/image';
// import icons
import softSolution from "../../public/assets/icons/OurServices/softSolution.png"

function OurServices() {
  return (
    <>
        <section className="w-100 h-screen bg-[#211C5D]">
            <div className="grid col-span-8 justify-center items-center py-10">
              <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"'>
                <h3 className="py-10 cursor-pointer text-4xl font-extrabold text-white tracking-tight">
                  OUR SERVICES
                </h3>
                    
                      <div className='p-2 w-96 flex-col items-center justify-center bg-white rounded-md h-64 '>
                      <Image className='' src={softSolution} width={100} height={30} alt="cloud based Software solutions" />
                      <h5 className='text-gray-600 justify-center font-semibold'>Cloud Based Software Solutions</h5>
                      </div>
      
                      </div>
                </div>

      
        </section>
      
    </>
  )
}

export default OurServices;
