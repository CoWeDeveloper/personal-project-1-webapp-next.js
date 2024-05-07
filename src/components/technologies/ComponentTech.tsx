import Image from "next/image";
import { techData } from "../../data/techData";

function ComponentTech() {
  return (
    <>
      {techData.map((data: any) => (
         <section key={data.id} className='w-full md:h-[60vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${data.bgImage})`}} >
         <div className='max-w-screen-lg mx-auto pt-10 pb-5 '>
             { data.id == 1 && (<h1 className='md:text-4xl sm:text-2xl font-black tracking-wider text-center'>Technologies We Work On</h1>)}
            <div className="text-center flex flex-col justify-center items-center">

                <h1 className="text-3xl font-semibold mt-32">{data.title}</h1>
             <div className='flex flex-wrap justify-center items-center mt-10 my-10'>
             {data.logo.map((logo: any) => {
             const logoWidth = `w-${logo.width}`
                 return(
                     <Image key={logo.id} className={`${logoWidth}   mx-5 hover:shadow-md my-10`} src={logo.logoImg} alt={logo.alt} width={100} height={100} />
                    )      
             }
                )}
             </div>
                </div>
         </div>
     </section>
      ))}
    </>
  );
}

export default ComponentTech;
