import Image from "next/image"

// import assets
import pak from "../../../public/assets/icons/Network/pak-flag.svg" 
import pakMap from "../../../public/assets/images/Network/pakmap.png"

function Services() {
  return (
    <section className=' bg-white w-100 h-fit'>
          <div className='mx-auto w-full max-w-screen-lg pt-10 pb-4 xs:p-2'>
            <h2 className='text-center text-4xl text-black font-black'>Our Services Network</h2>
            
            <div className="sm:grid sm:grid-cols-12 sm:h-screen mx-auto pt-14 xs:flex xs:flex-col xs:h-fit  ">
              <div className="col-span-5 w-full h-full ">

               <h3 className="text-2xl font-semibold flex tracking-wide"> Pakistan <Image className="w-10" src={pak} width={40} height={40} alt="pakistan flag" /></h3>
               <h4 className="text-xl font-medium mt-2">HEAD OFFICE</h4>
               <p className="w-64 text-light text-pretty">
                Suite No B-5/4. FL-9/6 (Junaid Plaza),
                Gulshan-E-Iqbal Block 6,
                Main Rashid Minhas Road,
                Karachi-75300, Pakistan.
              </p>
              <p className="font-medium italic tracking-wide text-sm">+92 21 34971995</p>
              

              <div>
              <h4 className="text-xl font-medium mt-2">REGIONAL OFFICE</h4>
                <ul className='list-disc pl-5'>
                  <li>Lahore</li>
                </ul>
                <h4 className="text-xl font-medium mt-2">BRANCH OFFICES</h4>
                <ul className="list-disc pl-5">
                  <li>Multan</li>
                  <li>Sukkur</li>
                  <li>Pershawar</li>
                  <li>Abbottabad</li>
                  <li>Islamabad</li>
                  <li>Gujranwala</li>
                  <li>Faislabad</li>
                  <li>Sahiwal</li>
                  <li>Hyderabad</li>
                </ul>    
                          
                  </div>
              </div>


              <div className="col-span-7 w-full h-full flex lg:items-center md:pt-32 ">
                <div className="flex flex-wrap items-end ">
                 <Image className="w-full h-auto relative" src={pakMap}  alt="pakistan map" />
                </div>

              </div>

                
            </div>
            
        </div>

    </section>
  )
}

export default Services
