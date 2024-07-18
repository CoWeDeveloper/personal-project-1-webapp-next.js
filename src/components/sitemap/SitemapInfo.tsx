import Link from "next/link";

function SiteMapInfo() {
  return (
    <div className="container w-full h-full">
      <div className="text-gray-700 px-10 pt-20 py-24">
        <div>
          <h1 className="text-3xl font-semibold">
            <Link className=" hover:text-sky-700" href={"./"}>Home</Link>
          </h1>
          <div className="flex w-fit space-x-24">
            <div className="w-96">
              <h2 className="text-3xl py-6 font-semibold">
                Software solutions
              </h2>
              <ul >
                <li className="font-semibold py-2">Sales and Distribution</li>
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
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/pos-select"}>
                    POS Select for Food Business
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/pos-xtreme"}>
                    POS Xtreme for Retail Business
                  </Link>
                </li>

                <li className="font-semibold py-2">
                  Enterprise Resouce Planning Modules
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/import"}>Import+</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/primary"}>Primary+</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/finance"}>Finance+</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/production"}>Production+</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/scm"}>Supply Chain Management</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/scm"}>Human Capital Management</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/wms"}>
                    Warehouse Management System Extended
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-64">
              <h2 className="text-3xl py-6 font-semibold">Insight</h2>
              <ul>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>
                    Request a Demo
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>
                    Support Mechanism
                  </Link>
                </li>


                <li className="hover:text-sky-700 w-52 hover:font-medium leading-tight duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>Technologies we work with</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/gallery"}>
                    Careers
                  </Link>
                </li>

                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/blogs"}>
                    Blogs
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/blogs"}>
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl py-6 font-semibold">About Us</h2>
              <ul>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>Our Alliances</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>Our Customers</Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>
                    On-boading Process
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>
                    Our Service Network
                  </Link>
                </li>
                <li className="hover:text-sky-700 hover:font-medium duration-300 transition-all">
                  <Link href={"./softwares/technologies"}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteMapInfo;
