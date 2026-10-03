import React from "react";
import Icon from "../components/Icon";
import SectionLabel from "../components/SectionLabel";
import { builds, languageColors, profile } from "../data";

const Projects: React.FC = () => (
  <section id="builds" className="section">
    <SectionLabel icon="boxes">Builds</SectionLabel>
    <div className="builds-grid">
      {builds.map((b) => {
        const body = (
          <>
            <div className="build-head">
              <Icon name="repo" size={14} />
              <h3>{b.name}</h3>
              <span className="badge">{b.status ?? "Public"}</span>
            </div>
            <p>{b.description}</p>
            <span className="build-lang muted">
              <span
                className="dot"
                style={{ background: languageColors[b.language] ?? "#999" }}
              />
              {b.language}
            </span>
          </>
        );
        return b.href ? (
          <a key={b.name} href={b.href} target="_blank" rel="noreferrer" className="card build">
            {body}
          </a>
        ) : (
          <div key={b.name} className="card build">
            {body}
          </div>
        );
      })}
    </div>
    <a
      href={`https://github.com/${profile.github}?tab=repositories`}
      target="_blank"
      rel="noreferrer"
      className="text-link"
    >
      All repositories <Icon name="arrow" size={12} />
    </a>
  </section>
);

export default Projects;
