import AniHeroSection from "../animation/AniHeroSection"

export default function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("/assets/images//Software/SnDNext/sndNHeader.webp")` }} >
      < AniHeroSection />
    </section>
  )
}

