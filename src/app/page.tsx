// component import
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"

// assets import
import Image from "next/image";
import HomeHeader from "/assets/images/HomeHeader.webp"
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <main className="relative">
    <HeroSection />
    <AboutSection />
    <OurServices />
    </main>
  );
}
