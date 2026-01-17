// src/components/TechBackground.tsx
import React, { useMemo } from "react";

type TechIcon = {
  id: number;
  top: number;
  left: number;
  scale: number;
  opacity: number;
  duration: number;
  delay: number;
};

const ICON_COUNT = 40;

function generateIcons(): TechIcon[] {
  return Array.from({ length: ICON_COUNT }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    scale: 0.6 + Math.random() * 0.8,
    opacity: 0.25 + Math.random() * 0.4,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 6,
  }));
}

export const TechBackground: React.FC = () => {
  const icons = useMemo(() => generateIcons(), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-slow"
          style={{
            top: `${icon.top}vh`,
            left: `${icon.left}vw`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            opacity: icon.opacity,
            transform: `scale(${icon.scale})`,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="6" width="12" height="12" rx="2" fill="#22c55e" />
            <rect x="9" y="9" width="6" height="6" rx="1" fill="#020617" />
            <rect x="4" y="9" width="1.5" height="2" fill="#22c55e" />
            <rect x="4" y="13" width="1.5" height="2" fill="#22c55e" />
            <rect x="18.5" y="9" width="1.5" height="2" fill="#22c55e" />
            <rect x="18.5" y="13" width="1.5" height="2" fill="#22c55e" />
            <rect x="9" y="4" width="2" height="1.5" fill="#22c55e" />
            <rect x="13" y="4" width="2" height="1.5" fill="#22c55e" />
            <rect x="9" y="18.5" width="2" height="1.5" fill="#22c55e" />
            <rect x="13" y="18.5" width="2" height="1.5" fill="#22c55e" />
          </svg>
        </div>
      ))}
    </div>
  );
};
