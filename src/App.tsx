import React from "react";
import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
