"use client";

import { useTheme } from "./hooks/useTheme";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import History from "./components/History";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ParticleField = dynamic(() => import("./components/ParticleField"), {
  ssr: false,
});

const MatrixRain = dynamic(() => import("./components/MatrixRain"), {
  ssr: false,
});

export default function Home() {
  const { isDark, mounted } = useTheme();

  return (
    <>
      {mounted && (
        <>
          <ParticleField isDark={isDark} />
          <MatrixRain isDark={isDark} />
        </>
      )}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <History />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
