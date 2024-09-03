"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp10 , ArrowDown10} from 'lucide-react';
import React, { useState, useEffect, ReactHTML } from "react";
import { PublishToast, UpdateToast } from "./subComponent/CustomToast";
import { useToast } from "@/components/ui/use-toast";
import OptionMenu from "./subComponent/OptionMenu";
import { StringMap } from "quill";

const fetchTableData = async ()=>{
  const res = await fetch("/api/blogs");
  const data = await res.json();
  return data;
} 

interface BlogData {
  id: string,
  title: string,
  author: string,
  bgImg: string,
  date: string,
}

function TableContent() {
  const [sortedData, setSortedData] = useState<any[]>([]);
  const [isAscending, setIsAscending] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { toast } = useToast();

  useEffect(() => {
    // Fetch and sort data on initial render
    fetchTableData().then((data) => {
      // console.log("Fetched Data:", data); // Add this line to inspect the data structure
      if (Array.isArray(data)) { // Check if data is an array
        const sorted = data.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return isAscending ? dateA - dateB : dateB - dateA;
        });
        setSortedData(sorted);
      } else {
        console.error("Fetched data is not an array");
      }
    });

    // Code for previewing blogs
    const blogSubmitted = localStorage.getItem('blogSubmitted');
    const blogUpdated = localStorage.getItem('blogUpdated');
    if (blogSubmitted) {
      toast({
        description: <PublishToast />, // Use the custom component as the description
        variant: "default",
      });
      // Remove the flag from localStorage
      localStorage.removeItem('blogSubmitted');
    }
    if (blogUpdated) {
      toast({
        description: <UpdateToast />,
        variant: "default",
      });
      localStorage.removeItem('blogUpdated');
    }
  }, [toast, isAscending]);

  const handleFiltre = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setSortedData(sorted);
    setIsAscending(!isAscending);
  };
 
  // filter data base on serach 
  const filtredData = sortedData.filter((data)=>{
    return data.title.toLowerCase().includes(searchQuery.toLowerCase())
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate the start and end indices of the rows for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Slice the data to get only the rows for the current page
  const paginatedData = filtredData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filtredData.length / rowsPerPage);
  
  // Calculate the start and end of the range of pages to display
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handleDelete = (id: string) => {
    // Remove the deleted item from the state
    setSortedData((prevData) => prevData.filter((item) => item.id !== id));
  };
  
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{

   setSearchQuery(e.target.value) 
  }

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

  return (
    <>
      <header className="flex flex-wrap md:justify-start xs:justify-center lg:justify-between lg:items-start md:items-end md:mb-0 xs:mb-5">
          <div className="text-stone-600 text-4xl font-semibold mb-10">
            Manage Posts
          </div>
          <div className="flex md:flex-row xs:flex-col lg:items-start md:items-end xs:px-2 md:px-0 flex-wrap w-full  md:justify-between lg:w-auto xs:space-x-0 sm:space-x-4 md:my-2 lg:my-0">
          <div className="input__search">
    <Image
      src="./assets/icons/Admin/search.svg"
      alt="Plus Icon"
      width={100}
      height={100}
      className="w-5 mx-2"
    />
    <input
      type="text"
      placeholder="Search"
      onChange={onSearch}
      className="outline-none w-full mx-auto"
    />
  </div>
            <div className="flex !justify-end items-center w-full sm:w-auto xs:justify-center space-x-5 xs:my-2 md:my-0">
              <Link href={"/editor"}>
                <button className="flex items-center bg-[#58C796] hover:bg-[#57bb8f] text-white rounded-lg px-5 py-1.5">
                  <Image
                    src="./assets/icons/Admin/plus.svg"
                    alt="Plus Icon"
                    width={100}
                    height={100}
                    className="w-5 mr-2"
                  />
                  Add Post
                </button>
              </Link>
           
              {/* <button className="flex items-center  bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white rounded-lg px-5 py-1.5">
              <Image
                src="./assets/icons/Admin/managePost.svg"
                alt="Plus Icon"
                width={100}
                height={100}
                className="w-6 mr-2"
                />
              Manage Post
            </button> */}
            </div>
          </div>
        </header>
        {/* Table Content */}
      <Table>
        <TableHeader className="md:text-xl xs:text-sm">
          <TableRow>
            <TableHead>Publish Blogs</TableHead>
            <TableHead>Author</TableHead>
            <TableHead onClick={handleFiltre} className="text-center cursor-pointer hover:bg-slate-200 hover:rounded-lg text-lg flex items-center">
              Publish Date
              {isAscending ? (<ArrowUp10  className="w-5" />) : (<ArrowDown10  className="w-5" />)}
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="!gap-y-10">
          {paginatedData.map((data: any, index: number) => (
            <TableRow
              key={data.id}
              className="bg-slate-100 hover:bg-slate-100 hover:my-5 text-stone-500 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1 border-8 border-white duration-600 transition-all"
            >
              <TableCell className="flex items-center">
                <span className="mr-6 font-medium bg-sky-500 text-slate-200 w-6 drop-shadow-lg text-xs px-1 py-1 rounded-full text-center">
                  {startIndex + index + 1}
                </span>
                <Image
                  src={data.bgImg}
                  alt="blog image"
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-lg aspect-auto mr-4"
                />
                <div className="md:text-xl xs:text-sm md:w-96 xs:w-64 font-semibold text-stone-500">
                {highlightText(data.title, searchQuery)}
                </div>
              </TableCell>
              <TableCell>
                {data.author}
              </TableCell>
              <TableCell className="text-right w-36 font-medium md:text-base xs:text-xs">
                {data.date}
              </TableCell>
              <TableCell className="text-right md:pr-9 xs:pr-6">
                <OptionMenu id={data.id} onDelete={handleDelete} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Component */}
      <Pagination className="flex justify-end mt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="hover:bg-gray-400 w-fit px-2 cursor-pointer"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            />
          </PaginationItem>

          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={`border-2 border-gray-200 hover:bg-gray-400 cursor-pointer ${
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
              className="hover:bg-gray-400 w-fit px-2 cursor-pointer"
              onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default TableContent;
