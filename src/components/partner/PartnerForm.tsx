"use client";
import React from 'react'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import send from "../../../public/assets/icons/Demo/send.svg";


    function PartnerForm(){
    const searchParams = useSearchParams();
    const recevied: any = searchParams.get("query");
    const decodedValue = decodeURIComponent(recevied);
    
    
 
  return (
    <>
          <form className="">
          

          <div className="flex justify-center items-center mb-4 mt-2">
            <div className="relative w-full mr-4">
             <input type="text" id="name" name="name" placeholder=" "
             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-600 bg-transparent rounded-lg
              
              border-2 border-gray-400 focus:ring-0 focus:text-black focus:font-medium focus:border-gray-900 peer focus:outline-none"/>
              <label htmlFor="name" 
              className="absolute text-sm text-gray-500 duration-300 transform
               -translate-y-4 scale-75 top-2 z-10 
               origin-[0] bg-white px-2 peer-focus:px-2 
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
                  
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
               peer-placeholder-shown:top-1/2 
               peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-1" >Full Name</label>
            </div>
   
          </div>
          <div className="flex justify-center items-center mb-4">
             <div className="relative w-full mr-4">
             <input id="country" name="country" placeholder=" " className="block px-2.5 pb-2.5  focus:font-medium focus:text-black pt-4 mr-4 w-full text-sm text-gray-600 bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none " type="text" />
              <label htmlFor="country" 
              className="absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 z-10 bg-white origin-[0] px-2
              peer-focus:px-2 peer-focus:textgray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-3">Contact Number</label>
             </div>
          
             <div className="relative w-full">
             <input id="contact" name="contact" placeholder=" " className="block focus:text-black px-2.5 pb-2.5 pt-4 mr-4 w-full text-sm text-gray-600  focus:font-medium bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none " type="text" />
              <label htmlFor="contact" 
              className="absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 z-10 bg-white origin-[0] px-2
              peer-focus:px-2 peer-focus:textgray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-1">Email</label>
             </div>
          </div>   
          <div className="flex justify-center items-center mb-4">
             <div className="relative w-full mr-4">
             <input id="company" name="company" placeholder=" " className="block focus:text-black px-2.5 pb-2.5 pt-4 mr-4 w-full text-sm text-gray-600  focus:font-medium bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none " type="text" />
              <label htmlFor="company" 
              className="absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 z-10 bg-white origin-[0] px-2
              peer-focus:px-2 peer-focus:textgray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              sm:peer-placeholder-shown:w-auto
              xs:peer-placeholder-shown:w-28
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-3">Company Name</label>
             </div>
          
             <div className="relative w-full">
             <input id="industry" name="industry" placeholder=" " className="block focus:text-black px-2.5 pb-2.5 pt-4 mr-4 w-full text-sm text-gray-600  focus:font-medium bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none " type="text" />
              <label htmlFor="industry" 
              className="absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 z-10 bg-white origin-[0] px-2
              peer-focus:px-2 peer-focus:textgray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-1">Designation</label>
             </div>
          </div> 

          <div >
          <div className="relative w-full">
             <textarea id="message" name="message" placeholder=" " 
             className="block focus:text-black align-text-bottom resize-none h-[150px] px-2.5 pb-2.5 pt-4 mr-4 w-full text-sm text-gray-600  focus:font-medium bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none " 
              />
              <label htmlFor="message" 
              className={ `absolute text-sm text-gray-500 duration-300 transform
              -translate-y-4 scale-75 top-2 z-10 bg-white origin-[0] px-2
              peer-focus:px-2 peer-focus:textgray-900 peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-7
              peer-placeholder-shown:w-64
              sm:peer-placeholder-shown:w-auto
              peer-focus:top-2
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:scale-75
              peer-focus:-translate-y-4 left-1 `}>Tell us about your company and what are you looking for?</label>
             </div>         
              </div>
              <button type="submit" className="bg-[#4796cd] hover:bg-[#155777] text-sm text-white font-semibold mt-4 px-4 py-3 flex items-center rounded-lg">Submit           
                  <Image  className="ml-1" src={send} width={16} height={16} alt="laptop with screen displaying calender" />
              </button>
          </form>
    </>
  )
}

export default PartnerForm
