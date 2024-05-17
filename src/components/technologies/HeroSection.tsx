import ExploreBtn from "../ExploreBtn";


function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("assets/images/technologies/TechHeader.webp")` }} >
      <div className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
        <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >It's Not That We Use Technology, We Live In Technology.</h1>
        <ExploreBtn Id={"CompTech"} />
      </div>
    </section>
  )
}

export default HeroSection;


