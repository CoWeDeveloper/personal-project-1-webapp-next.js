import Image from "next/image";
import { useState } from "react";

function SearchField({onSearch}: {onSearch: (query:string)=> void}) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value);
        onSearch(e.target.value)
  }
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
          onChange={handleInputChange}
          placeholder="Search blog"
          className="outline-none w-full mx-auto bg-sky-50"
        />
      </div> 
    </>
  )
}

export default SearchField
