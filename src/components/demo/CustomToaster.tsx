import {CircleCheckBig} from "lucide-react";

export const FormToast = () => {
    return (
      <div className="flex items-center font-semibold w-full">
      <CircleCheckBig  className="mr-2 text-green-900" />
      Form has been Submitted Successfully!
    </div>
    )
  }