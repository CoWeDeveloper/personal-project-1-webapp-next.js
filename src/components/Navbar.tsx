import React from 'react'
import Link from "next/link";
import Image from 'next/image';
// import assets
import logo from "../../public/assets/images/cloudlogo.png"; 
import {Presentation} from 'lucide-react';

const Navbar = () => {
  return (
    <> 
        <nav className='flex w-5/6 m-auto justify-between relative top-3 left-0 z-50'> 
            <div>
              <Image src={logo} className='w-36 cursor-pointer'  alt="CloudTanentLogo" />
            </div> 

            <div className='flex items-end '>
            <ul className='flex space-x-4 text-gray-300 '>
                <Link href={'/'} className='hover:text-white active:hover:text-white '><li>Home</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>About Us</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Services Network</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Software</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Customers</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Alliances</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Resources</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'>
                  <li className='hover:translate-y-1 group  transition ease-in-out duration-500  flex gap-1'>
                  <Presentation className='group-hover:scale-x-[-1] transition ease-in-out duration-500 ' />
                    Request Demo
                  </li>
                </Link>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
