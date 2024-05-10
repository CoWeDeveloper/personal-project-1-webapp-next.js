"use client";
import Image from "next/image";
import Link from "next/link";
import demoImg from "../../../public/assets/images/Demo/demo.png";
import mail from "../../../public/assets/icons/Demo/mail.svg";
import phone from "../../../public/assets/icons/Demo/phone.svg";

import ScheduleForm from "./ScheduleForm";

function Schedule() {

  return (
    <section className='w-full h-fit bg-white'>
       <div className='max-w-screen-lg py-10 mx-auto'>
        <h1 className='text-4xl font-black'>Schedule a Demo</h1>
        <div className='flex justify-between '>
          <div className="text-[#636468] mt-1">
            <h2 className="text-black text-xl font-semibold">For Further Assistance</h2>
            <div className="flex items-center text-sm font-semibold my-4">
              <Image src={mail} className="mr-2  text-[#636468]" alt="career icon" width={24} height={24}/><Link href={"sales@cloudtenants.com"}>sales@cloudtenants.com</Link>
            </div>
            <div className="flex items-center text-sm  font-semibold my-4">
              <Image src={phone} className="mr-2 text-[#636468]" alt="phone icon" width={24} height={24}/>+92 21 34971995</div>
            <div>
              <Image  className="" src={demoImg} width={300} height={300} alt="laptop with screen displaying calender" />
            </div>
          </div>
          <ScheduleForm />
        </div>
       </div>
    </section>
  )
}

export default Schedule
