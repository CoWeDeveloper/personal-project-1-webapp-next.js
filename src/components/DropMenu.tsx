"use client";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
// import icons
import { Newspaper, Images } from "lucide-react";
import career from "../../public/assets/icons/DropMenu/career.svg";
import faq from "../../public/assets/icons/DropMenu/faq.svg";
import admin from "../../public/assets/icons/DropMenu/personAdmin.svg";

function DropMenu() {
  return (
    <>
      <div className="relative inline-block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-0 p-0">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-2 py-1 bg-white text-black transition-all  duration-600">
                <NavigationMenuLink href="/careers">
                  <div className="flex items-center rounded-lg w-40 px-2 py-1 transition-all  duration-700 justify-start hover:bg-gray-300">
                    <Image src={career} className="mx-2" alt="career" width={24} height={24} />
                    Career
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="/blogs">
                  <div className="flex items-center px-2 rounded-lg py-1 transition-all duration-700 hover:bg-gray-300">
                    <Newspaper  className="mx-2 text-stone-900" strokeWidth={1} />
                    Blogs
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="/faq">
                  <div className="flex items-center px-2 rounded-lg py-1  hover:bg-gray-300 transition-all duration-700">
                    <Image src={faq} alt="career" className="mx-2.5 text-stone-900"  width={20} height={20} />
                    FAQ&rsquo;s
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <div className="flex items-center px-2 rounded-lg py-1  hover:bg-gray-300 transition-all duration-700">
                  <Images  className="mx-2 text-stone-900" strokeWidth={1}  /> 
                    Gallery
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink href="/login">
                  <div className="flex items-center px-2 rounded-lg py-1  hover:bg-gray-300 transition-all duration-700">
                  <Image src={admin} alt="admin icon" width={24} height={24} className="mx-2 text-stone-900 "  /> 
                  Admin  
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default DropMenu;
