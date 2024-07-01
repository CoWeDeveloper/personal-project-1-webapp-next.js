import AniSupport from "./animation/AniSupport";
import { supportData } from "@/data/supportData";

function Support() {
  return (
    <>
      {supportData.map((data: any, index: number) => (
        <section 
        id="Support"
          key={data.id}
          className={`w-full h-fit bg-cover bg-no-repeat bg-center ${
            index % 2 == 0 ? "bg-white" : "bg-[#f5f4fe]"
          }`}
        >
          <div className="max-w-screen-lg mx-auto pt-10 pb-5 ">
          <AniSupport data={data} />
          </div>
        </section>
      ))}
    </>
  );
}

export default Support;

// function ComponentTech() {
//   return (
//     <>
//       {techData.map((data: any) => (
//          <section key={data.id} className='w-full md:h-[60vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${data.bgImage})`}} >
//          <div className='max-w-screen-lg mx-auto pt-10 pb-5 '>
//              { data.id == 1 && (<h1 className='md:text-4xl sm:text-2xl font-black tracking-wider text-center'>Technologies We Work On</h1>)}
//             <div className="text-center flex flex-col justify-center items-center">

//                 <h1 className="text-3xl font-semibold mt-32">{data.title}</h1>
//              <div className='flex flex-wrap justify-center items-center mt-10 my-10'>
//              {data.card.map((card: any) => {
//              const logoWidth = `w-${card.width}`
//                  return(
//                      <Image key={card.id} className={`${logoWidth}   mx-5 hover:shadow-md my-10`} src={card.logoImg} alt={card.alt} width={100} height={100} />
//                     )
//              }
//                 )}
//              </div>
//                 </div>
//          </div>
//      </section>
//       ))}
//     </>
//   );
// }

// export default ComponentTech;
