
import Image from "next/image";
import { blogData } from "@/data/blogData";
import { ArrowRight } from 'lucide-react';
import OurBlogsHeader from "./blogArticle/animation/OurBlogsHeader";
import SearchField from "./SearchField";


function BlogsArticles() {
  
  return (
    <div className='w-full h-fit bg-white relative z-0 '>
      <div className='bg-sky-50  border-sky-200 border-t-8 py-8'>

      <OurBlogsHeader />
              </div>
    
    {/* search */}
    <div className="-z-10">
      <SearchField />
    </div>

      <div className=" container md:px-28 sm:px-5 py-14">
      <div className="flex flex-wrap sm:gap-10 gap-8 justify-center items-center ">
      {blogData.map((data: any)=>{
        return(
          
          <div 
          className="w-72 shadow-md group bg-white  ring-1 ring-teal-50 hover:ring-4 hover:ring-offset-1 hover:ring-teal-100 hover:shadow-xl  translate-y-0 hover:-translate-y-2 duration-700 transition-all rounded-lg">
        <Image 
        src={data.bgImg}
        alt="Mobile innovation"
        width={200}
        height={200}
        objectFit="fit"
        className="aspect-auto w-full rounded-t-xl"  
        /> 
        <div className=" pb-2 w-auto px-2">

          <h2 className='font-bold text-stone-500 tracking-tighter text-lg w-64 pt-4  text-pretty '>
            {data.title}
          </h2>
          <p className='font-medium pt-3 pb-5  text-gray-500 text-xs'>{data.author}</p>
          
        </div>
        

          <button className='flex  items-center px-6 py-1.5 group-hover:w-64 w-28  transition-all duration-700 text-white bg-sky-500 group-hover:bg-sky-600 border-r-4 border-sky-400 rounded-tr-lg '>
            Read 
            <ArrowRight className="ml-1" size={20} />
            </button>

        </div>
        
      )
    })}
    </div>
      
      </div>
    </div>
  )
}

export default BlogsArticles
