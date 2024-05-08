// import Image from "next/image"
import Image from "next/image";
import Arrow from "../../../public/assets/images/Products/productarrow.png";

// data
import { productData } from "../../data/homeData";

function Product() {
  return (
    <>
      <section className="w-full h-fit bg-white">
        <div className="py-8 px-4 mx-auto  max-w-screen-xl  sm:py-16 lg:px-6">
          <h3 className="tracking-wide text-3xl text-center text-black font-black mb-14">
            OUR SPECIALITY PRODUCTS PORTFOLIO
          </h3>


  {productData.map((product, index) => (
<section key={product.id} className="flex flex-wrap max-w-screen-lg mx-auto justify-center items-center">

    <div className="w-full flex flex-wrap mx-auto justify-center" >
      <div className={` w-full lg:w-[55%] ${product.id % 2 === 0 ? 'order-1' : 'order-0'} `} >
      <Image
        className="w-48"
        src={product.img}
        width={120}
        height={60}
        alt="Product Image"
      />
      <p className=" text-sm text-[#636468] my-3 text-justify">{product.description}</p>
      <button className={product.styleButton}>Schedule a Demo</button>
      <button className="hover:border-[#0A9AC8] text-[#0A9AC8] text-xs   hover:ring-2 py-2 px-5 font-medium rounded-lg hover:ring-[#0A9AC8] focus:outline-none duration-500">Read More</button>
      </div>
      <div  className="lg:mt-0 mt-5 w-full lg:w-[45%] flex justify-center"  >
        <Image
          className="lg:w-70 md:w-64 sm:w-56"
          src={product.gridImg}
          width={200}
          height={150}
          alt="Grid Image"
        />
      </div>
   
    </div>
    {index < productData.length - 1 && productData[index + 1].id === product.id + 1 && (
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
<div className="flex justify-center mt-10">
<button className="bg-[#22B8EE] hover:bg-[#1B8FBF] text-white text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">Seem More Products</button>
</div>
        </div>
      </section>
    </>
  );
}

export default Product;
