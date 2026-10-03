import React from "react";
import { HOME_ZONE, timeIn, useNow } from "../time";

const PLACES = [
  { label: "San Marcos", zone: HOME_ZONE },
  { label: "Nepal", zone: "Asia/Kathmandu" },
];

// Live clocks for where I am and where I'm from.
const LocalTime: React.FC = () => {
  const now = useNow();

  return (
    <span className="local-time">
      {PLACES.map((p, i) => {
        const { time, day } = timeIn(p.zone, now);
        return (
          <React.Fragment key={p.zone}>
            {i > 0 && <span className="muted">·</span>}
            <span title={day ? "Daytime" : "Nighttime"} aria-hidden="true">
              {day ? "☀️" : "🌙"}
            </span>
            <span className="muted">{p.label}</span>
            <span className="tabular">{time}</span>
          </React.Fragment>
        );
      })}
    </span>
  );
};

export default LocalTime;
