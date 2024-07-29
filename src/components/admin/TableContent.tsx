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

function TableContent() {
  return (
    <>
      <Table className="border-2 border-gray-300 ">
        <TableHeader className="border-b-2 border-gray-300 text-stone-600 md:text-xl xs:text-sm ">
          <TableRow>
            <TableHead className="! w-5">S.No</TableHead>
            <TableHead>Publish Blogs</TableHead>
            <TableHead className="text-center">Publish Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
            {/* <DropdownMenuSeparator /> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-stone-500">
            <TableCell className="pl-6 font-medium ">1</TableCell>
            <TableCell className="flex">
              <Image
                src="/assets/images/Blogs/b1.webp"
                alt="Mobile innovation"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-lg w-24 mr-4"
              />
              <div className=" md:text-xl xs:text-sm md:w-96 xs:w-64 font-semibold text-stone-500 ">
                Redefining the flexibility of media and entertainment companies
              </div>
            </TableCell>
            <TableCell className="text-center font-medium md:text-base xs:text-xs">23-Jan-24</TableCell>
            <TableCell className="text-right md:pr-9 xs:pr-6">
              <OptionMenu />
            </TableCell>
          </TableRow>

          <TableRow className="text-stone-500">
            <TableCell className="pl-6 font-medium ">1</TableCell>
            <TableCell className="flex">
              <Image
                src="/assets/images/Blogs/b1.webp"
                alt="Mobile innovation"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-lg w-24 mr-4"
              />
              <div className=" md:text-xl xs:text-sm md:w-96 xs:w-64 font-semibold text-stone-500 ">
                Redefining the flexibility of media and entertainment companies
              </div>
            </TableCell>
            <TableCell className="text-center font-medium md:text-base xs:text-xs">23-Jan-24</TableCell>
            <TableCell className="text-right md:pr-9 xs:pr-6">
              <OptionMenu />
            </TableCell>
          </TableRow>

          <TableRow className="text-stone-500">
            <TableCell className="pl-6 font-medium ">1</TableCell>
            <TableCell className="flex">
              <Image
                src="/assets/images/Blogs/b1.webp"
                alt="Mobile innovation"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-lg w-24 mr-4"
              />
              <div className=" md:text-xl xs:text-sm md:w-96 xs:w-64 font-semibold text-stone-500 ">
                Redefining the flexibility of media and entertainment companies
              </div>
            </TableCell>
            <TableCell className="text-center font-medium md:text-base xs:text-xs">23-Jan-24</TableCell>
            <TableCell className="text-right md:pr-9 xs:pr-6">
              <OptionMenu />
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </>
  );
}

export default TableContent;
