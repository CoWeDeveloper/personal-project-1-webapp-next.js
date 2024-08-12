// "use client";
// import {motion} from "framer-motion";
// import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

function SearchField() {
    // const [isSearchActive, setIsSearchActive] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);


  // const handleBlur = () => {
  //   setIsSearchActive(false);
  // };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.addEventListener('blur', handleBlur);
  //   }
  //   return () => {
  //     if (inputRef.current) {
  //       inputRef.current.removeEventListener('blur', handleBlur);
  //     }
  //   };
  // }, []);
  return (
    <>
      <div
        // onClick={handleSearchIconClick}
        className={`input__search mb-4 focus-within:scale-105 bg-sky-50 focus-within:w-72 w-36 transition-all  duration-700 items-center`}
        // transition={{ type: 'spring', stiffness: 100 }}
      >
        <Image
          src="/assets/icons/Admin/search.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className="w-4 mx-2 hover:cursor-pointer"
        />
        <input
          // ref={inputRef}
          id="searchBlog"
          autoComplete="off"
          type="text"
          placeholder="Search blog"
          className="outline-none w-full mx-auto bg-sky-50"
        />
      </div> 
    </>
  )
}

export default SearchField
