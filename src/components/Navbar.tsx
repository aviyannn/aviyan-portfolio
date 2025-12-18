import React from "react";

const Navbar: React.FC = () => (
  <header className="navbar">
    <div className="navbar-inner">
      <a href="#top" className="logo">
        AD.
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
    </div>
  </header>
);

export default Navbar;
