import React from "react";

const Projects: React.FC = () => (
  <section id="projects" className="stack-section">
    <div className="stack-label">✦ Projects</div>
    <div className="stack-body">
      <div className="stack-entry">
        <h3>FFT-Based Microscopy Image Analysis</h3>
        <p>
          Python-based pipeline for analyzing microscopy-style images using
          2D Fourier Transforms (FFT) and frequency-domain filtering, including
          Gaussian low-pass and high-pass filters.
        </p>
        <p className="stack-tags">
          Python · NumPy · Image Processing · Fourier Analysis
        </p>
        <a
          href="https://github.com/aviyannn/FFT-MICROSCOPY-ANALYSIS"
          target="_blank"
          rel="noopener noreferrer"
          className="stack-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="stack-entry">
        <h3>Portfolio Site</h3>
        <p>
          A celestial-themed personal portfolio showcasing projects, experience,
          and technical work across systems, security, and data-focused areas.
        </p>
        <p className="stack-tags">React · TypeScript · Vite</p>
        <a
          href="https://github.com/aviyannn/aviyan-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="stack-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="stack-entry">
        <h3>Expense Tracker (In Progress)</h3>
        <p>
          A personal finance and expense tracking application focused on clean
          data handling, categorization, and future analytics features.
        </p>
        <p className="stack-tags">Python · Web · Data Handling</p>
        <a
          href="https://github.com/aviyannn/expensetracker"
          target="_blank"
          rel="noopener noreferrer"
          className="stack-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="stack-entry">
        <h3>CapitalOne (Car Cosmos)</h3>
        <p>
          A full-stack financial planning tool that helps users track expenses
          and plan savings goals for large purchases such as a car.
        </p>
        <p className="stack-tags">Next.js · TypeScript · Supabase</p>
        <a
          href="https://github.com/aviyannn/capitalOne"
          target="_blank"
          rel="noopener noreferrer"
          className="stack-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  </section>
);

export default Projects;