"use client";

import { useEffect, useRef, useState } from "react";

// 💠 Representa una partícula individual
type Particle = {
  x: number; // posición actual X
  y: number; // posición actual Y
  vx: number; // velocidad en X
  vy: number; // velocidad en Y
  tx: number; // destino final X (coordenada QR)
  ty: number; // destino final Y (coordenada QR)
  alpha: number; // opacidad (por si luego lo quieres animar)
  size: number; // tamaño actual
  targetSize: number; // tamaño final deseado
  cornerRadius: number; // radio de esquina para transición círculo → cuadrado
  startTime: number; // timestamp de inicio (para controlar easing por tiempo)
};

const DURATION_MS = 12000; // duración de la animación de forma (2 segundos)

type Props = {
  points: { x: number; y: number }[];
  pointSize: number; // tamaño final de cada partícula (px)
};

// 🎨 Dibuja un rectángulo con esquinas redondeadas personalizadas
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  radiusRatio: number
) {
  const radius = size * radiusRatio;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + size - radius, y);
  ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
  ctx.lineTo(x + size, y + size - radius);
  ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
  ctx.lineTo(x + radius, y + size);
  ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

export const QRParticlesAssembler = ({ points, pointSize }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [canvasSize, setCanvasSize] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length === 0) return;

    // 🧱 Detecta tamaño del contenedor (para adaptar el canvas)
    const parent = canvas.parentElement;
    const rect = parent?.getBoundingClientRect();
    const size = Math.min(rect?.width ?? 0, rect?.height ?? 0);
    if (!size) return;

    // 🧼 Limpia el canvas y lo adapta al tamaño del padre (evita pixelado)
    canvas.width = size;
    canvas.height = size;
    setCanvasSize(size);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;

    // 🧪 Inicializa las partículas
    particlesRef.current = points.map((pt) => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 4 + 2;
      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        tx: pt.x,
        ty: pt.y,
        alpha: 1,
        size: 0, // inicia microscópico
        targetSize: pointSize, // tamaño deseado al final
        cornerRadius: 0.5, // comienza redondo (0.5)
        startTime: performance.now(), // tiempo de inicio
      };
    });

    let frame: number;

    // 🔁 Animación cuadro a cuadro
    const animate = () => {
      const now = performance.now();

      ctx.clearRect(0, 0, size, size);

      particlesRef.current.forEach((p) => {
        const elapsed = now - p.startTime;
        const t = Math.min(elapsed / DURATION_MS, 1); // progreso 0 → 1

        // 🎯 Ease-out cúbico: lento al inicio, rápido al final
        const eased = 1 - (1 - t) ** 3;

        // 🎨 Reduce cornerRadius de 0.5 (círculo) → 0 (cuadrado)
        p.cornerRadius = 0.5 * (1 - eased);

        // 🎯 Interpolación de tamaño: mismo easing
        p.size += (p.targetSize - p.size) * eased * 0.1;

        // ✈️ Movimiento hacia destino con desaceleración suave
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx + (p.tx - p.x) * 0.05;
        p.y += p.vy + (p.ty - p.y) * 0.05;

        // ✏️ Dibujar la partícula redondeada
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "#ffffff";
        drawRoundedRect(
          ctx,
          p.x - p.size / 2,
          p.y - p.size / 2,
          p.size,
          p.cornerRadius
        );
      });

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [points, pointSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full block"
    />
  );
};
