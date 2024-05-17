import ExploreBtn from "../ExploreBtn";

function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all bg-no-repeat bg-cover bg-center flex items-center '
       style={{ backgroundImage: `url("assets/images/Support/supportHeader.webp")` }} >
      <div className='mx-auto max-w-screen-lg lg:px-20 md:px-16 px-0  text-center'>
        <h1  className="drop-shadow-2xl text-white font-black text-4xl sm:text-5xl mb-4" >Experience The Difference With Our Customer Services.</h1>
        <ExploreBtn Id={"Support"} />
      </div>
    </section>
  )
}

export default HeroSection;
