import {Files } from "lucide-react"

export const CopyToast = ()=>{
    return (
        <>
 <div className="flex items-center font-semibold w-full text-green-900">
    <Files  className="mr-2" />
    Link copy to clipboard!
  </div>
        </>
    )
}