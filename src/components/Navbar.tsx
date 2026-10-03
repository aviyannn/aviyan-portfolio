import React from "react";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => (
  <header className="navbar">
    <a href="#top" className="logo" aria-label="Back to top">
      AD.
    </a>
    <nav className="nav-links">
      <a href="#experience">Experience</a>
      <a href="#builds">Builds</a>
      <a href="#education" className="nav-hide-sm">Education</a>
      <a href="#about" className="nav-hide-sm">About</a>
      <a href={profile.resume} target="_blank" rel="noreferrer" className="nav-hide-sm">
        Resume
      </a>
      <button
        className="cmdk-trigger nav-hide-sm"
        onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
        aria-label="Open command menu"
        title="Command menu"
      >
        <kbd>⌘K</kbd>
      </button>
      <ThemeToggle />
      <a href={`mailto:${profile.email}`} className="nav-cta">
        Work with me
      </a>
    </nav>
  </header>
);

export default Navbar;
