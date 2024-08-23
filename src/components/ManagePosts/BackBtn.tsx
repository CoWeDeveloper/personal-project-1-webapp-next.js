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
      <button className='self-center mt-5' onClick={handleRoute}>
      <ArrowLeft  className="text-white font-bold  " strokeWidth={3}  size={24} />
      </button>
    </>
  )
}

export default backbtn;
