// import Image from "next/image"
import Image from "next/image";
import SnD from "../../../public/assets/images/Products/sndnext.png"
import SnDgrid from "../../../public/assets/images/Products/sndnextgrid.png"

function Product() {
  return (
    <>
    <section className='w-full h-screen bg-white'>
        <div className='py-8 px-4 mx-auto  max-w-screen-xl  sm:py-16 lg:px-6'>

        <h3 className="text-4xl text-center text-black font-black">      
        OUR SPECIALITY PRODUCTS PORTFOLIO
        </h3>
        <div className=" relative grid max-w-screen-xl lg:grid-cols-12 mx-auto px-4 py-8 lg:py-16 items-center md:h-screen">
            <div className="col-span-6">
                <Image className="" src={SnD} width={100} height={90} alt="s&d next" />
                <p className="">
                Cloud Tenants Sales & Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales & Distribution Performance....
                </p>
            </div>
            <div className="col-span-6">
            <Image className="lg:w-80 md:w-64 sm:w-44 " src={SnDgrid} width={300} height={150} alt="s&d next" />
            </div>
        </div>

        </div>
    </section>
    
    </>
  )
}

export default Product