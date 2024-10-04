"use client";
import Image from "next/image";
import { notFound, useParams } from 'next/navigation';
import RecentBlogs from "./RecentBlogs";
import Head from "next/head";
import SearchField from "./SearchField";
import { CopyToast } from "./CustomToaster";
import 'react-quill/dist/quill.snow.css'; 
import { useState, useEffect, useMemo } from "react";

import Loading from "@/app/loading";
import AniSocialMediaIcons from "./animation/AniSocialMediaIcons";

    interface BlogPost {
      id: string;
      bgImg: string;
      title: string;
      subDescripation: string;
      content: string;
      date: string;
    }

    function BlogsArticle() {
      const [shareUrl, setShareUrl] = useState<string>("");

      useEffect(() => {
        if (typeof window !== "undefined") {
          setShareUrl(window.location.href);
        }
      }, []);// this is being use in meta tag
      const params = useParams(); // this helps to get id from url
      const id = params.slug; // id is being saved as variable
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
      
        // This code help to filtre letter from search without effect the image tag in between
        const highlightSearchTerm = (htmlString: string) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, "text/html");
      
          const traverseAndHighlight = (node: Node) => {
            // Only highlight text nodes
            if (node.nodeType === Node.TEXT_NODE) {
              const regex = new RegExp(`(${searchQuery})`, "gi");
              const newContent = node.textContent?.replace(regex, '<mark>$1</mark>');
              if (newContent && node.textContent !== newContent) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newContent;
      
                // Replace the current node with the highlighted content nodes
                while (tempDiv.firstChild) {
                  node.parentNode?.insertBefore(tempDiv.firstChild, node);
                }
                node.parentNode?.removeChild(node);
              }
            } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
              node.childNodes.forEach(traverseAndHighlight);
            }
          };
      
          doc.body.childNodes.forEach(traverseAndHighlight);
      
          return doc.body.innerHTML;
        };
      
        return highlightSearchTerm(blog.content);
      }, [blog, searchQuery]);
      

      if (loading) {
        return <Loading />;
      }

        if (!blog) {
          notFound();
        }  

      const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

    //   const schemaArticle = {
    //     "@context": "https://schema.org",
    //     "@type": "Article",
    //     "headline": blog.title,
    //     "description": blog.subDescripation,
    //     "image": blog.bgImg,
    //     "datePublished": blog.date,
    //     "author": {
    //         "@type": "Person",
    //         "name": "Author Name", // Replace with actual author name
    //     },
    //     "publisher": {
    //         "@type": "Organization",
    //         "name": "Cloud Tenants",
    //     }
    // };

      return (
        <>
              {/* SEO dynamic Meta Tags */}
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
          <div className="w-full h-fit bg-white text-gray-700 pt-5 pb-20 lh:px-10 md:px-5 px-1">
            <div className="flex justify-end w-full mr-10 mb-5">
              <SearchField onSearch={handleSearch} />
            </div>
            <div className="flex justify-start md:mx-2 lg:mx-10 xs:mx-1">
              <div>
                <div className="text-pretty flex">
                 <AniSocialMediaIcons title={blog.title} />


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
