import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/cloudlogo.png";
import BackBtn from "./BackBtn";
<BackBtn></BackBtn>

function Header() {


  return (
    <nav className="flex items-center w-full m-auto bg-[#154D8F] md:px-12 xs:px-1">
      <BackBtn />
      <div>
        <Link href={"/"}>
        <Image 
        src={logo}
        alt="company logo"
        width={200}
        height={200}
        className="w-40 my-2.5"
        />
        </Link>
        
        </div>
    </nav>
  )
}

export default Header
