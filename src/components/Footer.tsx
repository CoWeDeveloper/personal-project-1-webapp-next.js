import Image from "next/image";
import Link from "next/link";
// import assets
import logo from "../../public/assets/images/cloudlogo.png";
import partnerLogo1 from "../../public/assets/images/Footer/p1.png";
import partnerLogo2 from "../../public/assets/images/Footer/p2.png";
import partnerLogo3 from "../../public/assets/images/Footer/p3.png";
import partnerLogo4 from "../../public/assets/images/Footer/p4.png";
import partnerLogo5 from "../../public/assets/images/Footer/p5.png";
import partnerLogo6 from "../../public/assets/images/Footer/p6.png";
import partnerLogo7 from "../../public/assets/images/Footer/p7.png";
import partnerLogo8 from "../../public/assets/images/Footer/p8.png";

function FooterComp() {
  return (
    <section className="w-full h-fit bg-[#211c5d] px-16 xs:px-5 pt-16 pb-5">
        <div className="mx-auto lg:px-10  sm:px-16  max-w-screen-xl text-center justify-center">
        <div className="md:flex  flex-wrap justify-center lg:justify-around w-full mx-auto">

            <div className="flex-col flex-wrap justify-center items-center">
                <div className="flex justify-center">
                <Image className="p-4 w-48" src={logo} width={160} height={100} alt="Logo" />

                </div>
                <ul className="flex justify-center  text-gray-500 text-left text-sm dark:text-gray-400 font-medium">
                    <Link target="_blank" href={"https://www.facebook.com/people/Cloud-Tenants-Pvt-Ltd/61555327557192/"} className="text-white p-3 mr-1 bg-[rgba(256,256,256,.2)] rounded-full hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19" className="w-4 h-4"><path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path></svg></li></Link>
                    <Link target="_blank" href={"https://www.linkedin.com/company/cloud-tenants-pvt-ltd/"}               className="mx-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15" className="w-4 h-4"><path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"></path><path d="M3 5.012H0V15h3V5.012Z"></path></svg></li></Link>
                    <Link target="_blank" href={"https://www.instagram.com/cloudtenants/"}                               className="mx-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></li></Link>
                    <Link target="_blank" href={"https://x.com/TenantsCloud"}                                            className="ml-1 bg-[rgba(256,256,256,.2)] p-3 rounded-full text-white hover:bg-[#00B5F9] transition-all duration-300 ease-linear"><li><svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4"><path fill="currentColor" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"></path></svg></li></Link>
                    </ul>
            </div>
            
            <div className="sm:flex  flex-wrap justify-center mt-5 lg:mt-0">
                <div className="lg:px-24 md:px-20 sm:px-5 xs:px-0">
                    <h3 className="text-white text-start font-bold text-sm my-4">Quick Links</h3>
                    <ul className="text-gray-500 text-left text-sm dark:text-gray-400 font-medium">
                    <Link href={"/softwares"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">Softwares</li></Link>
                    <Link href={"/about"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">About Us</li></Link>
                    <Link href={"/careers"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">Careers</li></Link>
                    <Link href={"/partner"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">Become a Partner</li></Link>
                    <Link href={"/"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">Privacy Policy</li></Link>
                    <Link href={"/faq"} className="hover:underline "><li className="pt-1 hover:translate-x-2 duration-500 hover:text-gray-400">FAQ&rsquo;s</li></Link>
                    </ul>
                </div>

                <div className="flex-col sm:flex-wrap justify-center items-center">
                    
                <h3 className="text-white text-start font-bold text-sm my-4">Head Office</h3>
                    <ul className="text-gray-500 text-left text-xs dark:text-gray-400 font-medium ">
                    <li className="pt-1 hover:font-bold hover:-translate-y-1 duration-500">Suite No B-5/4, FL-9/6 (Junaid Plaza),</li>
                    <li className="pt-1 hover:font-bold hover:-translate-y-1 duration-500">Gulshan-E-Iqbal Block 6,</li>
                    <li className="pt-1 hover:font-bold hover:-translate-y-1 duration-500">Main Rashid Minhas Road,</li>
                    <li className="pt-1 hover:font-bold hover:-translate-y-1 duration-500">Karachi-75300, Pakistan.</li>
                    </ul>
                

                    <div>
                <h3 className="text-white text-start font-bold text-sm my-4">Contact Info</h3>
                    <ul className="text-gray-500 text-left text-xs dark:text-gray-400 font-medium">
                    <li className="pt-1">PAK:  <span className="hover:font-bold hover:underline duration-500"> +92 213 497 1995</span></li>
                    <li className="pt-1">KSA:  <span className="hover:font-bold hover:underline duration-500"> +96 659 427 4605</span></li>
                    <li className="pt-1">UAE:  <span className="hover:font-bold hover:underline duration-500"> +971 55 548 8093</span></li>
                    <li className="pt-1">QAT:  <span className="hover:font-bold hover:underline duration-500"> +974 5573 0350</span></li>
                    <li className="pt-1">Email:<span className="hover:font-bold hover:underline duration-500"> sales@cloudtenants.com</span></li>
                    </ul>
                    </div>
                </div>
                    
            </div>
        </div>
        </div>
        {/* logo at last */}
        <div className="mx-auto md:w-[80%] gap-10 mt-20  md:px-auto max-w-screen-xl flex-wrap text-center justify-center">
        <div className="flex flex-wrap justify-center items-center gap-10">
        <Image className="w-24 h-18 " src={partnerLogo1} width={120} height={80} alt="Logo" />
        <Image className="w-24 h-18 " src={partnerLogo2} width={120} height={80} alt="Logo" />
        <Image className="w-34 h-18 " src={partnerLogo3} width={120} height={80} alt="Logo" />
        <Image className="w-36 h-18 " src={partnerLogo4} width={120} height={80} alt="Logo" />
        <Image className="w-34 h-18 " src={partnerLogo5} width={120} height={80} alt="Logo" />
        <Image className="w-34 h-18 " src={partnerLogo6} width={120} height={80} alt="Logo" />
        <Image className="w-34 h-18 " src={partnerLogo7} width={120} height={80} alt="Logo" />
        <Image className="w-34 h-18 " src={partnerLogo8} width={120} height={80} alt="Logo" />
        </div>
        </div>
        <hr className="max-w-screen-lg mx-auto lg:mt-10 lg:mb-3 mt-6 mb-3 border-gray-600" />
       
        <div className="flex justify-center text-center italic font-black text-gray-400 text-xs">&copy;2024 CloudTenants. All Right Reserved</div>
       
    </section>
  )
}

export default FooterComp;
