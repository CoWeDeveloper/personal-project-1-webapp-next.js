"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import assets
import { Menu, CircleX } from "lucide-react";
import logo from "../../public/assets/images/WhiteCloudBackground.png";
import {Presentation} from 'lucide-react';

//  Note: ask noman about creating creating pop in and out effect on navSlider icons after clicking
function NavbarMoblie() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        onClick={handleNav}
        className={`items-end cursor-pointer md:flex lg:hidden transition-transform duration-200 ease-in-out ${
          menuOpen ? "transform scale-0" : ""
        } `}
      >
        <Menu className="text-white" size={40} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed inset-0 md:w-screen bg-[#114d966e] md:h-screen transition-all duration-700 ease-in"
            : "fixed left-[100%] top-0 right-0 duration-300 "
        }
      >
    
        <div
          className={`w-screen h-screen relative bg-cover bg-center bg-no-repeat mix-blend-multiply`}
          style={{
            backgroundImage: `url("assets/images/Software/softwareHeader.webp")`,
          }}
        >
          <div className="relative cursor-pointer top-10 left-[90%]">
            <CircleX
              onClick={handleNav}
              color="#4ccdee"
              size={30}
            />
          </div>
            <div className="relative w-64 mx-auto ">
              <Image
                src={logo}
                className="w-64 cursor-pointer "
                alt="CloudTanentLogo"
              />
            </div>

            <div className="grid md:grid-cols-12 md:py-52  px-4 max-w-screen-md mx-auto">
            <div className="md:col-span-6 ">
            <ul className='flex flex-col text-gray-300 md:text-2xl md:gap-1'>
                <Link href={'/'} className=' justify-center hover:text-white active:hover:text-white '><li>Home</li></Link>
                <Link href={'/about'} className='hover:text-white active:hover:text-white'><li>About Us</li></Link>
                <Link href={'/network'} className=' justify-center hover:text-white active:hover:text-white'><li className=''>Services Network</li></Link>
                <Link href={'/software'} className='hover:text-white active:hover:text-white'><li>Software</li></Link>
                <Link href={'/customers'} className='hover:text-white active:hover:text-white'><li>Customers</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Alliances</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Resources</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'>
                  <li className='hover:translate-y-1 group  transition ease-in-out duration-500  flex justify-center gap-1'>
                  <div className='flex justify-end items-center text-nowrap'>
                  <Presentation className='group-hover:scale-x-[-1] transition ease-in-out duration-500 ' />
                    Request Demo
                  </div>
                  </li>
                </Link>
            </ul>
            </div>

            <div className="md:col-span-6">
hi
            </div>
            </div>
         
          <footer className="absolute bottom-0 right-0 left-0 text-center z-100">
          <div className="text-white font-bold text-sm">&copy;2024 CloudTenants. All Right Reserved.</div>
          </footer>


        </div>
      </div>
    </>
  );
}

export default NavbarMoblie;
