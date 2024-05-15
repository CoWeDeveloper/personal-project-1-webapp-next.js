import Image from "next/image";
import Link from "next/link";
import "animate.css";
// import assets
import Arrow from "../../../public/assets/images/Products/productarrow.png";
import ScheduleBtn from "./ScheduleBtn";
// import data
import {softwareData} from "../../data/softwareData";




function Products() {

 
    return (
      <section className="w-full h-fit bg-white">
        <div className="py-8 px-4 mx-auto  max-w-screen-xl  sm:py-16 lg:px-6">
       {softwareData.map((softwareData)=> ( 
        <div key={softwareData.id} className={`${(softwareData.id == 1) ? "mt-2" : "mt-36"}`}>
          <h3 key={softwareData.id} className="tracking-wide text-3xl text-center text-black font-black mb-14">
            {softwareData.title}
          </h3>

{softwareData.cards.map((cards, index) => (
<section key={cards.id} className="flex flex-wrap w-9/12 mx-auto justify-center items-center">

    <div className="w-full flex flex-wrap mx-auto justify-center" >
      <div className={` w-full lg:w-[55%] ${cards.id % 2 === 0 ? 'order-0' : 'order-1'} `} >
      <Image
        className="w-40"
        src={cards.img}
        width={120}
        height={60}
        alt="Product Image"
      /> 
      <p className=" text-sm text-[#636468] my-3 text-justify">{cards.description}</p>
      <ScheduleBtn styleButton={cards.styleButton} />
      {/* <button onClick={handleClick} className={cards.styleButton}>Schedule a Demo</button> */}
      
     <Link  href={cards.link} > <button className="hover:border-[#0A9AC8] text-[#066f8f] text-xs   hover:ring-2 py-2 px-5 font-medium rounded-lg hover:ring-[#0A9AC8] focus:outline-none duration-500">Read More</button></Link>
      </div>
      <div  className={`lg:mt-0 mt-5 w-full lg:w-[45%] flex justify-center ${cards.id % 2 === 0 ? 'order-1' : 'order-0'} `}  >
        <Image
          className="lg:w-70 md:w-64 sm:w-56"
          src={cards.gridImg}
          width={200}
          height={150}
          alt="mock up"
        />
      </div>
    </div>
    {index < softwareData.cards.length - 1 && softwareData.cards[index + 1].id === cards.id + 1 && (
      <div className="flex justify-center my-14">
        <Image
          className="w-39 mt-2 flex-col rotate-45"
          src={Arrow}
          width={100}
          height={40}
          alt="Arrow Image"
        />
      </div>
    )}
</section>
  ))}

</div>
                 
))}
<div className="flex justify-center mt-10">
<button className="bg-[#22B8EE] hover:bg-[#1B8FBF] text-white text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">Seem More Products</button>
</div>

</div>
</section>
    );
  }
  
  export default Products;
