import React from "react";
import Icon from "../components/Icon";
import SectionLabel from "../components/SectionLabel";
import { featured } from "../data";

const Featured: React.FC = () => (
  <section className="section">
    <SectionLabel icon="star">Featured</SectionLabel>
    <article className="card featured">
      <div className="featured-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-bar" />
          <div className="art-threshold" />
          <div className="art-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="art-chart">
            {[30, 45, 38, 70, 92, 55, 40, 62, 85, 48].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <p className="featured-meta muted">
        {featured.context} <span>·</span> {featured.year}
      </p>
      <h3 className="featured-title">{featured.title}</h3>
      <p className="featured-summary">{featured.summary}</p>
      <div className="tag-row">
        {featured.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <p className="featured-stack muted">{featured.stack}</p>
      {featured.href ? (
        <a href={featured.href} target="_blank" rel="noreferrer" className="text-link">
          View the code <Icon name="arrow" size={12} />
        </a>
      ) : (
        <a href="#experience" className="text-link">
          More research <Icon name="arrow" size={12} />
        </a>
      )}
    </article>
  </section>
);

export default Featured;
