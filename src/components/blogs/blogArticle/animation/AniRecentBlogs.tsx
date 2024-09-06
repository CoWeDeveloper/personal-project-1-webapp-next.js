"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {useState, useEffect} from "react";

interface Blog {
    id: number;
    author: string;
    title: string;
    bgImg: string;
    date: string;
}

function AniRecentBlogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [randomBlogs, setRandomBlogs] = useState<Blog[]>([]);
    
useEffect(()=>{
    const fetchBlog = async()=>{
        try { 
            const response = await fetch("/api/blogs");
            const data = await response.json();
            setBlogs(data);
            if (data.length > 0){
                // sorting Blogs
                const sortedBlogs = data.sort((a: any, b: any)=>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )

                const topSixBlogs = sortedBlogs.slice(0, 6);

                const shuffled = topSixBlogs.sort(() => 0.5 - Math.random());
                const selectedBlogs = shuffled.slice(0, 3);
                setRandomBlogs(selectedBlogs);
            }   
        } catch (error) {
            console.error("Error Feteching Recent Blogs Data:", error)
        }
    }
    fetchBlog();
    
    
},[])

if (randomBlogs.length === 0 ){
    return null;
}
  return (  
    <>
      <h1 className='text-center text-4xl font-bold text-gray-500'> RECENT BLOGS</h1>
    
    <div>
        <div className="pb-14    flex flex-wrap lg:gap-x-20 md:gap-x-10  justify-center my-14  items-center ">
    {randomBlogs.map((data: Blog)=>{
    return(
        <div key={data.id} className="xs:my-4 w-96 h-48">
    <Image 
    src={data.bgImg}
    alt="Mobile innovation"
    width={200}
    height={200}
    objectFit="cover"
    className="rounded-lg w-56 h-48 xs:w-80 sm:56 "  
    />
      <h2 className='font-bold text-stone-500 tracking-tighter text-lg w-64 pt-4  text-pretty '>
        {data.title}
      </h2>
      <p className='font-medium pt-3 pb-5 text-gray-500 text-xs'>By: {data.author} | {data.date}</p>
      <Link href={`/blogs/${data.id}`}>
      <button className="flex items-center text-white group bg-sky-500 hover:bg-sky-700 transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">
        Read
        <ArrowRight className="ml-1 duration-300 transition-all group-hover:translate-x-2" size={16} />
      </button>
                </Link>
    </div>
  )
})}
</div>
    </div>
    </>
  )
}

export default AniRecentBlogs
