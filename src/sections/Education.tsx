import React from "react";
import SectionLabel from "../components/SectionLabel";
import { education } from "../data";

const Education: React.FC = () => (
  <section id="education" className="section">
    <SectionLabel icon="cap">Education</SectionLabel>
    <div className="card edu">
      <div className="edu-head">
        <span className="mark" style={{ background: "#501214" }}>
          TXST
        </span>
        <div className="edu-title">
          <h3>{education.school}</h3>
          <span className="muted">{education.degree}</span>
        </div>
        <div className="edu-meta muted">
          <span>{education.dates}</span>
          <span>{education.location}</span>
        </div>
      </div>
      <ul className="edu-honors">
        {education.honors.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="tag-row">
        {education.coursework.map((c) => (
          <span key={c} className="tag">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
