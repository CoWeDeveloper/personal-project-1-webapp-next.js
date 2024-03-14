// component import
import HeroSection from "../components/HeroSection"

// assets import
import Image from "next/image";
import HomeHeader from "/assets/images/HomeHeader.webp"


export default function Home() {
  return (
    <main className="relative">
    <HeroSection />
    </main>
  );
}
