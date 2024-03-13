import React from 'react'
import logo from "../../public/assets/images/cloudlogo.png"; 
import Link from "next/link"
import Image from 'next/image';

const Navbar = () => {
  return (
    <> 
        <nav className='flex w-5/6 m-auto justify-between '> 
            <div>
              <Image src={logo} className='w-56 cursor-pointer'  alt="CloudTanentLogo" />
            </div> 

            <div className='flex items-end '>
            <ul className='flex space-x-2'>
                <Link href={'/'} className=' '><li>Home</li></Link>
                <Link href={'/'} className=''><li>About Us</li></Link>
                <Link href={'/'} className=''><li>Services Network</li></Link>
                <Link href={'/'} className=''><li>Software</li></Link>
                <Link href={'/'} className=''><li>Customers</li></Link>
                <Link href={'/'} className=''><li>Alliances</li></Link>
                <Link href={'/'} className=''><li>Resources</li></Link>
                <Link href={'/'} className=''><li>Request Demo</li></Link>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
