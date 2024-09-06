import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/cloudlogo.png";
import BackBtn from "./subComponent/BackBtn";

interface MarginProps{
  margin: string
}

function Header({ margin }: MarginProps) {

  return (
    <nav className={`flex items-center py-2.5 w-full bg-[#154D8F] md:px-${margin} xs:px-1`} >
      <BackBtn />
      <div>
        <Link href={"/"}>
        <Image 
        src={logo}
        alt="company logo"
        width={200}
        height={200}
        className="w-40 ml-12"
        />
        </Link>
        
        </div>
    </nav>
  )
}

export default Header
