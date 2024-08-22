"use client"
import Image from "next/image";
import { useParams } from 'next/navigation';
import RecentBlogs from "./RecentBlogs";
import SearchField from "./SearchField";
import { tableData } from "@/lib/tableData";
import 'react-quill/dist/quill.snow.css'; 
import { useState, useEffect } from "react";

interface blogPost {
  id: string;
  bgImg: string;
  title: string;
  subDescription: string;
  content: string;
  date: string;
}

function blogsArticle() {
  const params = useParams(); // Ensure TypeScript is used correctly if applicable
  const id = params.slug;
  
  const [previewBlog, setPreviewBlog] = useState<any>(null);

  useEffect(() => {
    // Check for preview data in local storage
    const storedPreview = localStorage.getItem('previewBlog');
    if (storedPreview) {
      setPreviewBlog(JSON.parse(storedPreview));
      localStorage.removeItem('previewBlog'); // Remove after using
    }
  }, []);


  const blog = previewBlog || tableData.find((item: any) => (item.id) === id);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 sm:grid-cols-2 h-96">
        {/* Left Box */}
        <div className="flex items-center py-4 w-full bg-[#154D8F] text-white ">
          <div>
            <h1 className="md:text-3xl sm:text-2xl xs:text-md font-bold tracking-wide max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">
              {blog.title}
            </h1>
            <h2 className="md:text-md sm:text-sm xs:text-xs mt-2 max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">
              {blog.subDescripation}
            </h2>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative aspect-auto">
          <Image 
            src={blog.bgImg} 
            alt="Right Box Image" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
      
      {/* body */}
      <div className="w-full h-fit bg-white text-gray-700 pt-5 pb-14 lh:px-10 md:px-5 px-1">
        <div className="flex justify-end w-full mr-10 mb-5">
          <SearchField />
        </div>
        <div className="flex justify-center md:mx-2 lg:mx-10 xs:mx-1">
          <div className="">
            <div className="text-pretty flex">
              <ul className="space-y-3 flex flex-col items-center xs:mr-2 lg:mr-5">
                <li className="rounded-full xs:w-8 sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10 ">
                  <Image
                    src="/assets/icons/Blogs/shareIcon.svg"
                    alt="Share icons"
                    width={100}
                    height={100}
                    className="blogIcon"
                  />
                </li>
                <li className="rounded-full sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                  <Image
                    src="/assets/icons/Blogs/twitterIcon.svg"
                    alt="Share icons"
                    width={100}
                    height={100}
                    className="blogIcon"
                  />
                </li>
                <li className="rounded-full sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                  <Image
                    src="/assets/icons/Blogs/facebookIcon.svg"
                    alt="Share icons"
                    width={100}
                    height={100}
                    className="blogIcon"
                  />
                </li>
                <li className="rounded-full sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all w-auto">
                  <Image
                    src="/assets/icons/Blogs/linkedinIcon.svg"
                    alt="Share icons"
                    width={500}
                    height={500}
                    className="blogIcon"
                  />
                </li>
              </ul> 
              <div className="quillContent" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {/* {blog.optionalImage && (
              <Image
                src={blog.optionalImage}
                alt="Optional Image"
                width={1000}
                height={1000}
                className="w-full shadow-lg rounded-lg max-w-9xl lg:h-[500px] h-fit object-cover my-5 mx-auto"
              />
            )} */}

            {/* <div className="w-full">
              <h1 className="md:text-3xl text-gray-500 sm:text-2xl xs:text-md font-bold mb-4">
                Tech experts' latest: Innovations in digital enterprise
              </h1>
              <p className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br />
                <br />
                When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div> */}
          </div>
        </div>

        <RecentBlogs />
      </div>
    </>
  );
}

export default blogsArticle;
