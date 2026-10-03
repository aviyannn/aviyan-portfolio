import React, { useState } from "react";
import type { Entry } from "../data";
import Icon from "./Icon";

type Props = { entries: Entry[]; defaultOpen?: string };

const Timeline: React.FC<Props> = ({ entries, defaultOpen }) => {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  return (
    <ol className="timeline">
      {entries.map((e) => {
        const isOpen = open === e.org;
        const single = e.roles.length === 1 ? e.roles[0] : null;
        const first = e.roles[0];
        const last = e.roles[e.roles.length - 1];
        const dates = single
          ? single.dates
          : `${last.dates.split(" — ")[0]} — ${first.dates.split(" — ").pop()}`;
        const subtitle = single ? single.title : `${e.roles.length} roles`;

        return (
          <li key={e.org} className={isOpen ? "open" : undefined}>
            <button
              className="timeline-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : e.org)}
            >
              <span className="mark" style={{ background: e.color }}>
                {e.mark}
              </span>
              <span className="timeline-title">
                <h3>{e.org}</h3>
                <span className="muted">
                  {subtitle}
                  <span className="dates-inline"> · {dates}</span>
                </span>
              </span>
              <span className="timeline-dates muted">{dates}</span>
              <Icon name="chevron" size={14} className="chevron" />
            </button>

            {isOpen && (
              <div className="timeline-body">
                {e.roles.map((r) => (
                  <div key={r.title} className="role">
                    {!single && (
                      <p className="role-head">
                        <strong>{r.title}</strong>
                        <span className="muted">{r.dates}</span>
                      </p>
                    )}
                    {r.note && <p className="role-note muted">{r.note}</p>}
                    {r.groups.map((g, i) => (
                      <div key={g.heading ?? i} className="role-group">
                        {g.heading && <h4>{g.heading}</h4>}
                        <ul>
                          {g.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
