import React from 'react';
// import components
import HeroSection from '@/components/About/HeroSection';
import AboutInfo from '@/components/About/AboutInfo';
import Values from '@/components/About/Values';
import Mission from "@/components/About/Mission";

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
