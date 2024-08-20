import {BookCheck, CircleCheckBig } from "lucide-react"

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

