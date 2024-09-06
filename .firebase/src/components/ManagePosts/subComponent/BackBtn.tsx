"use client";
import { useRouter } from 'next/navigation';
import { ArrowLeft  } from 'lucide-react';

function backbtn() {
    const router = useRouter();
    const handleRoute = () =>{
          router.back();
    }
  return (
    <>
      <button className='self-center  bg-[rgba(256,256,256,.2)] hover:bg-[#00B5F9] transition-all duration-300 ease-linear rounded-full p-1' onClick={handleRoute}>
      <ArrowLeft  className="text-slate-300 hover:text-slate-200 font-bold" strokeWidth={3}  size={20} />
      </button>
    </>
  )
}

export default backbtn;
