"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import Image from "next/image";
import Link from "next/link";
import SearchField from "./SearchField";
import { ArrowRight} from 'lucide-react';
import { tableData } from "@/lib/tableData";
import { useState } from "react";
import { pages } from "next/dist/build/templates/app-page";

function OurBlogsContent() {

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;
    
    // declare index
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = (startIndex + cardsPerPage);

    const paginatedData = tableData.slice(startIndex, endIndex);
    
    // total number of pages
    const totalPages = Math.ceil(tableData.length/cardsPerPage);
    //  start and end of the range of pages to display 
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1},
       (_, i) => startPage + i 
      )

  return (
    <>
    <div className="flex justify-end text-xs md:px-28 sm:px-5 mt-5 -z-10">
    <SearchField />
  </div>
    <div className="flex flex-wrap sm:gap-10 gap-8 justify-center items-center ">
     
    {paginatedData.map((data: any)=>{        
      return(
          <div 
          className="w-72 shadow-xl bg-white ring-sky-50 hover:ring-4 ring-offset-0 hover:ring-offset-2 hover:ring-sky-200 hover:drop-shadow-xl   hover:-translate-y-2 duration-700 transition-all rounded-lg">
      <Image 
      src={data.bgImg}
      alt="Mobile innovation"
      width={200}
      height={200}
      objectFit="fit"
      className="aspect-auto w-full rounded-t-xl"  
      /> 
      <div className=" pb-2 w-auto px-2">
        <h2 className='font-bold text-stone-500 tracking-tighter capitalize text-lg w-64 pt-4  text-pretty '>
          {data.title}
        </h2>
        <p className='font-semibold pt-3 pb-5  text-gray-500 text-xs capitalize'>By: {data.author} | {data.date}</p>
        <Link href={`/blogs/${data.id}`}>
        <button className='flex items-center text-white group bg-sky-500 hover:bg-sky-700 transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none'>
          Read 
          <ArrowRight className="ml-1 duration-300 transition-all group-hover:translate-x-2" size={16} />
          </button>
        </Link>
      </div>

      </div>
      
    )
  })}
  {/* Pagination Component */}
  </div>
  <div className="flex justify-end text-xs md:px-28 sm:px-5 mt-5 -z-10"> 
  <Pagination className="flex justify-end mt-4">
<PaginationContent>
  <PaginationItem>
    <PaginationPrevious
    className="hover:bg-gray-300 w-fit px-2 cursor-pointer"
    onClick={()=> currentPage > 1 && setCurrentPage(currentPage - 1)}
    /> 
  </PaginationItem>
  {pageNumbers.map((page)=>(

  <PaginationItem key={page}>
    <PaginationLink 
    className={` border-2 border-gray-200 hover:bg-gray-400 rounded-full cursor-pointer
      ${page === currentPage ? "bg-gray-400" : ""}
      `}
    onClick={()=> setCurrentPage(page)}
      >{page}</PaginationLink>
  </PaginationItem>
  ))}
  <PaginationItem>
    <PaginationNext 
    className="hover:bg-gray-300 w-fit px-2 cursor-pointer"
    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1) } />
  </PaginationItem>
</PaginationContent>
</Pagination>
</div>
      </>
  )
}

export default OurBlogsContent
