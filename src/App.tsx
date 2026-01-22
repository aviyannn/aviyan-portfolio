// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
