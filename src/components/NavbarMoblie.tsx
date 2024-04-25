"use client";
import React, { useState } from "react";
// import assets
import { Menu, CircleX } from "lucide-react";
import styles from "../app/navbar.module.css"

function NavbarMoblie() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        onClick={handleNav}
        className="items-end cursor-pointer md:flex lg:hidden "
      >
        <Menu className="text-white" size={40} />
</div>
{/* <a href="#sidebar" className="burger-menu-icon">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</a> */}


<div id="sidebar" className="sidebar">
  <p>Sidebar Content</p>
</div>
      <div
      style={{ backgroundImage: `url("assets/images/Software/softwareHeader.webp")` }}
        className={
          menuOpen
            ? "fixed inset-0 z-100  sm:w-100 sm:hidden sm:h-screen bg-cover bg-center bg-no-repeat z-100 transition-all duration-500 ease-in"
            : "fixed left-[100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className={`w-screen h-screen text-cyan-700 `}       >
          <div className="relative text-end">
          <CircleX onClick={handleNav} color="#ffff" size={24} />
          </div>
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}

export default NavbarMoblie;
