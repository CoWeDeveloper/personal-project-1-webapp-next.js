import Image from "next/image"; 
import TableContent from "./TableContent";

function AdminPanel() {
  return (
 <section className='w-full h-screen pt-24 px-14 pb-10 bg-[#f1f1f1]'>
 <header className='flex justify-between items-centre mb-14'>
    <div className="text-stone-600 text-4xl font-semibold">Manage Posts</div>
    <div className="space-x-4 flex items-center"> 
    <div className="input__search">
    <Image
         src="./assets/icons/Admin/search.svg"
         alt="Plus Icon"
         width={100}
         height={100}
         className="w-5 mx-2"
         />
    <input type="text" placeholder="Search" className="outline-none w-full mx-auto"/>

    </div>
        <button className="flex items-center bg-[#58C796] hover:bg-[#57bb8f] text-white rounded-lg px-5 py-1.5">
          
          <Image
          src="./assets/icons/Admin/plus.svg"
          alt="Plus Icon"
          width={100}
          height={100}
          className="w-5 mr-2"
           />
           Add Post
           </button>
           
        <button className="flex items-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white rounded-lg px-5 py-1.5">
        <Image
          src="./assets/icons/Admin/managePost.svg"
          alt="Plus Icon"
          width={100}
          height={100}
          className="w-6 mr-2"
           />
          Manage Post</button>
    </div>
 </header>

    <TableContent />


 </section>
  )
}

export default AdminPanel;
