// src/App.tsx
import React from "react";
import CommandMenu from "./components/CommandMenu";
import Contributions from "./components/Contributions";
import Mountains from "./components/Mountains";
import Navbar from "./components/Navbar";
import SayHi from "./components/SayHi";
import Toast from "./components/Toast";
import { useCardSpotlight, useScrollReveal } from "./effects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Featured from "./sections/Featured";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Toolkit from "./sections/Toolkit";

const App: React.FC = () => {
  useScrollReveal();
  useCardSpotlight();

  return (
    <>
      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <Contributions />
          <Experience />
          <Featured />
          <Projects />
          <Toolkit />
          <Education />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
      <Mountains />
      <SayHi />
      <CommandMenu />
      <Toast />
    </>
  );
};

export default App;
