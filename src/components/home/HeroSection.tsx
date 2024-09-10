import AnimaHeroSection from "./animation/AniHeroSection";

function Home() {
  return (
    <>
      <header
        className="w-full h-screen bg-gray-900     
     ease-in-out overflow-hidden  duration-300 
     transition-all bg-no-repeat bg-cover flex items-center "
        style={{ backgroundImage: `url("assets/images/HomeHeader.webp")` }}
      >
        <div className="container xs:px-2 sm:px-5 md:px-14 lg:px-24">
          <AnimaHeroSection />
        </div>
      </header>
    </>
  );
}

export default Home;
