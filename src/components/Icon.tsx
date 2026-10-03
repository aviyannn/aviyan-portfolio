import React from "react";

const paths: Record<string, React.ReactNode> = {
  github: (
    <path
      fill="currentColor"
      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
    />
  ),
  linkedin: (
    <path
      fill="#0a66c2"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"
    />
  ),
  spotify: (
    <path
      fill="#1db954"
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.04 15.87a.69.69 0 0 1-.94.23c-2.59-1.58-5.84-1.93-9.68-1.06a.69.69 0 1 1-.3-1.34c4.2-.96 7.8-.55 10.7 1.23.32.2.42.62.22.94Zm1.35-3a.86.86 0 0 1-1.18.28c-2.96-1.82-7.48-2.35-10.98-1.29a.86.86 0 1 1-.5-1.64c4-1.21 8.97-.62 12.38 1.47.4.25.53.78.28 1.18Zm.12-3.12C14.96 8.64 9.1 8.45 5.7 9.48a1.03 1.03 0 1 1-.6-1.97c3.9-1.18 10.38-.95 14.47 1.48a1.03 1.03 0 0 1-1.06 1.77Z"
    />
  ),
  instagram: (
    <g fill="none" stroke="#d6249f" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="#d6249f" />
    </g>
  ),
  mail: (
    <g fill="none" stroke="#c9822b" strokeWidth="2" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </g>
  ),
  file: (
    <g fill="none" stroke="#b5503a" strokeWidth="2" strokeLinejoin="round">
      <path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h5" />
    </g>
  ),
  repo: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v16H7.5A2.5 2.5 0 0 0 5 20.5Z" />
      <path d="M5 20.5A2.5 2.5 0 0 0 7.5 23H19v-5" />
    </g>
  ),
  arrow: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6 6 6-6 6"
    />
  ),
  external: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17 17 7M8 7h9v9"
    />
  ),
  chevron: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 9 6 6 6-6"
    />
  ),
  briefcase: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M3 12.5h18" />
    </g>
  ),
  star: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"
    />
  ),
  boxes: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="3" y="12" width="8" height="8" rx="1.5" />
      <rect x="13" y="12" width="8" height="8" rx="1.5" />
      <rect x="8" y="3" width="8" height="8" rx="1.5" />
    </g>
  ),
  wrench: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="M14.7 6.3a4.5 4.5 0 0 0 5.8 5.8l-8.9 8.9a2.1 2.1 0 0 1-3-3l8.9-8.9a4.5 4.5 0 0 1-2.8-2.8Z"
    />
  ),
  cap: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="m2 9 10-5 10 5-10 5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </g>
  ),
  search: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </g>
  ),
  copy: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="8" y="8" width="12.5" height="12.5" rx="2.5" />
      <path d="M16 8V5.5A2 2 0 0 0 14 3.5H5.5a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2H8" />
    </g>
  ),
  heart: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="M12 20s-7.5-4.6-9.2-9.4A4.9 4.9 0 0 1 12 6.3a4.9 4.9 0 0 1 9.2 4.3C19.5 15.4 12 20 12 20Z"
    />
  ),
  sun: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </g>
  ),
  moon: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
    />
  ),
  sparkle: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
    />
  ),
};

type Props = { name: keyof typeof paths | string; size?: number; className?: string };

const Icon: React.FC<Props> = ({ name, size = 14, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    {paths[name]}
  </svg>
);

export default Icon;
