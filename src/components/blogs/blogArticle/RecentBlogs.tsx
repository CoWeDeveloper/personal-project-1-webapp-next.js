import Image from "next/image";
import { recentBlogData } from "@/lib/tableData";

function RecentBlogs() {
  return (
    <section className=' my-14'>
        <h1 className='text-center text-4xl font-bold text-gray-500'> Read our Recent Blogs</h1>
    
        <div>
            <div className="flex flex-wrap gap-5  justify-center my-14  items-center ">
        {recentBlogData.map((data: any)=>{
        return(
            <div className="sm:mx-2 xs:my-4 ">
        <Image 
        src={data.bgImg}
        alt="Mobile innovation"
        width={200}
        height={200}
        objectFit="cover"
        className="rounded-lg xs:w-60 sm:56 "  
        />
          <h2 className='font-bold text-stone-500 tracking-tighter text-lg w-64 pt-4  text-pretty '>
            {data.title}
          </h2>
          <p className='font-medium pt-3 pb-5  text-gray-500 text-xs'>{data.author}</p>
          <button className='px-6 py-1.5 text-white bg-sky-500 hover:bg-sky-600 rounded-lg'>Read</button>
        </div>
      )
    })}
    </div>
        </div>
    </section>
  )
}

export default RecentBlogs
