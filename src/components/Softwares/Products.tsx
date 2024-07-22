import AniProducts from "./animation/AniProducts";
import Link from "next/link";

function Products() {
 
    return (
      <section id="Products" className="w-full h-fit bg-white">
        <div className="py-8 px-4 mx-auto  max-w-screen-xl  sm:py-16 lg:px-6 overflow-hidden">
     <AniProducts />
<div className="flex justify-center mt-10">
<Link href="./softwares/om">
<button className="bg-white border-2 border-[#1798a7] ring-[#1798a7] hover:bg-[#1B8FBF] text-[#1798a7] text-sm hover:text-sky-100 rounded-lg px-4 py-2 transition-all duration-500 mr-2 font-medium focus:outline-none">
  Explore Other Modules
  </button>
</Link>
</div>
   
</div>
</section>
    );
  }
  
  export default Products;
