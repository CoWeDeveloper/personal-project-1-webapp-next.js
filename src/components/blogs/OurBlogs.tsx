"use client"
import Image from "next/image";
import Link from "next/link";
import SearchField from "./SearchField";
import { ArrowRight} from 'lucide-react';
import { tableData } from "@/lib/tableData";
import OurBlogsHeader from "./blogArticle/animation/OurBlogsHeader";


function BlogsArticles() {
  const formatTitleForURL = (title: string) => {
    return title.replace(/\s+/g, '-');
  };





  return (
    <div className='w-full h-fit bg-white'>
      <div className='bg-sky-50  border-sky-200 border-t-8 py-8'>

      <OurBlogsHeader />
              </div>
    
    {/* search */}

      <div className="container md:px-28 sm:px-5 py-14">
    <div className="flex justify-end text-xs md:px-28 sm:px-5 mt-5 -z-10">
      <SearchField />
    </div>
      <div className="flex flex-wrap sm:gap-10 gap-8 justify-center items-center ">
       
      {tableData.map((data: any)=>{
        
        return(
          <div 
          className="w-72 shadow-xl bg-white ring-1 ring-sky-50 hover:ring-4 hover:ring-offset-1 hover:ring-indigo-200 hover:shadow-xl   hover:-translate-y-2 duration-700 transition-all rounded-lg">
        <Image 
        src={data.bgImg}
        alt="Mobile innovation"
        width={200}
        height={200}
        objectFit="fit"
        className="aspect-auto w-full rounded-t-xl"  
        /> 
        <div className=" pb-2 w-auto px-2">

          <h2 className='font-bold text-stone-500 tracking-tighter capitalize text-lg w-64 pt-4  text-pretty '>
            {data.title}
          </h2>
          <p className='font-semibold pt-3 pb-5  text-gray-500 text-xs capitalize'>By: {data.author} | {data.date}</p>
          <Link href={`/blogs/${formatTitleForURL(data.id)}`}>
          <button className='flex items-center text-white group bg-sky-500 hover:bg-sky-700 transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none'>
            Read 
            <ArrowRight className="ml-1 duration-300 transition-all group-hover:translate-x-2" size={16} />
            </button>
          </Link>
        </div>
        


        </div>
        
      )
    })}
    </div>
      
      </div>
    </div>
  )
}

export default BlogsArticles
