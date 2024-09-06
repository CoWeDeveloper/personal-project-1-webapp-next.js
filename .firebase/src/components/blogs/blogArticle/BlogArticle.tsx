  "use client";

  import Image from "next/image";
  import { useParams } from 'next/navigation';
  import RecentBlogs from "./RecentBlogs";
  import Head from "next/head";
  import SearchField from "./SearchField";
  import { CopyToast } from "./CustomToaster";
  import 'react-quill/dist/quill.snow.css'; 
  import { useState, useEffect, useMemo } from "react";
  import { useToast } from "@/components/ui/use-toast";
  import Loading from "@/app/loading";

  interface BlogPost {
    id: string;
    bgImg: string;
    title: string;
    subDescripation: string;
    content: string;
    date: string;
  }

  function BlogsArticle() {
    const params = useParams();
    const id = params.slug;
    const { toast } = useToast();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
      const fetchBlogData = async () => {
        try {
          const res = await fetch(`/api/blogs/${id}`);
          if (res.ok) {
            const data = await res.json();
            setBlog(data);
          } else {
            console.error('Failed to fetch blog data', res.status);
          }
        } catch (error) {
          console.error("Error fetching blog data:", error);
        } finally {
          setLoading(false);
        }
      };

      const storedPreview = localStorage.getItem('previewBlog');
      if (storedPreview) {
        setBlog(JSON.parse(storedPreview));
        localStorage.removeItem('previewBlog');
        setLoading(false);
      } else {
        fetchBlogData();
      }
    }, [id]);

    const highlightedContent = useMemo(() => {
      if (!blog || !searchQuery) return blog?.content || "";
      return blog.content.replace(
        new RegExp(`(${searchQuery})`, "gi"),
        (match) => `<mark>${match}</mark>`
      );
    }, [blog?.content, searchQuery]);

    if (loading) {
      return <Loading />;
    }

    if (!blog) {
      return <div>Blog not found</div>;
    }

    const shareUrl = window.location.href;

    const handleShareClick = (platform: string) => {
      let url = "";
      const encodedSharedUrl = encodeURIComponent(shareUrl);
      const encodedTitle = encodeURIComponent(blog.title);

      switch (platform) {
        case "facebook":
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodedSharedUrl}`;
          break;
        case "twitter":
          url = `https://twitter.com/intent/tweet?url=${encodedSharedUrl}&text=${encodedTitle}`;
          break;
        case "linkedin":
          url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedSharedUrl}&title=${encodedTitle}`;
          break;
        case "copy":
          navigator.clipboard.writeText(shareUrl);
          toast({
            description: <CopyToast />,
            variant: "default"
          });
          return;
        default:
          return;
      }
      window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleSearch = (query: string) => {
      setSearchQuery(query);
    };

    const schemaArticle = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blog.title,
      "description": blog.subDescripation,
      "image": blog.bgImg,
      "datePublished": blog.date,
      "author": {
          "@type": "Person",
          "name": "Author Name", // Replace with actual author name
      },
      "publisher": {
          "@type": "Organization",
          "name": "Cloud Tenants",
      }
  };

    return (
      <>
            {/* SEO Meta Tags */}
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.subDescripation} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.subDescripation} />
        <meta property="og:image" content={blog.bgImg || '/default-image.jpg'} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        {/* header */}
        <div className="grid grid-cols-2 sm:grid-cols-2 h-96">
          {/* Left Box */}
          <div className="flex items-center py-4 w-full bg-[#154D8F] text-white">
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
        <div className="w-full h-fit  bg-white text-gray-700 pt-5 pb-20 lh:px-10 md:px-5 px-1">
          <div className="flex justify-end w-full mr-10 mb-5">
            <SearchField onSearch={handleSearch} />
          </div>
          <div className="flex justify-center md:mx-2 lg:mx-10 xs:mx-1">
            <div>
              <div className="text-pretty flex">
                <ul className="space-y-3 flex flex-col items-center xs:mr-2 lg:mr-5">
                  <li 
                  onClick={() => handleShareClick("copy")}
                  className="rounded-full xs:w-8 sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                    <Image
                      src="/assets/icons/Blogs/shareIcon.svg"
                      alt="Share icons"
                      width={100}
                      height={100}
                      className="blogIcon"
                    />
                  </li>
                  <li 
                  onClick={() => handleShareClick("twitter")}
                  className="rounded-full sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                    <Image
                      src="/assets/icons/Blogs/twitterIcon.svg"
                      alt="Share icons"
                      width={100}
                      height={100}
                      className="blogIcon"
                    />
                  </li>
                  <li 
                  onClick={() => handleShareClick("facebook")}
                  className="rounded-full sm:p-3 xs:p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10">
                    <Image
                      src="/assets/icons/Blogs/facebookIcon.svg"
                      alt="Share icons"
                      width={100}
                      height={100}
                      className="blogIcon"
                    />
                  </li>
                  <li 
                  onClick={() => handleShareClick("linkedin")}
                  className="rounded-full sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all w-auto">
                    <Image
                      src="/assets/icons/Blogs/linkedinIcon.svg"
                      alt="Share icons"
                      width={500}
                      height={500}
                      className="blogIcon"
                    />
                  </li>
                </ul>
                <div className="quillContent"
                    dangerouslySetInnerHTML={{ __html: highlightedContent }}
                />
              </div>
            </div>
          </div>

          <RecentBlogs />
        </div>
      </>
    );
  }

  export default BlogsArticle;
