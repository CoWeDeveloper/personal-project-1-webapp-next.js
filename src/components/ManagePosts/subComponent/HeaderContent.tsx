"use client"
import Image from "next/image";
import Link from "next/link";
import BackBtn from "./BackBtn";
import logo from "../../../../public/assets/images/cloudlogo.png";
import { usePathname } from "next/navigation";

function HeaderContent() {
    const pathname = usePathname();
  return (
   <>
         {/* Container for BackBtn and logo */}
         <div className="flex items-center  md:w-auto ">
        <BackBtn />
        <Link href={"/"}>
          <Image 
            src={logo}
            alt="company logo"
            width={200}
            height={200}
            className="w-40 ml-12 relative z-10 "
          />
        </Link>
      </div>

      
      { pathname === "/editor" ? (
      <div className="w-full text-center   text-white font-semibold text-3xl mt-2 md:mt-0 md:absolute md:inset-0 flex items-center justify-center">
        Create a Blog
      </div>) : (null)
      }

      
   </>
  )
}

export default HeaderContent
