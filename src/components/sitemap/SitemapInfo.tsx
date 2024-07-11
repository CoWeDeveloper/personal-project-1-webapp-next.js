import Link from "next/link";

function SiteMapInfo() {
  return (
    <div className='container w-full h-full'>
      <div className='flex  text-gray-700 px-10 pt-20'>
           <div>
             <h1 className="text-3xl">
                <Link href={"./"}>
                 Home
             
             </Link>
              </h1>
              <h2 className="text-3xl py-6 font-semibold">
                Software solutions
              </h2>
            <ul>
            <li className="font-semibold py-2">
               Sales and Distribution
            </li>
            <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">   
                 <Link href={"./softwares/snd-next"}>
                 S&D Next Generation Cloud
                 </Link>
            </li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                <Link href={"./software/snd-esuite"}>
                
                Extended S&D Suite for Business Needs
                </Link>
                </li>
               
               <li className="font-semibold py-2">Point of Solutions</li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>POS Select for Food Business</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-xtreme"}>POS Xtreme for Retail Business</Link></li>
            

               <li className="font-semibold py-2">Enterprise Resouce Planning Modules</li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Import+</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Primary+</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Finance+</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Production+</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Supply Chain Management</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-select"}>Human Capital Management</Link></li>
               <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all"><Link href={"./softwares/pos-xtreme"}>Warehouse Management System Extended</Link></li>
            
            </ul>
           </div>
      </div>
    </div>
  )
}

export default SiteMapInfo;
