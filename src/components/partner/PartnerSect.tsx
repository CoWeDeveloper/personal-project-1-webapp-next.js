"use client";
import Image from "next/image";
import Link from "next/link";
import demoImg from "../../../public/assets/images/Partner/partnerForm.webp";
import mail from "../../../public/assets/icons/Demo/mail.svg";
import phone from "../../../public/assets/icons/Demo/phone.svg";

import PartnerForm from "./PartnerForm";

function PartnerSect() {

  return (
    <section id="Schedule" className='w-full h-fit bg-white'>
       <div className='max-w-screen-lg py-10 mx-auto'>
        <h1 className='text-4xl font-black lg:mx-0 xs:mx-5'>Become a Partner</h1>
        <div className='flex flex-wrap justify-between '>
          <div className="text-[#636468] mt-1 xs:order-2 lg:order-1 xs:flex-col xs:justify-center xs:mx-auto xs:pt-5 lg:mx-0">
            <h2 className="text-black text-xl font-semibold">For Further Assistance</h2>
            <div className="flex items-center text-sm font-semibold my-4">
              <Image src={mail} className="mr-2  text-[#636468]" alt="career icon" width={24} height={24}/><Link href={"partners@cloudtenants.com"}>partners@cloudtenants.com</Link>
            </div>
            <div className="flex items-center text-sm  font-semibold my-4">
              <Image src={phone} className="mr-2 text-[#636468]" alt="phone icon" width={24} height={24}/>+92 21 34971995</div>
            <div>
              <Image  className="" src={demoImg} width={300} height={300} alt="laptop with screen displaying calender" />
            </div>
          </div>
          <div className="lg:order-2 xs:order-1 xs:w-full xs:mx-5 lg:w-auto lg:mx-0">
          <PartnerForm />

          </div>
        </div>
       </div>
    </section>
  )
}

export default PartnerSect
