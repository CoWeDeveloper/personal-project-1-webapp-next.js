import Image from "next/image";
import HomeHeader from "../../public/assets/images/HomeHeader.webp"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <header className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.cloudtenants.com/hero-section.9952b6929dee2aa6.webp')" }}>
      <div>
  
      <div className=" h-full flex items-center justify-center">
        <h1 className="text-5xl">Your True Digital Transformation Partner.</h1>
      </div>
      <p>
      Streamline your business operations with our cutting-edge software solutions.
      </p>
      <button className="rounded-lg border">Request Demo</button>
      </div>
     </header>
  
    </main>
  );
}
