import Image from "next/image";
import { blogData } from "@/data/blogData";

function BlogsArticles() {
  return (
    <div className='w-full h-fit bg-white'>
      <div className='container md:px-28 sm:px-5 py-14'>
        <div className="flex   items-center w-full mx-auto mb-20">
      
      <h1 className='text-5xl font-bold text-gray-500'>OUR BLOGS</h1>
      <div className="input__search ml-5 w-56">
            <Image
              src="./assets/icons/Admin/search.svg"
              alt="Plus Icon"
              width={100}
              height={100}
              className="blog__serachIcon w-5 mx-2 scale-100 duration-300"
            />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full mx-auto  "
            />
          </div>
        </div>
      
      <div className="flex flex-wrap sm:gap-10 gap-8  items-center ">
      {blogData.map((data: any)=>{
        return(
         
            <div className="">
        <Image 
        src={data.bgImg}
        alt="Mobile innovation"
        width={100}
        height={100}
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
    </div>
  )
}

export default BlogsArticles
