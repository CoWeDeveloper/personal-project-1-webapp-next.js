"use client";
import React from 'react'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Select from 'react-select';
// import { MultiValue } from "react-select/animated";
import send from "../../../public/assets/icons/Demo/send.svg";
import { HandHelping } from 'lucide-react';

    function ScheduleForm(){
    const searchParams = useSearchParams();

        // const router = useRouter();
        // console.log(searchParams.get("pathname")); // Log the router object

        // const { query } = router;
        // const selectedOption: any = query.value as string;
        
        // const handleChange = () =>{
        //     console.log(selectedOption);
        // }
        
    const options = [
        { value: 'S&D Next', label: 'S&D Next (Sales & Distribution)', },
        { value: 'S&D E-Suite', label: 'S&D E-Euite (Sales & Distribution)' },
        { value: 'POS Xtreme', label: 'POS Xtreme (Point of Solution for Shops & Supermarkets)' },
        { value: 'POS Select', label: 'POS Select (Point of Solution for Food & Resturants Chain)' },
        { value: 'WMS Extended', label: 'WMS Extended (Warehouse Management System)' },
        { value: 'SCM+ (Supply Chain Management)', label: 'SCM+ (Supply Chain Management)' },
        { value: 'HCM+', label: 'HCM+ (Human Capital Management)' },
        { value: 'Finance+', label: 'Finance+' },
        { value: 'Production+', label: 'Production+' },
        { value: 'Primary+', label: 'Primary+ (Primary Sales)' },
        { value: 'Import+', label: 'Import+' },
        
    ];
    // const selectedValue = options.find((option)=> option.value == selectedOption );
    
      const customStyles= {
        control: (styles: any) => ({
          ...styles,
          border: 'none', // Remove default border
          boxShadow: 'none', 
        }),
        multiValue: (styles: any) => ({
          ...styles,
          backgroundColor:"#bae0ff",
          borderRadius: "1rem",
        }),
        multiValueRemove: (styles: any) => ({
          ...styles,
          // color: '#333', 
          // cursor: 'pointer',
          // border: "none", 
          '&:hover': {
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem"
          }
      }),
    } 

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
              peer-focus:-translate-y-4 left-1" >Name</label>
            </div>
            <div className="relative w-full">
             <input type="text" id="businessEmail" name="businessEmail" placeholder=" "
             className="block px-2.5 pb-2.5 pt-4 w-full text-sm focus:text-black text-gray-500 bg-transparent rounded-lg
              border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer  focus:font-medium focus:outline-none"/>
              <label htmlFor="businessEmail" 
              className="absolute text-sm text-gray-500 duration-300 transform
               -translate-y-4 scale-75 top-2 z-10 
               origin-[0] bg-white px-2 peer-focus:px-2 
               peer-placeholder-shown:scale-100
              peer-placeholder-shown:-translate-y-1/2
               peer-placeholder-shown:top-1/2
               peer-focus:text-[#4796cd]
               peer-focus:font-semibold
              peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-1" >Business Email</label>
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
              peer-focus:-translate-y-4 left-3">Country</label>
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
              peer-focus:-translate-y-4 left-1">Contact No</label>
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
              peer-focus:-translate-y-4 left-1">Industry</label>
             </div>
          </div> 


          <div className="flex justify-center items-center mb-4">

<div className="relative w-full z-20">
   <div>
    <ul>
      <li className="list-disc ml-5 text-sm">
      You can select multiple solutions too
      </li>
    </ul>
          <Select
          className="focus:text-black w-[520px] text-sm text-gray-600 pb-1.5 pt-2 focus:font-medium bg-transparent rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-gray-900 peer focus:outline-none "
      options={options}
      styles={customStyles}
    //   onChange={handleChange}
      isMulti
      placeholder="Select your desired product(s), e.g: Sales & Distribution, POS, etc"
      />
      </div>
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
              peer-focus:top-2
              peer-focus:text-[#4796cd]
              peer-focus:font-semibold
              peer-focus:scale-75
              peer-focus:-translate-y-4 left-1`}>Tell us more about your business & software requirement</label>
             </div>         
              </div>
              <button type="submit" className="bg-[#4796cd] hover:bg-[#155777] text-sm text-white font-semibold mt-4 px-4 py-3 flex items-center rounded-lg">Submit           
                  <Image  className="ml-1" src={send} width={16} height={16} alt="laptop with screen displaying calender" />
              </button>
          </form>
    </>
  )
}

export default ScheduleForm
