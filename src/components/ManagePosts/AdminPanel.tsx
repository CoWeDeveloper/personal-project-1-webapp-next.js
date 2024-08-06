import Image from "next/image";
import Header from "./Header";
import TableContent from "./TableContent";

function AdminPanel() {
  return (
    <>
    <Header />
    <section className="w-full h-screen pt-10 lg:px-14 md:px-8 sm:px-0 pb-10 bg-[#f1f1f1]">
      <header className="flex flex-wrap md:justify-start xs:justify-center lg:justify-between lg:items-start md:items-end md:mb-0 xs:mb-5">
        <div className="text-stone-600 text-4xl  font-semibold mb-10">
          Manage Posts
        </div>
        <div className="flex md:flex-row xs:flex-col lg:items-start md:items-end xs:px-2 md:px-0 flex-wrap w-full  md:justify-between lg:w-auto xs:space-x-0 sm:space-x-4 md:my-2 lg:my-0">
          <div className="input__search">
            <Image
              src="./assets/icons/Admin/search.svg"
              alt="Plus Icon"
              width={100}
              height={100}
              className="w-5 mx-2"
            />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full mx-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center  xs:w-full sm:w-auto xs:justify-center space-x-5 xs:my-2 md:my-0">

          <button className="flex sm:justify-center  items-center bg-[#58C796] hover:bg-[#57bb8f] text-white rounded-lg px-5 py-1.5">
            <Image
              src="./assets/icons/Admin/plus.svg"
              alt="Plus Icon"
              width={100}
              height={100}
              className="w-5 mr-2"
              />
            Add Post
          </button>

          <button className="flex items-center  bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white rounded-lg px-5 py-1.5">
            <Image
              src="./assets/icons/Admin/managePost.svg"
              alt="Plus Icon"
              width={100}
              height={100}
              className="w-6 mr-2"
              />
            Manage Post
          </button>
              </div>
        </div>
      
      </header>
      <TableContent />
    </section>
              </>
  );
}

export default AdminPanel;

