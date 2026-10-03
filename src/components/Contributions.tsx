import React, { useEffect, useMemo, useState } from "react";
import { profile } from "../data";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Response = { total: Record<string, number>; contributions: Day[] };

const API = `https://github-contributions-api.jogruber.de/v4/${profile.github}`;
const CACHE_KEY = "gh-contributions";
const CACHE_MS = 60 * 60 * 1000;

// One request covers every year; cache it for an hour so reloads don't hit the rate limit.
const loadContributions = async (): Promise<Response> => {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null");
    if (cached && Date.now() - cached.at < CACHE_MS) return cached.data;
  } catch {
    // Storage unavailable or corrupt; fall through to the network.
  }
  const r = await fetch(API);
  if (!r.ok) throw new Error(String(r.status));
  const data: Response = await r.json();
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // Caching is best-effort.
  }
  return data;
};

const Contributions: React.FC = () => {
  const [data, setData] = useState<Response | null>(null);
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadContributions()
      .then((d) => !cancelled && setData(d))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const totals = data?.total ?? {};
  const years = Object.keys(totals).sort().reverse();
  const days = useMemo(
    () =>
      data?.contributions
        .filter((d) => d.date.startsWith(year))
        .sort((a, b) => a.date.localeCompare(b.date)) ?? null,
    [data, year]
  );

  // Pad the start so the first column begins on Sunday, like GitHub.
  const cells = useMemo(() => {
    if (!days?.length) return [];
    const offset = new Date(days[0].date + "T00:00:00").getDay();
    return [...Array<null>(offset).fill(null), ...days];
  }, [days]);

  if (failed) return null;

  return (
    <section className="section">
      <SectionLabel icon="github">Contributions</SectionLabel>
      <div className="card contrib">
        <div className="contrib-head">
          <span>
            <strong>{totals[year] ?? "—"}</strong>{" "}
            <span className="muted">contributions in {year}</span>
          </span>
          <div className="contrib-years">
            {years.map((y) => (
              <button
                key={y}
                className={y === year ? "active" : undefined}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
        <div className="contrib-scroll">
          <div className="contrib-grid" aria-label={`GitHub contributions in ${year}`}>
            {cells.map((d, i) =>
              d ? (
                <span
                  key={d.date}
                  className={`lvl lvl-${d.level}`}
                  title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                />
              ) : (
                <span key={`pad-${i}`} className="lvl lvl-pad" />
              )
            )}
          </div>
        </div>
        <a
          className="contrib-link"
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" size={12} /> {profile.github}
        </a>
      </div>
    </section>
  );
};

export default Contributions;
