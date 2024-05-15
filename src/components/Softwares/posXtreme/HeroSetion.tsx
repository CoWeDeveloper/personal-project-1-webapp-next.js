import { ArrowRight  } from "lucide-react";

export default function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("/assets/images/Software/PosXtreme/posxbanner.webp")` }} >
      <div className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
        <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >Get Organized & Grow Your Business With Our POS Solution.</h1>
        <button className="text-white hover:text-black hover:bg-white hover:border-slate-400	hover:translate-x-3	hover:duration-700 font-medium text-sm rounded-lg py-2 px-3 border-[3px] ">
              Explore More <ArrowRight  className="inline p-1" />
            </button>
      </div>
    </section>
  )
}

