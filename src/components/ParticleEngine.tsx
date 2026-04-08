"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
}

export default function ParticleEngine() {
  const [hasMounted, setHasMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse for sparks
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (Math.random() > 0.7) {
        createSpark(e.clientX, e.clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create ember particle
    const createEmber = () => {
      const colors = ["#ff3d00", "#ff0057", "#b200ff", "#ffd700", "#ff6600"];
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 2,
        speedY: -(Math.random() * 3 + 2),
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      };
      particlesRef.current.push(particle);
    };

    // Create spark near mouse
    const createSpark = (x: number, y: number) => {
      const particle: Particle = {
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 4,
        speedY: (Math.random() - 0.5) * 4,
        opacity: 1,
        color: "#ffd700",
        life: 1,
      };
      particlesRef.current.push(particle);
    };

    // Create smoke
    const createSmoke = () => {
      if (Math.random() > 0.02) return;
      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: canvas.height * 0.7 + Math.random() * canvas.height * 0.3,
        size: Math.random() * 50 + 30,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -(Math.random() * 0.5 + 0.2),
        opacity: 0.15,
        color: "#666666",
        life: 1,
      };
      particlesRef.current.push(particle);
    };

    // Update and draw loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 3; i++) createEmber();
      createSmoke();

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.008;
        p.opacity = p.life;
        p.size *= 0.998;
        if (p.speedY < -1) p.speedX += Math.sin(Date.now() * 0.001) * 0.05;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2,
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return p.life > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
