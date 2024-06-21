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
            ? "fixed inset-0 z-50 md:w-screen  bg-[#114d966e] md:h-screen transition-all duration-700 ease-in"
            : "fixed left-[100%] top-0 right-0 duration-300 "
        }
      >
    
        <div
          className={`w-screen h-screen relative bg-cover bg-center bg-no-repeat mix-blend-overlay z-50`}
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

            <div className="grid z-100 relative md:grid-cols-12 md:py-16 px-4 max-w-screen-md mx-auto ">
            <div className="md:col-span-6">
            <ul className='relative flex flex-col text-white md:text-xl sm:text-2xl xs:text-xl font-medium sm:pt-32 sm:pb-20 xs:pt-28 md:gap-1 sm:gap-2 xs:gap-1'>
                <Link  onClick={handleNav} href={'/'} className=' justify-center hover:text-white active:hover:text-white drop-shadow-xl'><li>Home</li></Link>
                <Link  onClick={handleNav} href={'/about'} className='hover:text-white  active:hover:text-white drop-shadow-xl'><li>About Us</li></Link>
                <Link  onClick={handleNav} href={'/networks'} className=' justify-center drop-shadow-xl hover:text-white active:hover:text-white'><li className=''>Services Network</li></Link>
                <Link  onClick={handleNav} href={'/softwares'} className='hover:text-white drop-shadow-xl active:hover:text-white'><li>Softwares</li></Link>
                <Link  onClick={handleNav} href={'/customers'} className='hover:text-white drop-shadow-xl active:hover:text-white'><li>Customers</li></Link>
                <Link  onClick={handleNav} href={'/alliances'} className='hover:text-white drop-shadow-xl active:hover:text-white'><li>Alliances</li></Link>
                <Link  onClick={handleNav} href={'/careers'} className='hover:text-white drop-shadow-xl active:hover:text-white'><li>Careers</li></Link>
                <Link  onClick={handleNav} href={'/demo'} className='hover:text-white drop-shadow-xl active:hover:text-white'>
                  <li className='hover:translate-y-1 group  transition ease-in-out duration-500  flex justify-center gap-1'>
                  <div className='flex justify-end items-center text-nowrap'>
                  <Presentation className='group-hover:scale-x-[-1] transition ease-in-out duration-500 ' />
                    Request Demo
                  </div>
                  </li>
                </Link>
            </ul>
            </div>

            <div className="relative md:col-span-6 flex flex-col justify-center md:pt-20 sm:pt-7 xs:pt-48  items-center">
            <ul className="text-white drop-shadow-xl text-md font-medium">
                    <li className="pt-1">PAK:  <span className="hover:font-bold hover:underline duration-500"> +92 213 497 1995</span></li>
                    <li className="pt-1">KSA:  <span className="hover:font-bold hover:underline duration-500"> +96 659 427 4605</span></li>
                    <li className="pt-1">UAE:  <span className="hover:font-bold hover:underline duration-500"> +971 55 548 8093</span></li>
                    <li className="pt-1">QAT:  <span className="hover:font-bold hover:underline duration-500"> +974 5573 0350</span></li>
                    <li className="pt-1">Email:<span className="hover:font-bold hover:underline duration-500"> sales@cloudtenants.com</span></li>
                    <ul className="flex justify-center text-gray-500 text-left text-sm dark:text-gray-400 font-medium mt-3 ">
                    <Link target="_blank" href={"https://www.facebook.com/people/Cloud-Tenants-Pvt-Ltd/61555327557192/"} className="text-white p-3 mr-1 bg-[rgba(256,256,256,.2)] rounded-full hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19" className="w-4 h-4"><path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path></svg></li></Link>
                    <Link target="_blank" href={"https://www.linkedin.com/company/cloud-tenants-pvt-ltd/"}               className="mx-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15" className="w-4 h-4"><path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"></path><path d="M3 5.012H0V15h3V5.012Z"></path></svg></li></Link>
                    <Link target="_blank" href={"https://www.instagram.com/cloudtenants/"}                                className="mx-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4"><path  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></li></Link>
                    <Link target="_blank" href={"https://x.com/TenantsCloud"}                                             className="ml-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4"><path fill="currentColor" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"></path></svg></li></Link>
                    </ul>
                    </ul>
            </div>
            </div>
         
          <footer className="absolute bottom-0 right-0 left-0 text-center">
          <div className="text-white font-bold text-sm relative">&copy;2024 CloudTenants. All Right Reserved.</div>
          </footer>


        </div>
      </div>
    </>
  );
}

export default NavbarMoblie;
