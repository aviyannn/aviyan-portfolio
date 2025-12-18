import React from "react";

const Projects: React.FC = () => (
  <section id="projects" className="stack-section">
    <div className="stack-label">✦ Projects</div>
    <div className="stack-body">
      <div className="stack-entry">
        <h3>Car Cosmos</h3>
        <p>
          Financial planning tool that helps students save and plan for car
          purchases with clear, visual goals.
        </p>
        <p className="stack-tags">Next.js · TypeScript · Supabase</p>
      </div>
      <div className="stack-entry">
        <h3>Security Playground</h3>
        <p>
          A set of experiments exploring auth flows, hashing, and secure coding
          practices in small web services.
        </p>
        <p className="stack-tags">Node.js · Express · PostgreSQL</p>
      </div>
      <div className="stack-entry">
        <h3>Portfolio Site</h3>
        <p>
          This celestial‑themed portfolio showcasing projects, experience, and
          experiments in systems and security.
        </p>
        <p className="stack-tags">React · TypeScript · Vite</p>
      </div>
    </div>
  </section>
);

export default Projects;
