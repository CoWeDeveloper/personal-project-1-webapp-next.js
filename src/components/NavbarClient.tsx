"use client"
import Link from "next/link";
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation'
import { useState, useEffect } from "react";

// import assets
import logo from "../../public/assets/images/cloudlogo.png"; 
import {Presentation } from 'lucide-react';
import NavbarMoblie from "./MenuNavbar";
import DropMenu from "./DropMenu";


function NavbarClient()  {
    const [ scrollUp, setScrollUp ] = useState(false);
    
    useEffect(() => {
      let prevScroll = window.scrollY;
  
      const handleScroll = () => {
          const currentScroll = window.scrollY;
          const isScrollingUp = prevScroll > currentScroll && currentScroll > 0;
          
          setScrollUp(isScrollingUp);
          prevScroll = currentScroll;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const pathname = usePathname();
  const params = useParams();
  // const blogTitle = params.slug;
  const hideNavbarOnRoutes = ['/posts', '/editor'];
  const showNavbar = !hideNavbarOnRoutes.includes(pathname)
  const isBlogPage = pathname.startsWith('/blogs/');

  return (
    <> 
    {showNavbar && 
    
<header 
  className={`absolute w-full mx-auto lg:pl-24 md:pl-14 xs:pl-4 py-2 z-50
    ${pathname === "/faq" ? "!bg-[#211c5d] z-20" : ""}
    ${pathname === "/login" ? "!bg-white/10 z-20 duration-300" : ""}
    ${isBlogPage ? "!bg-[#211c5d] z-20" : ""}
    ${scrollUp ? "bg-[#211c5d] sticky top-0 z-50" : "bg-transparent"}
  `}
>
        <nav className='flex mx-auto items-center lg:justify-around  justify-between'> 
            <div className='xl:ml-24 '>
             <Link href={'/'}><Image src={logo} className='w-40 cursor-pointer' alt="CloudTanentLogo" /> </Link>
            </div> 

            <div className='flex items-end text-center text-sm pt-2'>
            <ul  className="lg:flex space-x-4 hidden text-gray-300 lg:gap-0 xl:gap-3 2xl:gap-4 " >
                <Link href={'/'} className=' justify-center hover:text-white active:hover:text-white '><li>Home</li></Link>
                <Link href={'/about'} className='hover:text-white active:hover:text-white'><li>About Us</li></Link>
                <Link href={'/networks'} className=' justify-center hover:text-white active:hover:text-white'><li className=''>Services Network</li></Link>
                <Link href={'/softwares'} className='hover:text-white active:hover:text-white'><li>Softwares</li></Link>
                <Link href={'/customers'} className='hover:text-white active:hover:text-white'><li>Customers</li></Link>
                <Link href={'/alliances'} className='hover:text-white active:hover:text-white'><li>Alliances</li></Link>
                <li className='group  flex items-start gap-1'><DropMenu /></li>
                <Link href={'/demo'} className='hover:text-white active:hover:text-white'>
                  <li className='hover:translate-y-1 group transition ease-in-out duration-500  flex gap-1'>
                  <div className='flex justify-end text-nowrap'>
                  Request Demo
                  <Presentation className='group-hover:scale-x-[-1] transition ml-1 ease-in-out duration-500 ' />
                  </div>
                  </li>
                </Link>
            </ul>
             <div className='items-end cursor-pointer md:flex lg:hidden'>
              <NavbarMoblie />
            </div>
            </div>
        </nav>
    
        </header>
  }
    </>
  )
}

export default NavbarClient;
