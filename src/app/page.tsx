// component import
import HeroSection from "../components/Home/HeroSection";
import About from "../components/Home/About";
import OurServices from "@/components/Home/Services";
import OurEdges from "@/components/Home/Edges";
import Application from  "@/components/Home/Application";

// assets import
import Image from "next/image";



export default function Home() {
  return (
    <main className="relative">
    <HeroSection />
    <About />
    <OurServices />
    <OurEdges /> 
    <Application />
    </main>
  );
}
