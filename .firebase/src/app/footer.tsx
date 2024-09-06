"use client";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation'

function footer() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div> 
        {!isLoginPage && <Footer />}
    </div>
  )
}

export default footer
