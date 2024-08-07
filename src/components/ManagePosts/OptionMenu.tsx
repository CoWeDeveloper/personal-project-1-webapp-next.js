"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";

function optionMenu() {
  const [colorbg, setColor] = useState<boolean>(false);
  const handleColor = (): void => {
    setColor(!colorbg);
    console.log(colorbg);
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
          <DropdownMenuItem className=" hover:!text-white group hover:!bg-[#2F7EAA]">
            <Image
              src="/assets/icons/Admin/pen.svg"
              alt="pen icon"
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
              alt="eye icon"
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
              alt="dusbin icon"
              width={100}
              height={100}
              objectFit="cover"
              className="w-4 mx-2 blogIcon"
            />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default optionMenu;
