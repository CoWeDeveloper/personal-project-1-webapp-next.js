import React from 'react';
// import components
import HeroSection from '@/components/about/HeroSection';
import AboutInfo from '@/components/about/AboutInfo';
import Values from '@/components/about/Values';
import Mission from "@/components/about/Mission";

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
