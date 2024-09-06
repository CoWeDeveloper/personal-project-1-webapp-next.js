
import AniSchedule from "./Animation/AniSchedule";


function Schedule( { product} : { product? : {product : string[]}}  ) {  
  return (
    <section id="schedule" className='w-full h-fit  overflow-hidden bg-white'>
       <div className='max-w-screen-lg py-10 mx-auto'>
        <AniSchedule product={product} />
       </div>
    </section>
  )
}

export default Schedule
