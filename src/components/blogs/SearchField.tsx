"use client";
import {motion} from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

function SearchField() {
    const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('blur', handleBlur);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);
  return (
    <>
      <motion.div
        onClick={handleSearchIconClick}
        className={`input__search   mb-4  bg-sky-50 border-sky-50 mx-[23%] duration-700 flex justify-center  items-center
            ${ isSearchActive ? 'translate-y-48 w-96 ' : '-translate-y-1 w-14 rounded-t-none'}
        `}
        animate={{ y: isSearchActive ? 20 : 0 }} // Animate y-axis to move down
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Image
          src="/assets/icons/Admin/search.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className="blog__searchIcon w-5 mx-2 scale-100 duration-300 hover:cursor-pointer"
        />
        <input
          ref={inputRef}
          id="searchBlog"
          type="text"
          placeholder="Search in this blog"
          className={`outline-none w-full mx-auto
             placeholder-shown:translate-x-10 focus-within:translate-x-1 duration-500 
             ${isSearchActive ? 'opacity-100' : 'opacity-0'} `}
        />
      </motion.div> 
    </>
  )
}

export default SearchField
