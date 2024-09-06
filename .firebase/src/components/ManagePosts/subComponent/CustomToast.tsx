import {BookCheck, CircleCheckBig, Trash2  } from "lucide-react"

export const PublishToast = () => {
  return (
    <div className="flex items-center font-semibold w-full text-green-900">
    <BookCheck className="mr-2" />
    Blog has been Published Successfully!
  </div>
  )
}

export const UpdateToast = () => {
    return (
      <div className="flex items-center font-semibold w-full">
      <CircleCheckBig  className="mr-2 text-green-900" />
      Blog has been Updated!
    </div>
    )
  }

export const DeleteToast = () => {
    return (
        <>
<div className='flex items-center'>
        <Trash2   className=' w-7 text-red-600 mr-2'/>
      <div className=" text-xs !font-semibold w-full  text-red-700">
      <h1 className='flex items-center font-bold text-sm text-red-700'>
            Deleted Successfully!
        </h1>
    </div>
</div>
        </>
    )
  }

