import { FC } from 'react';
import { CircleAlert } from 'lucide-react';


interface WarningToastProps{
    title: string;
    message?: string
}

export const WarningToast:  FC<WarningToastProps> = ({ title, message })=> {
    return (
        <>
<div className='flex items-center'>
        <CircleAlert className=' w-7 text-red-600 mr-2'/>
      <div className=" text-xs !font-semibold w-full  text-red-700">
      <h1 className='flex items-center font-bold text-sm text-red-700'>
            {title}
        </h1>
       {message}
    </div>
</div>
        </>
    )
  }
