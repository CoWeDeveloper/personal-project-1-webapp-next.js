import AniHeroSection from "./Animation/AniHeroSection";

function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all bg-no-repeat bg-cover bg-center flex items-center '
       style={{ backgroundImage: `url("assets/images/Alliance/allianceHeader.webp")` }} >
        <AniHeroSection />
    </section>
  )
}

export default HeroSection;
