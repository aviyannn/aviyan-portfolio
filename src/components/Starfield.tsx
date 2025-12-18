import React, { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number };

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const widthRef = useRef<number>(window.innerWidth);
  const heightRef = useRef<number>(window.innerHeight);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initStars = () => {
      const STAR_COUNT = 180;
      const stars: Star[] = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * widthRef.current,
          y: Math.random() * heightRef.current,
          z: Math.random() * widthRef.current,
        });
      }
      starsRef.current = stars;
    };

    const resize = () => {
      widthRef.current = canvas.width = window.innerWidth;
      heightRef.current = canvas.height = window.innerHeight;
      initStars();
    };

    const animate = () => {
      const width = widthRef.current;
      const height = heightRef.current;
      const stars = starsRef.current;

      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        star.z -= 2;
        if (star.z <= 0) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
          star.z = width;
        }

        const k = 128 / star.z;
        const x = star.x * k;
        const y = star.y * k;

        if (x < 0 || x >= width || y < 0 || y >= height) continue;

        const size = (1 - star.z / width) * 2.2;
        ctx.fillStyle = "rgba(248, 250, 252, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas id="starfield" ref={canvasRef} className="starfield" />;
};

export default Starfield;
