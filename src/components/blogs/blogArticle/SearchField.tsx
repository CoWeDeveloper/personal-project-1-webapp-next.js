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
      className={`input__search ml-12 mb-4 border-white duration-700 w-96 ${isSearchActive ? 'translate-x-14' : '-translate-x-5'}`}
    >
      <Image
        src="../../../assets/icons/Admin/search.svg"
        alt="Search Icon"
        width={20}
        height={20}
        className="blog__searchIcon w-5 mx-2 scale-100 duration-300 hover:cursor-pointer"
        onClick={handleSearchIconClick}
      />
      <input
        ref={inputRef}
        id="searchBlog"
        type="text"
        placeholder="Search in this blog"
        className="outline-none w-full mx-auto placeholder-shown:text-gray-100 placeholder-shown:translate-x-10 focus-within:translate-x-1 duration-500"
      />
    </div>
  );
};

export default SearchField;
