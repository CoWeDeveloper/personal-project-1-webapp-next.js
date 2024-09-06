"use client";
import FooterComp from "@/components/Footer";
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div> 
        {!isLoginPage && <FooterComp />}
    </div>
  )
}

export default Footer;
