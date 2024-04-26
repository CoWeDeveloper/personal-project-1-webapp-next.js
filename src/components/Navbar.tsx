

import Link from "next/link";
import Image from 'next/image';

// import assets
import logo from "../../public/assets/images/cloudlogo.png"; 
import {Presentation} from 'lucide-react';
import NavbarMoblie from "./MenuNavbar";

function Navbar()  {
  


  return (
    <> 
    <header className='absolute z-10 w-full mx-auto justify-center px-0 lg:px-0 xl:px-16 2xl:px-36 py-2'>
        <nav className='flex m-auto items-center justify-between mx-5'> 
            <div className='pl-34'>
              <Image src={logo} className='w-37 cursor-pointer'  alt="CloudTanentLogo" />
            </div> 

            <div className='flex items-end text-center'>
            <ul className='lg:flex space-x-4 hidden text-gray-300 lg:gap-0 xl:gap-3 2xl:gap-4'>
                <Link href={'/'} className=' justify-center hover:text-white active:hover:text-white '><li>Home</li></Link>
                <Link href={'/about'} className='hover:text-white active:hover:text-white'><li>About Us</li></Link>
                <Link href={'/network'} className=' justify-center hover:text-white active:hover:text-white'><li className=''>Services Network</li></Link>
                <Link href={'/software'} className='hover:text-white active:hover:text-white'><li>Software</li></Link>
                <Link href={'/customers'} className='hover:text-white active:hover:text-white'><li>Customers</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Alliances</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'><li>Resources</li></Link>
                <Link href={'/'} className='hover:text-white active:hover:text-white'>
                  <li className='hover:translate-y-1 group  transition ease-in-out duration-500  flex gap-1'>
                  <div className='flex justify-end text-nowrap'>
                  <Presentation className='group-hover:scale-x-[-1] transition ease-in-out duration-500 ' />
                    Request Demo
                  </div>
                  </li>
                </Link>
            </ul>
             <div className='items-end cursor-pointer md:flex lg:hidden '>
              <NavbarMoblie />
            </div>

            </div>


        </nav>
    
        </header>
    </>
  )
}

export default Navbar;
