import Image from "next/image";
import Link from "next/link";
import demoImg from "../../../public/assets/images/Demo/demo.png";
import mail from "../../../public/assets/icons/Demo/mail.svg";
import phone from "../../../public/assets/icons/Demo/phone.svg";
import send from "../../../public/assets/icons/Demo/send.svg";

function Schedule() {
  return (
    <section className='w-full h-fit bg-white'>
       <div className='max-w-screen-lg py-10 mx-auto'>
        <h1 className='text-4xl font-black'>Schedule a Demo</h1>
        <div className='flex justify-between'>
          <div className="text-[#636468] mt-1">
            <h2 className="text-black text-xl font-semibold">For Further Assistance</h2>
            <div className="flex items-center text-sm font-semibold my-4">
              <Image src={mail} className="mr-2 text-[#636468]" alt="career icon" width={24} height={24}/><Link href={"sales@cloudtenants.com"}>sales@cloudtenants.com</Link>
            </div>
            <div className="flex items-center text-sm  font-semibold my-4">
              <Image src={phone} className="mr-2 text-[#636468]" alt="phone icon" width={24} height={24}/>+92 21 34971995</div>
            <div>
              <Image  className="" src={demoImg} width={300} height={300} alt="laptop with screen displaying calender" />
            </div>
          </div>
          <form className="">
          <div className="relative w-full">
            <input type="text" id="name" name="name" placeholder=" "
             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg 
             border-2
              border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-valid ng-touched ng-dirty"/>
              <label  
              className="absolute text-sm text-gray-500 duration-300 transform
               -translate-y-4 scale-75 top-2 z-10 
              origin-[0] bg-white px-2 peer-focus:px-2 
              peer-focus:text-gray-900 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:-translate-y-1/2 
              peer-placeholder-shown:top-1/2 
              peer-focus:top-2 peer-focus:scale-75 
              peer-focus:-translate-y-4 left-1">Name</label>
              </div>

          <div className="flex justify-center items-center mb-4">
            <div className="relative w-full">
             <input type="text" id="name" name="name" placeholder=" "
             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg
              border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none"/>
              <label htmlFor="name" 
              className="absolute text-sm text-gray-500 duration-300 transform
               -translate-y-4 scale-75 top-2 z-10 
               origin-[0] bg-white px-2 peer-focus:px-2 
               peer-focus:text-gray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
               peer-placeholder-shown:top-1/2 
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-1" >Name</label>
            </div>

             <input className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-pristine ng-valid ng-touched" type="text" />
          </div>
          <div className="flex justify-center items-center mb-4">
             <input className="block px-2.5 pb-2.5 pt-4 mr-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-pristine ng-valid ng-touched" type="text" />
             <input className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-pristine ng-valid ng-touched" type="text" />
          </div>   
          <div className="mb-4">
              <ul className="list-disc ml-4">
                <li className="text-sm bullet">You can select multiple solutions too</li>
              </ul>
             <input className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-pristine ng-valid ng-touched" type="text" />
          </div>
          <div >
          <input className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none ng-pristine ng-valid ng-touched" type="text" />
          </div>
              <button type="submit" className="bg-[#4796cd] hover:bg-[#155777] text-sm text-white font-semibold mt-4 px-4 py-3 flex items-center rounded-lg">Submit           
                  <Image  className="ml-1" src={send} width={16} height={16} alt="laptop with screen displaying calender" />
              </button>
          </form>
        </div>
       </div>
    </section>
  )
}

export default Schedule
