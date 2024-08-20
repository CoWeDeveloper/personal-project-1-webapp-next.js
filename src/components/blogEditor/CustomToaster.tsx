import { CircleAlert } from 'lucide-react';

export const WarningToast = () => {
    return (
        <>
<div className='flex items-center'>
        <CircleAlert className=' w-7 text-red-600 mr-2'/>
      <div className=" text-xs !font-semibold w-full  text-red-700">
      <h1 className='flex items-center font-bold text-sm text-red-700'>
            Field Missing!
        </h1>
       Author, Title, Content  and Image field can not empty.
    </div>
</div>
        </>
    )
  }
