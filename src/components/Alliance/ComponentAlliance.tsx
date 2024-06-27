import AniAlliance from "./Animation/AniAlliance";
import { allianceData } from "../../data/allianceData";

function ComponentAlliance() {
  return (
    <>
      {allianceData.map((data: any) => (
         <section id="CompAlliances" key={data.id} className='w-full md:h-[70vh] sm:h-fit bg-cover bg-no-repeat bg-center bg-white' style={{backgroundImage: `url(${data.bgImage})`}} >
        <AniAlliance data={data} />
     </section>
      ))}
    </>
  );
}

export default ComponentAlliance;
