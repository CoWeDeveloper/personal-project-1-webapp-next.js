import React from 'react'
import Image, { StaticImageData } from "next/image";
// Importing Assets
import member1Pasha from '../../../public/assets/icons/Alliances/member1Pasha.svg';
import member2Pseb from '../../../public/assets/icons/Alliances/member2Pseb.svg'


// interface schema {
//     title: string,
//     bgImage: StaticImageData,
//     images: string[]
//    }

function ChildAlliance(props: any) {
  return (
    <section key={props.id} className='w-full h-[80vh] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${props.bgImage})`}} >
        <div className='max-w-screen-lg mx-auto pt-10 pb-5'>
            <h1 className='text-4xl font-black tracking-wider text-center'>{props.title}</h1>
            <div className='flex justify-center items-center mt-52 my-20'>
            
             */}
                {/* <Image key={data.id} className='w-72 mx-5 hover:shadow-md' src={data.logoImg} alt={data.alt} width={100} height={100} /> */}
                {/* <Image className='w-72 mx-5 hover:shadow-md' src={member2Pseb} alt='logo of Pasha' width={100} height={100} /> */}
            </div>
        </div>
    </section>
  )
}

export default ChildAlliance;
