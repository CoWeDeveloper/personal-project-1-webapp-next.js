import React from 'react'
import Image from "next/image";

function ChildAlliance(props: any) {
  return (
    <section key={props.id} className='w-full md:h-[80vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${props.bgImage})`}} >
        <div className='max-w-screen-lg mx-auto pt-10 pb-5'>
            <h1 className='text-4xl font-black tracking-wider text-center'>{props.title}</h1>
            <div className='flex flex-wrap justify-center items-center mt-40 my-10'>
            {props.logo.map((logo:any) => (
                <Image key={logo.id} className='w-72 mx-5 hover:shadow-md my-10 ' src={logo.logoImg} alt={logo.alt} width={100} height={100} />
                        ))}
            </div>
        </div>
    </section>
  )
}

export default ChildAlliance;


