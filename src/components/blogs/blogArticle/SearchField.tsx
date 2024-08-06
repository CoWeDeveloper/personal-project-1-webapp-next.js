import Image from "next/image";
// import {useState} from "react";

function SearchField() {
    // const [isSearchVisible, setIsSearchVisible] = useState(false);

    // const handleSearchIconClick = () => {
    //   setIsSearchVisible(!isSearchVisible);
    // };
  return (
    <div className="input__search ml-12 mb-4 border-white duration-700 w-96 -translate-x-5 focus-within:translate-x-14">
            <Image
              src="../../../assets/icons/Admin/search.svg"
              alt="Plus Icon"
              width={100}
              height={100}
              className="blog__serachIcon w-5 mx-2 scale-100 duration-300 hover:cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search in this blog"
              className="outline-none w-full mx-auto placeholder-shown:text-gray-100 placeholder-shown:translate-x-10  focus-within:translate-x-1 duration-500"
            />
          </div>
  )
}

export default SearchField
