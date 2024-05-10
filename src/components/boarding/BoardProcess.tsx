import Image from "next/image";
import icon from "../../../public/assets/icons/Boarding/onb1.svg";
import { boardProcessData } from "@/data/boardProcessData";

function BoardProcess() {
  return (
    <section className="w-full h-fit bg-white pt-16  pb-14">
      <h1 className="text-3xl text-center font-black underline">ON-BOARDING PROCESS</h1>
      <div className="container mt-10 flex flex-wrap justify-center">

       { boardProcessData.map( (boardData: any) => (      
         <div key={boardData.id} className="relative flex flex-col items-center w-24 md:w-32 mx-4 my-4 md:mx-5 lg:mx-7 xl:mx-auto ">
         <div className="flex items-center justify-center">
           <div className="flex items-center  flex-wrap justify-center w-full border-black border-4 rounded-full p-6">
             <Image
               src={boardData.boardImg}
               width={70}
               height={70}
               alt={boardData.boardImg}
             />
           </div>
         </div>
         {/* if Noman bhai reject the design set py-0 px-2 bottom-14 and title div, set pt-2 */}
         <div className="absolute left-1">
           <div className="text-center w-8 rounded-full text-white font-black py-1 px-2   bg-black">
            {boardData.id}
            </div> 
            
         </div>
         <div className="font-semibold px-1 md:text-lg text-sm flex text-center pt-1">
           {boardData.title}
         </div>
       </div>
       ))}
      </div>
    </section>
  );
}

export default BoardProcess;
