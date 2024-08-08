"use client";
import { useRouter } from 'next/navigation';
import { CircleArrowLeft } from 'lucide-react';

function backbtn() {
    const router = useRouter();
    const handleRoute = () =>{
          router.back();
    }
  return (
    <>
      <button onClick={handleRoute}>
      <CircleArrowLeft className="text-white font-bold mt-3" strokeWidth={3}  size={24} />
      </button>
    </>
  )
}

export default backbtn
