import React from "react";

// Decorative footer landscape. Colors come from --mtn-* tokens so it follows the theme.
const W = 1440;
const H = 320;

const midY = (x: number) => 222 + 22 * Math.sin(x / 210 + 0.5) + 10 * Math.sin(x / 90);
const nearY = (x: number) => 284 + 14 * Math.sin(x / 180) + 8 * Math.sin(x / 67 + 1);

const ridge = (fn: (x: number) => number) => {
  let d = `M0 ${fn(0).toFixed(1)}`;
  for (let x = 20; x <= W; x += 20) d += ` L${x} ${fn(x).toFixed(1)}`;
  return `${d} V${H} H0 Z`;
};

const FAR =
  "M0 210 L80 170 L140 190 L230 110 L270 135 L320 95 L370 140 L430 120 L520 60 L580 105 L620 90 L700 150 L780 120 L850 70 L900 100 L960 85 L1040 140 L1120 105 L1180 125 L1260 75 L1330 120 L1440 100 V320 H0 Z";

const SNOW = [
  "M488 82 L520 60 L556 86 L541 81 L529 93 L517 81 L503 90 Z",
  "M826 87 L850 70 L874 84 L862 82 L852 92 L842 84 Z",
  "M302 109 L320 95 L345 117 L332 111 L322 120 L312 110 Z",
  "M1236 90 L1260 75 L1290 94 L1276 91 L1264 100 L1252 91 Z",
];

const TREES = [
  40, 62, 78, 96, 380, 398, 416, 436, 452, 700, 724, 742, 1010, 1028, 1046, 1066, 1300, 1318,
  1336, 1352, 1374, 1396,
];

const STARS: [number, number, number][] = [
  [140, 40, 1.4], [260, 70, 1], [410, 30, 1.2], [640, 50, 1], [720, 22, 1.5], [980, 35, 1.1],
  [1060, 60, 1], [1190, 28, 1.3], [1380, 45, 1], [560, 18, 1], [880, 14, 1.2], [60, 90, 1],
];

const FLAG_COLORS = ["#2f6db5", "#f4f1e8", "#c8412f", "#3f8a52", "#e2b93b"];

const Mountains: React.FC = () => {
  // Prayer flags strung between two poles on the left foothill.
  const x1 = 150;
  const x2 = 330;
  const y1 = nearY(x1) - 34;
  const y2 = nearY(x2) - 40;
  const sag = 16;
  const flags = Array.from({ length: 11 }, (_, i) => {
    const t = (i + 0.5) / 11;
    const x = x1 + (x2 - x1) * t;
    const y = y1 + (y2 - y1) * t + sag * 4 * t * (1 - t);
    return { x, y, color: FLAG_COLORS[i % FLAG_COLORS.length] };
  });

  return (
    <svg
      className="mountains"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mtn-mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--bg)" stopOpacity="0" />
          <stop offset="0.55" stopColor="var(--bg)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--bg)" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <g className="mtn-stars">
        {STARS.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="var(--mtn-snow)" />
        ))}
      </g>
      <circle cx="1120" cy="62" r="26" fill="var(--mtn-sun)" />

      <path d={FAR} fill="var(--mtn-far)" />
      {SNOW.map((d) => (
        <path key={d} d={d} fill="var(--mtn-snow)" />
      ))}
      <rect x="0" y="120" width={W} height={H - 120} fill="url(#mtn-mist)" />

      <path d={ridge(midY)} fill="var(--mtn-mid)" />

      {TREES.map((x, i) => {
        const h = 18 + ((i * 7) % 12);
        const base = nearY(x) + 6;
        return (
          <path
            key={x}
            d={`M${x} ${base - h} L${x + h * 0.32} ${base} L${x - h * 0.32} ${base} Z`}
            fill="var(--mtn-tree)"
          />
        );
      })}

      <g stroke="var(--mtn-tree)" strokeWidth="1.5">
        <line x1={x1} y1={y1} x2={x1} y2={nearY(x1) + 4} />
        <line x1={x2} y1={y2} x2={x2} y2={nearY(x2) + 4} />
      </g>
      <path
        d={`M${x1} ${y1} Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + sag * 2} ${x2} ${y2}`}
        fill="none"
        stroke="var(--mtn-tree)"
        strokeWidth="0.8"
      />
      {flags.map((f) => (
        <rect
          key={f.x}
          x={f.x - 5}
          y={f.y}
          width="10"
          height="12"
          fill={f.color}
          className="mtn-flag"
        />
      ))}

      <path d={ridge(nearY)} fill="var(--mtn-near)" />
    </svg>
  );
};

export default Mountains;
