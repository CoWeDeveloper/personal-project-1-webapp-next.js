import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function TableContent() {
  return (
    <>
    <Table className="border-2 border-gray-300 ">

  <TableHeader className="border-b-2  border-gray-300 text-stone-600 text-xl">
    <TableRow>
      <TableHead className="w-[50px]">S.No</TableHead>
      <TableHead>Publish Blogs</TableHead>
      <TableHead  className="text-center">Publish Date</TableHead>
      <TableHead className="text-right ">Actions</TableHead>
    </TableRow>
  </TableHeader>
    <DropdownMenuSeparator />
  <TableBody >
    <TableRow className="text-stone-500">
      <TableCell className=" pl-6 font-medium">1</TableCell>
      <TableCell className="flex">
      <Image 
        src="/assets/images/Blogs/b1.webp"
        alt="Mobile innovation"
        width={100}
        height={100}
        objectFit="cover"
        className="rounded-lg w-24 mr-4"  
        />
        <div className=" text-xl w-96 font-semibold text-stone-500 ">

        Redefining the flexibility of media and entertainment companies
        </div>
        </TableCell>
      <TableCell className="text-center font-medium">23-Jan-24</TableCell>
      <TableCell className="text-right pr-9">

      <DropdownMenu>
  <DropdownMenuTrigger className="">
        <Image 
        src="/assets/icons/Admin/threeDots.svg"
        alt="View more icon"
        width={100}
        height={100}
        objectFit="cover"
        className="w-6"     
        />
</DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={-2}    
 className=" p-0 pt-0 mt-0 bg-white shadow-lg w-[150px]">
    {/* <DropdownMenuLabel className="border-b-2 border-gray-300">Options</DropdownMenuLabel> */}
    {/* <DropdownMenuSeparator /> */}
    <DropdownMenuItem className="hover:!text-white group hover:!bg-[#2F7EAA]">
   
    <Image         
        src="/assets/icons/Admin/pen.svg"
        alt="View more icon"
        width={100}
        height={100}
        objectFit="cover"
        className="w-4 mx-2 blogIcon"     
        />
        Edit
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:!text-white hover:!bg-[#2F7EAA]  group">
    <Image 
        src="/assets/icons/Admin/view.svg"
        alt="View more icon"
        width={100}
        height={100}
        objectFit="cover"
        className="w-4 mx-2 blogIcon"     
        />
        Preview
        </DropdownMenuItem>
    <DropdownMenuItem className="hover:!text-white hover:!bg-[#2F7EAA] group">
    <Image 
        src="/assets/icons/Admin/delete.svg"
        alt="View more icon"
        width={100}
        height={100}
        objectFit="cover"
        className="w-4 mx-2 blogIcon"     
        />
        Delete
        </DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>

 
   


      </TableCell>
    </TableRow>
  </TableBody>
</Table>
    </>
  )
}

export default TableContent
