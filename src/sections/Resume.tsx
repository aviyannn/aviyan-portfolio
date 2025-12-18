import React from "react";
import PageFooterBar from "../components/PageFooterBar";

const Resume: React.FC = () => (
  <section className="section">
    <h2>Resume</h2>
    <p>View the latest copy of my CV below or download it as a PDF.</p>

    <div className="resume-frame">
      <iframe
        src="/Aviyan-Dhital-CV.pdf"
        title="Aviyan Dhital CV"
        loading="lazy"
      />
    </div>

    <a href="/Aviyan-Dhital-CV.pdf" download className="btn primary">
      Download CV
    </a>

    <PageFooterBar />
  </section>
);

export default Resume;
