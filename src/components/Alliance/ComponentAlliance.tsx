import Image from "next/image";
import { allianceData } from "../../data/allianceData";

function ComponentAlliance() {
  return (
    <>
      {allianceData.map((data: any) => (
         <section key={data.id} className='w-full md:h-[80vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${data.bgImage})`}} >
         <div className='max-w-screen-lg mx-auto pt-10 pb-5'>
             <h1 className='text-4xl font-black tracking-wider text-center'>{data.title}</h1>
             <div className='flex flex-wrap justify-center items-center mt-40 my-10'>
             {data.logo.map((logo: any) => (
                 <Image key={logo.id} className='w-72 mx-5 my-10' src={logo.logoImg} alt={logo.alt} width={100} height={100} />
                         ))}
             </div>
         </div>
     </section>
      ))}
    </>
  );
}

export default ComponentAlliance;
