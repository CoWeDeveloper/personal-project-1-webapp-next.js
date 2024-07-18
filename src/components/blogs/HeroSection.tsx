import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative w-full h-screen z-0 overflow-hidden flex items-center">
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
        <Image 
        src="/assets/images/Blogs/BlogHeader.webp"
        alt= "Blog Header"
        quality={75}
        layout="fill"
        objectFit="cover"
        priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
        <div className="z-10 w-full relative">
          <div className="container px-32">
            <h1 className="text-white lg:text-6xl xs:text-5xl font-semibold lg:w-3/5 sm:w-3/12 lg:leading-normal">Tech Experts Latest: Innovoation in Digital Enterprice</h1>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
