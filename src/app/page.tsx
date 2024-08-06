
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

    {/* <div className="fixed bottom-8 right-8">
  
    </div> */}

    </main>
</>
  );
}

export default Home;