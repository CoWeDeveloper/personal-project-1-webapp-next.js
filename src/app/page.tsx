
import { HeroSection, About, OurServices, OurEdges, Application, Product, Customers } from "@/components/home/index";


function Home() {

  return (
<>
    <main className="relative">
    <HeroSection />
    <About />
    <OurServices />
    <OurEdges /> 
    <Application />
    <Product />
    <Customers /> 

    </main>
</>
  );
}

export default Home;