"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  alpha: number;
  size: number;
  targetSize: number;
};

type Props = {
  points: { x: number; y: number }[];
  pointSize: number;
};

export const QRParticlesAssembler = ({ points, pointSize = 5 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length === 0) return;

    // 🔍 Obtener tamaño real del contenedor
    const parent = canvas.parentElement;
    const rect = parent?.getBoundingClientRect();
    const size = Math.min(rect?.width ?? 0, rect?.height ?? 0);
    if (!size) return;

    // 🔧 Setear resolución del canvas (para evitar pixelado)
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;

    particlesRef.current = points.map((pt) => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 8 + 6;
      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        tx: pt.x + (Math.random() - 0.5) * 2, // ✨ destino con vibración mínima
        ty: pt.y + (Math.random() - 0.5) * 2,
        alpha: 1,
        size: 0, // inicia chiquito
        targetSize: pointSize, // queremos llegar a 8
      };
    });
    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      particlesRef.current.forEach((p) => {
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx + (p.tx - p.x) * 0.04;
        p.y += p.vy + (p.ty - p.y) * 0.04;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "#ffffff";
        // Interpolación de tamaño
        p.size += (p.targetSize - p.size) * 0.08;

        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [points, pointSize]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 wh block" />;
};
