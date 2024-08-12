"use client";
import Image from "next/image";
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {tableData} from "@/lib/tableData";
import {getTableData} from "@/lib/tableData";
import {useState, useEffect} from "react";



function TableContent() {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    setPosts(getTableData);                
  }, [])

  return (
    <>
    {/* <div  className="w-full">
      <div className="flex justify-between md:text-xl xs:text-sm">

        <div className="ml-2">Publish Blogs</div>
        <div className="flex justify-between w-96 mr-5">
          <div >Publish Date</div>
          <div>Actions</div>
        </div>
      </div>

      <div className="w-full">
      {tableData.map((data: any, index:number)=>
           
           {
            return(   
            <div 
            key={data.id} className="flex justify-between bg  text-stone-500 drop-shadow-md   hover:drop-shadow-lg duration-600 transition-all  hover:bg-slate-200 ">
            
            <div className="flex">
            <span className=" font-medium bg-sky-500 text-slate-200 drop-shadow-lg text-xs  rounded-full text-center">
               {index+1}
              
              </span>
              <Image
                src={data.bgImg}
                alt="blog image"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-lg aspect-auto mr-4 "
                />
              <div className=" md:text-xl xs:text-sm font-semibold text-stone-500 ">
                {data.title}
              </div>
            </div>
            <div className="text-center font-medium md:text-base xs:text-xs">
              {data.date}
            </div>
            <div className="">
              <OptionMenu />
            </div>    
          </div>

               )
          }
          )}
       
      </div>
    </div> */}
      <Table>
        <TableHeader className="md:text-xl xs:text-sm ">
          <TableRow>

            <TableHead>Publish Blogs</TableHead>
            <TableHead className="text-center">Publish Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
            {/* <DropdownMenuSeparator /> */}
          </TableRow>
        </TableHeader>
        <TableBody className="!gap-y-10">
          {tableData.map((data: any, index:number)=>
           
           {
            return(   
            <TableRow  
            key={data.id} className="bg-slate-100 hover:bg-slate-100 hover:my-5 text-stone-500 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1 border-8 border-white duration-600 transition-all "> 
            <TableCell className="flex items-center">
            <span className="mr-6 font-medium bg-sky-500 text-slate-200 w-6 drop-shadow-lg text-xs px-1 py-1 rounded-full text-center">
               {index+1}
              
              </span>
              <Image
                src={data.bgImg}
                alt="blog image"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-lg aspect-auto mr-4 "
                />
              <div className=" md:text-xl xs:text-sm md:w-96 xs:w-64 font-semibold text-stone-500 ">
                {data.title}
              </div>
            </TableCell>
            <TableCell className="text-center font-medium md:text-base xs:text-xs">
              {data.date}
            </TableCell>
            <TableCell className="text-right md:pr-9 xs:pr-6">
              <OptionMenu />
            </TableCell>    
          </TableRow>

               )
          }
          )}
          
        </TableBody>
      </Table>
      
      <Pagination  className="flex justify-end mt-2">
  <PaginationContent>
    <PaginationItem className=" ">
      <PaginationPrevious className="hover:bg-gray-400 w-fit px-2" href="#" />
    </PaginationItem>
    <PaginationItem className="mx-1 ">
      <PaginationLink className="border-2 border-gray-200 hover:bg-gray-400" href="#">1</PaginationLink>
      <PaginationLink className="border-2 border-gray-200 hover:bg-gray-400" href="#">2</PaginationLink>
      <PaginationLink className="border-2 border-gray-200 hover:bg-gray-400" href="#">3</PaginationLink>
    </PaginationItem>
    {/* <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem> */}
    <PaginationItem>
      <PaginationNext className="hover:bg-gray-400 w-fit px-2" href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

    </>
  );
}

export default TableContent;
