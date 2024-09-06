import AnimaAbout from "./animation/AniAbout";
import Image from "next/image";

// import assets
import WhiteCloudBackground from "../../../public/assets/images/WhiteCloudBackground.png";

function About() {
  return (
    <>
      <section className="bg-white -z-10  h-fit overflow-hidden">
        {/* background Image of cloud */}
        <div className="relative grid container  lg:grid-cols-12 mx-auto py-8 lg:py-16 items-center md:h-screen">
          <Image
            className="whiteCloudBackground flex"
            src={WhiteCloudBackground}
            alt="Cloud Background"
          />
          <AnimaAbout />
          
        </div>
      </section>
    </>
  );
}

export default About;
