  "use client";
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import Image from "next/image";
  import Link from "next/link";
  import SearchField from "./SearchField";
  import { ArrowRight } from "lucide-react";
  import React, { useEffect, useState } from "react";
  import {motion} from "framer-motion";

  function OurBlogsContent() {
    const [blogData, setBlogData] = useState([]); // State to hold fetched blog data
    const [loading, setLoading] = useState(true); // State to manage loading
    const [searchQuery,  setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1); // Pagination state
    const cardsPerPage = 9;

    // Fetch blog data when the component mounts
    useEffect(() => {
      const fetchBlogData = async () => {
        try {
          const res = await fetch(`/api/blogs`); // Fetch all blog posts
          if (res.ok) {
            const data = await res.json();
            setBlogData(data); // Set fetched data to state
          } 
        }  catch (error) {
          console.error("Error fetching blog data:", error);
        } finally {
          setLoading(false); // Stop loading after the fetch is complete
        }
      };

      fetchBlogData();
    }, []);

    const handleSearch = (query: string) =>{
      setSearchQuery(query);
    };

    const highlightText = (text: string, query: string) => {
      if (!query) return text;

      const parts = text.split(new RegExp(`(${query})`, 'gi'));
      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <span key={index} className="bg-yellow-200">{part}</span>
            ) : (
              part
            )
          )}
        </>
      );
    };
    const filteredData = blogData.filter((blog: any)=>{
      const searchLower = searchQuery.toLowerCase();
      return(
        blog.title.toLowerCase().includes(searchLower) ||
        blog.content.toLowerCase().includes(searchLower) ||
        blog.author.toLowerCase().includes(searchLower)
      );
    })

    // Calculate the indices for pagination
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const paginatedData = React.useMemo(() => {
      return filteredData.slice(startIndex, endIndex); // Paginate data based on the current page
    }, [startIndex, endIndex, filteredData]);
    

    // Calculate total number of pages
    const totalPages = React.useMemo(() => {
      return Math.ceil(filteredData.length / cardsPerPage);
    }, [filteredData.length]);
    
    // Calculate the start and end of the range of pages to display
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    if (loading) {
      return <div>Loading...</div>; // Show loading message
    }

    return (
      <>
        <div className="flex justify-end text-xs md:px-28 sm:px-5 mt-5 -z-10">
          <SearchField onSearch={handleSearch} />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 justify-center items-center ">
          {paginatedData.map((data: any) => {
            return (
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
              transition={{ 
                  duration: 1.2,
                  ease: [0.42, 0, 0.58, 1]
                }}
                variants={{
                visible: { opacity:1,  },
                hidden: { opacity:0.1,  }
              }}
                key={data.id} // Add key prop for each blog post
                className="w-72 shadow-xl bg-white ring-sky-50 hover:ring-4 ring-offset-0 hover:ring-offset-2 hover:ring-sky-200 hover:drop-shadow-xl hover:-translate-y-2 duration-700 transition-all rounded-lg"
              >
                <Image
                  src={data.bgImg}
                  alt="Mobile innovation"
                  width={200}
                  height={200}
                  objectFit="fit"
                  className="aspect-auto w-96 h-48 rounded-t-xl"
                />
                <div className="pb-2 w-auto px-2">
                  <h2 className="font-bold text-stone-500 tracking-tighter capitalize text-lg w-64 pt-4 text-pretty">
                    {highlightText(data.title, searchQuery)}
                  </h2>
                  <p className="font-semibold pt-3 pb-5 text-gray-500 text-xs capitalize">
                    By: {highlightText(data.author, searchQuery)} | {data.date}
                  </p>
                  <Link href={`/blogs/${data.id}`}>
                    <button className="flex items-center text-white group bg-sky-500 hover:bg-sky-700 transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">
                      Read
                      <ArrowRight className="ml-1 duration-300 transition-all group-hover:translate-x-2" size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Pagination Component */}
        <div className="flex justify-end text-xs md:px-28 sm:px-5 mt-5 -z-10">
          <Pagination className="flex justify-end mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="hover:bg-gray-300 w-fit px-2 cursor-pointer"
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                />
              </PaginationItem>
              {pageNumbers.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    className={`border-2 border-gray-200 hover:bg-gray-400 rounded-full cursor-pointer ${
                      page === currentPage ? "bg-gray-400" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className="hover:bg-gray-300 w-fit px-2 cursor-pointer"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </>
    );
  }

  export default OurBlogsContent;
