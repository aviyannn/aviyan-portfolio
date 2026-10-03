import React from "react";
import SectionLabel from "../components/SectionLabel";
import { about } from "../data";

const About: React.FC = () => (
  <section id="about" className="section">
    <SectionLabel icon="heart">Off the clock</SectionLabel>
    <p className="about-intro">{about.intro}</p>
    <ul className="interests">
      {about.interests.map((i) => (
        <li key={i.title} className="interest">
          <span className="interest-emoji" aria-hidden="true">
            {i.emoji}
          </span>
          <span className="interest-text">
            <span className="interest-title">{i.title}</span>
            <span className="muted">{i.detail}</span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default About;
