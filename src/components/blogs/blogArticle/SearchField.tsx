"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const SearchField = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    setIsSearchActive(true);
    if (inputRef.current) {
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
    <div
    onClick={handleSearchIconClick}
      className={`input__search overflow-hidden border-stone-400 duration-700 w-64 mr-10 ${isSearchActive ? '-translate-x-16' : '-translate-x-0'}`}
    >
      <Image
        src="../../../assets/icons/Admin/search.svg"
        alt="Search Icon"
        width={20}
        height={20}
        className="blog__searchIcon w-5 mx-2 scale-100 duration-300 hover:cursor-pointer"
        
      />
      <input
        ref={inputRef}
        id="searchBlog"
        autoComplete="off"
        type="text"
        placeholder="Search in this blog"
        className="outline-none w-full mx-auto placeholder-shown:text-gray-100 placeholder-shown:translate-x-10 focus-within:translate-x-1 duration-500"
      />
    </div>
  );
};

export default SearchField;
