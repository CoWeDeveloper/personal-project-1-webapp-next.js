import React from 'react'
import Image from "next/image"

function Membership() {
  return (
    <section className='w-full h-screen bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url("assets/images/Alliance/bg-membership.png")'}} >
        <div className='max-w-screen-lg mx-auto pt-10 pb-5'>
            <h1 className='text-4xl font-bold text-center'>MEMERSHIPS</h1>
            <div>
                {/* <Image/> */}

            </div>
        </div>
    </section>
  )
}

export default Membership;
