"use client";
import { ArrowRight  } from "lucide-react";

function ExploreBtn(props: any) {
  return (
    <button
        onClick={() => document.getElementById(props.Id)?.scrollIntoView({ behavior: 'smooth' })}
        className="text-white hover:text-black hover:bg-white hover:border-slate-400	hover:translate-x-3	hover:duration-700 font-medium text-sm rounded-lg py-2 px-3 border-[3px] ">
              Explore More <ArrowRight  className="inline p-1" />
    </button>
  )
}

export default ExploreBtn
