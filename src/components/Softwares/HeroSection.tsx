import AniHeroSection from "./animation/AniHeroSection";

function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden duration-300 
    transition-all g-no-repeat bg-cover bg-center flex items-center '
       style={{ backgroundImage: `url("/assets/images/Software/softwareHeader.webp")` }} >
          <AniHeroSection />
    </section>
  )
}

export default HeroSection;
