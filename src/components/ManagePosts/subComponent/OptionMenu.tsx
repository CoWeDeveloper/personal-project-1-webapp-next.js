"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { tableData } from "@/lib/tableData";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { DeleteToast } from "./CustomToast";

interface OptionMenuProps {
  id: string;
  onDelete: (id: string) => void; // Callback for deleting
}
const OptionMenu: React.FC<OptionMenuProps> = ({ id, onDelete  }) => {
  const {toast} = useToast();
  const [colorbg, setColor] = useState<boolean>(false);
  const handleColor = (): void => {
    setColor(!colorbg);
    console.log(colorbg);
  };
  
  
  const router = useRouter();
  const deleteBlog = (id: string) =>{
    const index = tableData.findIndex(blog => blog.id === id);
  if (index !== -1) {
    tableData.splice(index, 1);
  }   
  }
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          description: <DeleteToast />,
          variant: "destructive"
        });
        onDelete(id); // Update local state
      } else {
        throw new Error("Failed to delete the blog post.");
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
      toast({
        title: "Error",
        description: "Failed to delete the blog post.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <DropdownMenu
        onOpenChange={() => {
          handleColor();
        }}
      >
        <DropdownMenuTrigger className="focus:outline-none">
          {/* <div className="input__search"> */}
          <Image
            src="/assets/icons/Admin/threeDots.svg"
            alt="View more icon"
            width={100}
            height={100}
            objectFit="cover"
            className={`w-6  ${colorbg ? "viewMore1" : "viewMore2"}  `}
          />

          {/* </div> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={-2}
          className=" p-0 pt-0 mt-0 bg-white shadow-lg w-[150px]"
        >
          {/* <DropdownMenuLabel className="border-b-2 border-gray-300">Options</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
            <Link href={`/editor?id=${id}`}>
          <DropdownMenuItem className="hover:!text-white cursor-pointer group duration-300 transtion-all hover:!bg-[#2F7EAA]">
            <Image
              src="/assets/icons/Admin/pen.svg"
              alt="pen icon"
              width={100}
              height={100}
              objectFit="cover"
              className="w-4 mx-2 blogIcon duration-300 transtion-all"
              />
            Edit
          </DropdownMenuItem>
            </Link>
            <Link  href={`/blogs/${id}`} target="">
          <DropdownMenuItem 
          className=" hover:!text-white hover:!bg-[#2F7EAA] cursor-pointer group duration-300 transtion-all">
            <Image
              src="/assets/icons/Admin/view.svg"
              alt="eye icon"
              width={100}
              height={100}
              objectFit="cover"
              className="w-4 mx-2 blogIcon duration-300 transtion-all"
              />
            Preview
          </DropdownMenuItem>
              </Link>
          <DropdownMenuItem 
          onClick={handleDelete}
          className="hover:!text-white hover:!bg-[#2F7EAA] group cursor-pointer duration-300 transtion-all ">
            <Image
              src="/assets/icons/Admin/delete.svg"
              alt="dusbin icon"
              width={100}
              height={100}
              objectFit="cover"
              className="w-4 mx-2 blogIcon duration-300 transtion-all"
            />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default OptionMenu;
