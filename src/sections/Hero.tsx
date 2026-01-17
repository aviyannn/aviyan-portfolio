import React, { useEffect, useState } from "react";
import avatar from "../assets/aviyan.jpeg";
import emailIcon from "../assets/email.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.webp";
import linkedinIcon from "../assets/linkedin.webp";
import twitterIcon from "../assets/twitter.png";
import { TechBackground } from "../components/TechBackground";

const roles = ["Web Developer", "Cybersecurity Enthusiast", "Systems Learner"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero hero-row hero-has-bg">
      {/* Background ONLY for Hero */}
      <div className="hero-bg">
        <TechBackground />
      </div>

      {/* LEFT: text (direct child of hero-row) */}
      <div className="hero-right hero-stack">
        <p className="hero-kicker">SOFTWARE</p>

        <h2 className="hero-role">
          <span className="hero-role-static">RESEARCHER.</span>
        </h2>

        <p className="hero-rotating-role">{roles[roleIndex]}</p>

        <p className="hero-body hero-body-wide">
          I build simple, fast web experiences and care about how secure they
          are. Currently studying Computer Science at Texas State University and
          exploring modern web stacks, systems, and secure coding practices.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View projects
          </a>
          <a href="#contact" className="btn ghost">
            Contact me
          </a>
        </div>
      </div>

      {/* RIGHT: photo + name card (direct child of hero-row) */}
      <div className="hero-card">
        <div className="hero-card-photo">
          <img src={avatar} alt="Aviyan Dhital" />
        </div>

        <div className="hero-card-body">
          <h1 className="hero-card-name">
            Aviyan
            <br />
            Dhital
          </h1>

          <p className="hero-card-meta">CS @ Texas State · Web dev · Security</p>

          <div className="hero-links hero-card-links">
            <a href="mailto:aviyandhital@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>

            <a
              href="https://linkedin.com/in/aviyandhital"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/aviyannn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>

            <a
              href="https://instagram.com/aviyan__"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a href="https://x.com/AviYawns" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="X (Twitter)" />
            </a>
          </div>

          <a
            href="/Aviyan-Dhital-Resume.pdf"
            download
            className="btn primary hero-card-resume"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
