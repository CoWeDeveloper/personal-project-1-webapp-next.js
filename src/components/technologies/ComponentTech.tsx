import AniComponentTech from "./animation/AniComponentTech";
import { techData } from "../../data/techData";

function ComponentTech() {
  return (
  <>
      {techData.map((data: any) => (
         <section id="CompTech" key={data.id} className='w-full md:h-[60vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${data.bgImage})`}} >
         <div className='max-w-screen-lg mx-auto pt-10 pb-5 overflow-hidden'>
           <AniComponentTech data={data} />
         </div>
     </section>
      ))}
    </>
  );
}

export default ComponentTech;
