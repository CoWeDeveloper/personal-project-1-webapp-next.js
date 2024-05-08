"use client"
import Image from "next/image";
import Link  from "next/link";
import { useState } from "react";


// import icons
import { ChevronDown  } from "lucide-react";
import career from "../../public/assets/icons/DropMenu/career.svg";
import faq from "../../public/assets/icons/DropMenu/faq.svg";

function DropMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
return (
    <>
       <div   className='relative inline-block'>
                <div     onMouseEnter={()=> setMenuOpen(true)} onMouseLeave={()=> setMenuOpen(false)}
                    className='flex justify-end text-nowrap cursor-pointer group-hover:relative  transition-all'
                  
                >
                    Resources
                    <ChevronDown className="group-hover:rotate-180 transition-all ease-out duration-300" />
                </div>

                <ul
                    onMouseEnter={()=> setMenuOpen(true)} onMouseLeave={()=> setMenuOpen(false)}
                    className={`absolute top-full left-0 mt-2 w-32 text-sm bg-white border border-gray-300 rounded-md shadow-lg 
                    overflow-hidden transform origin-top  transition-all 
                    ${menuOpen ? "duration-1000 h-[150px] translate-y-0 opacity-100" : "duration-700 h-0 -translate-y-2/4 opacity-0" } `}
                >
                    <Link href={"/careers"}><li className="py-2 px-4 text-black text-left hover:bg-gray-300 flex items-center justify-between">Careers<Image src={career} alt="career" width={24} height={24}/></li></Link>
                    <li className="py-2 px-4 text-black text-left hover:bg-gray-300">Blogs</li>
                    <Link href={"/faq"}><li className="py-2 px-4 text-black text-left hover:bg-gray-300 flex items-center justify-between">FAQ's<Image src={faq} alt="career" width={20} height={20}/></li></Link>
                    <li className="py-2 px-4 text-black text-left hover:bg-gray-300">Gallery</li>
                </ul>
            </div>
    </>
  )
}

export default DropMenu
