import Image from "next/image";

function blogsArticle() {
  return (
    <>
    {/* header */}
      <div className="grid grid-cols-2 sm:grid-cols-2 h-96">
      {/* Left Box */}
      <div className="flex flex-col justify-center py-4 w-full  bg-[#154D8F] text-white ">
        <h1 className="md:text-3xl  sm:text-2xl xs:text-md  font-bold tracking-wide max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-24">Tech expert latest: Innovation in Digital Enterprise</h1>
        <h2 className="md:text-md sm:text-sm xs:text-xs mt-2 max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-24">Follow this guide to see how an expert staff augumentation team can quickly provide skilled HAVC industry Outsourcing skills.</h2>
      </div>

      {/* Right Box */}
      <div className="relative w-full h-full">
        <Image 
          src="/assets/images/blogs/b2.webp" 
          alt="Right Box Image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
    {/* body */}
    <div className="w-full h-screen bg-white">
        <div className="flex">
          <div>
             <ul className="space-y-2 w-fit">
              <li className="rounded-full p-3 bg-stone-200 grouphover:bg-sky-500 hover:cursor-pointer duration-500 transition-all ">
                <Image
               src="/assets/icons/Blogs/shareIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon w-fit"
              />
              </li>
              <li className="rounded-full p-3 bg-stone-200 grouphover:bg-sky-500 hover:cursor-pointer duration-500 transition-all w-fit">
                <Image
               src="/assets/icons/Blogs/twitterIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon "
              />
              </li>
              <li>facebook</li>
              <li>linkedin</li>
             </ul>

          </div>
          <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
           <br/>
           <br/>
           <br/>
           consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
          </div>
        </div>
    </div>
    </>
  )
}

export default blogsArticle
