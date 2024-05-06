// component import
import HeroSection from "../components/home/HeroSection";
import About from "../components/home/About";
import OurServices from "@/components/home/Services";
import OurEdges from "@/components/home/Edges";
import Application from  "@/components/home/Application";
import Product from "@/components/home/Product"
import Customers from "@/components/home/Customers";



function Home() {
  return (
    <main className="relative">
    <HeroSection />
    <About />
    <OurServices />
    <OurEdges /> 
    <Application />
    <Product />
    <Customers />
    </main>
  );
}

export default Home;