import TextHeroSection from "./animation/textHeroSection";

function Home() {
  return (
    <>
      <header
        className="w-full h-screen     
     ease-in-out overflow-hidden  duration-300 
     transition-all bg-no-repeat bg-cover flex items-center "
        style={{ backgroundImage: `url("assets/images/HomeHeader.webp")` }}
      >
        <div className="items-center lg:text-left md:text-center grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:px-4 sm:px-10 px-0  lg:py-0 lg:grid-cols-12">
          <TextHeroSection />
        </div>
      </header>
    </>
  );
}

export default Home;
