import React from "react";
import SectionLabel from "../components/SectionLabel";
import { toolkit } from "../data";

const Toolkit: React.FC = () => (
  <section className="section">
    <SectionLabel icon="wrench">Toolkit</SectionLabel>
    <dl className="toolkit">
      {toolkit.map((group) => (
        <div key={group.label} className="toolkit-row">
          <dt className="muted">{group.label}</dt>
          <dd className="tag-row">
            {group.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Toolkit;
