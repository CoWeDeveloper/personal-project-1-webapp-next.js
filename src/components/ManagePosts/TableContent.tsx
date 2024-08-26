"use client";
import OptionMenu from "./OptionMenu";
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
import Image from "next/image";
import { ArrowUp10 , ArrowDown10} from 'lucide-react';

import { useState, useEffect } from "react";
import { getTableData } from "@/lib/tableData";
import { PublishToast, UpdateToast } from "./CustomToast";
import { useToast } from "@/components/ui/use-toast";



const fetchTableData = async ()=>{
  const res = await fetch("/api/blogs");
  const data = await res.json();
  return data;
} 

function TableContent() {
  const [sortedData, setSortedData] = useState<any[]>([]);
  const [isAscending, setIsAscending] = useState<boolean>(false);

  const { toast } = useToast();

  useEffect(() => {
    // Fetch and sort data on initial render
    fetchTableData().then((data) => {
      console.log("Fetched Data:", data); // Add this line to inspect the data structure
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
    // const data = getTableData();
    // const sorted = data.sort((a: any, b: any) => {
    //   const dateA = new Date(a.date).getTime();
    //   const dateB = new Date(b.date).getTime();
    //   return isAscending ? dateA - dateB : dateB - dateA;
    // });
    // setSortedData(sorted);

    
    const blogSubmitted = localStorage.getItem('blogSubmitted');
    const blogUpdated = localStorage.getItem('blogUpdated');
    if (blogSubmitted) {
      // Show the toast notification
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate the start and end indices of the rows for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Slice the data to get only the rows for the current page
  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  
  // Calculate the start and end of the range of pages to display
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <>
      <Table>
        <TableHeader className="md:text-xl xs:text-sm">
          <TableRow>
            <TableHead>Publish Blogs</TableHead>
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
                  {data.title}
                </div>
              </TableCell>
              <TableCell className="text-right w-36 font-medium md:text-base xs:text-xs">
                {data.date}
              </TableCell>
              <TableCell className="text-right md:pr-9 xs:pr-6">
                <OptionMenu id={data.id} />
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
