
import Image from "next/image";
import {useState} from "react";

function SearchField({onSearch}: { onSearch :(query: string) => void}) {
 const [searchQuery, setSearchQuery] = useState("");
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
       setSearchQuery(e.target.value);
       onSearch(e.target.value)
 }
    return (
      <>
        <div
          className={`input__search mb-4 xs:mr-4  text-xs  bg-sky-50 focus-within:scale-110 focus-within:w-56 w-44 transition-all  duration-700 items-center`}
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
            placeholder="Search in this Blog"
            className="outline-none w-full mx-auto bg-sky-50"
          />
        </div> 
      </>
    )
  }

  export default SearchField
