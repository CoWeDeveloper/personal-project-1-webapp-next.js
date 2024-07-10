import { HeroSection, AboutInfo, Values, Mission } from "@/components/about";


export const metadata = {
  title: "About",

};


function About() {
  return (
    <>
      <HeroSection />
      <AboutInfo />
      <Values />
      <Mission />
    </>
  )
}

export default About;
