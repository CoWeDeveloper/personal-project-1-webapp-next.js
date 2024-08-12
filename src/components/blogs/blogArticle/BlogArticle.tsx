import Image from "next/image";
import RecentBlogs from "./RecentBlogs";
import SearchField from "./SearchField";

function blogsArticle() {
  return (
    <>
    {/* header */}
      <div className="grid grid-cols-2 sm:grid-cols-2 h-96">
      {/* Left Box */}
      <div className="flex items-center py-4 w-full bg-[#154D8F] text-white ">

        <div >

        <h1 className="md:text-3xl sm:text-2xl xs:text-md  font-bold tracking-wide max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">Tech expert latest: Innovation in Digital Enterprise</h1>
        <h2 className="md:text-md sm:text-sm xs:text-xs mt-2 max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">Follow this guide to see how an expert staff augumentation team can quickly provide skilled HAVC industry Outsourcing skills.</h2>
        </div>
      </div>

      {/* Right Box */}
      <div className="relative aspect-auto">
        <Image 
          src="/assets/images/blogs/b2.webp" 
          alt="Right Box Image" 
          layout="fill" 
          objectFit="cover" 
          className=""
        />
      </div>
    </div>
    {/* body */}
    <div className="w-full h-fit bg-white text-gray-700 pt-5 pb-14 lh:px-10 md:px-5 px-1">
    <div className="flex justify-end w-full mr-10 mb-5">

    <SearchField />
    </div>
    

        <div className="flex justify-center md:mx-2 lg:mx-10 xs:mx-1 ">
          <div className="" >
                <div className="text-pretty flex " >
             <ul className="space-y-3  flex flex-col items-center xs:mr-2 lg:mr-5">
              <li className="rounded-full xs:w-8 sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10 ">
                <Image
               src="/assets/icons/Blogs/shareIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon"
              />
              </li>
              <li className="rounded-full  sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                <Image
               src="/assets/icons/Blogs/twitterIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon "
              />
              </li>
              <li className="rounded-full  sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                <Image
               src="/assets/icons/Blogs/facebookIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon "
              />
              </li>
              <li className="rounded-full  sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all w-auto">
                <Image
               src="/assets/icons/Blogs/linkedinIcon.svg"
               alt="Share icons"
               width={100}
               height={100}
               className="blogIcon "
              />
              </li>
             </ul>

          
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
           <br/>
           <br/>
           consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
            <br/>
            <br/>
           "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
          </div>
          
    <Image
      src="/assets/images/Blogs/blogHeader.webp"
      alt="Digital Enterprise"
      width={1000}
      height={1000}
      className="w-full shadow-lg rounded-lg  max-w-9xl lg:h-[500px] h-fit  object-cover my-5 mx-auto"
    />

  <div className="w-full">
    <h1 className="md:text-3xl text-gray-500 sm:text-2xl xs:text-md font-bold mb-4">
      Tech experts' latest: Innovations in digital enterprise
    </h1>
    <p className="text-lg ">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. 
      <br />
      <br />

      when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>

          </div>
        </div>
 
    <RecentBlogs />
    </div>
    </>
  )
}

export default blogsArticle
