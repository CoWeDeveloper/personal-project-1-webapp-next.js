import Image from "next/image";
import logo from "../../../public/assets/images/cloudlogo.png";

function Header() {
  return (
    <nav className="flex items-center w-full m-auto bg-[#154D8F] md:px-12 xs:px-1">
      <div>
        <Image 
        src={logo}
        alt="company logo"
        width={200}
        height={200}
        className="w-40 my-2.5"
        /></div>
    </nav>
  )
}

export default Header
