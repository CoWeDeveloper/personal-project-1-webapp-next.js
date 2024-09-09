import HeaderContent from "./subComponent/HeaderContent"

interface MarginProps{
  margin: string
}

function Header({ margin }: MarginProps) {

  return (
    <nav className={`relative flex  flex-col md:flex-row items-center py-2.5 w-full bg-[#154D8F] md:px-${margin} xs:px-1`}>
      <HeaderContent />
    </nav> 

  )
}

export default Header
