"use client";
import Image from "next/image";
import { useParams } from 'next/navigation';
import RecentBlogs from "./RecentBlogs";
import SearchField from "./SearchField";
import 'react-quill/dist/quill.snow.css'; 
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

interface BlogPost {
  id: string;
  bgImg: string;
  title: string;
  subDescription: string; // Corrected the spelling here
  content: string;
  date: string;
}

function BlogsArticle() {
  const params = useParams();
  const id = params.slug;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          console.error('Failed to fetch blog data');
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    const storedPreview = localStorage.getItem('previewBlog');
    if (storedPreview) {
      setBlog(JSON.parse(storedPreview)); // Set blog from local storage
      localStorage.removeItem('previewBlog'); // Remove after using
      setLoading(false); // Set loading to false if using local storage data
    } else {
      fetchBlogData(); // Fetch blog post if no preview data in local storage
    }

  }, [id]);

  if (loading) {
    return <Loading />; // Show loading state while fetching data
  }

  if (!blog) {
    return <div>Blog not found</div>; // Show an error message if the blog is not found
  }

  return (
    <>
      {/* header */}
      <div className="grid grid-cols-2 sm:grid-cols-2 h-96">
        {/* Left Box */}
        <div className="flex items-center py-4 w-full bg-[#154D8F] text-white">
          <div>
            <h1 className="md:text-3xl sm:text-2xl xs:text-md font-bold tracking-wide max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">
              {blog.title}
            </h1>
            <h2 className="md:text-md sm:text-sm xs:text-xs mt-2 max-w-2xl mx-auto xs:px-2 md:px-10 lg:px-16">
              {blog.subDescription}
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
          <div>
            <div className="text-pretty flex">
              <ul className="space-y-3 flex flex-col items-center xs:mr-2 lg:mr-5">
                <li className="rounded-full xs:w-8 sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
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
          </div>
        </div>

        <RecentBlogs />
      </div>
    </>
  );
}

export default BlogsArticle;
