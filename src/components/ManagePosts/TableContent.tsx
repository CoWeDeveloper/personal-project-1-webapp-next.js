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

import { tableData } from "@/lib/tableData";
import { title } from "process";


function TableContent() {
  return (
    <>
      <Table className="border-2 border-gray-400 ">
        <TableHeader className="border-2  bg-sky-500 text-white border-sky-700  md:text-xl xs:text-sm ">
          <TableRow>
            <TableHead className="! w-5">S.No</TableHead>
            <TableHead>Publish Blogs</TableHead>
            <TableHead className="text-center">Publish Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
            {/* <DropdownMenuSeparator /> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data: any, index:number)=>
            {
            return(   
            <TableRow key={data.id} className="text-stone-500 hover:drop-shadow-lg duration-600 transition-all  hover:bg-slate-200">
            <TableCell className="pl-6 font-medium ">{index+1}</TableCell>
            <TableCell className="flex">
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
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

    </>
  );
}

export default TableContent;
