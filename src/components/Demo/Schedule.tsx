
import AniSchedule from "./Animation/AniSchedule";


function Schedule( { product} : { product? : {product : string[]}}  ) {  
  return (
    <section id="Schedule" className='w-full h-fit bg-white'>
       <div className='max-w-screen-lg py-10 mx-auto'>
        <AniSchedule product={product} />
       </div>
    </section>
  )
}

export default Schedule
