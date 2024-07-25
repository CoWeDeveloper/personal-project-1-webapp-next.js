import Image from "next/image";
import TableContent from "./TableContent";

function AdminPanel() {
  return (
    <section className="w-full h-screen pt-24 lg:px-14 md:px-8 sm:px-0 pb-10 bg-[#f1f1f1]">
      <header className="flex flex-wrap  md:justify-start lg:justify-between lg:items-start md:items-end sm:mb-0 md:mb-5">
        <div className="text-stone-600 text-4xl font-semibold mb-10">
          Manage Posts
        </div>
        <div className="flex lg:items-start md:items-end flex-wrap md:justify-between md:w-full lg:w-auto space-x-4">
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
          <div className="md:flex justify-end items-end xs:flex  xs:justify-center self-end md:w-auto md:space-x-5 md:my-0 	">

          <button className="flex sm:justify-center md:w-auto sm:w-full items-center bg-[#58C796] hover:bg-[#57bb8f] text-white rounded-lg px-5 py-1.5">
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
            Manage Post
          </button>
              </div>
        </div>
      </header>

      <TableContent />
    </section>
  );
}

export default AdminPanel;

