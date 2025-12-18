// src/sections/Contact.tsx
import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="stack-section">
    <div className="stack-label">✦ Contact</div>
    <div className="stack-body">
      <p>
        Open to internships, part‑time roles, and interesting projects in web
        development, security, and systems.
      </p>
      <p>
        Email:{" "}
        <a href="mailto:aviyandhital@gmail.com" className="contact-email">
          aviyandhital@gmail.com
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
