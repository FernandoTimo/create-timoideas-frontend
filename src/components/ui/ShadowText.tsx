"use client";

import { useEffect, useRef, useState } from "react";

interface ShadowTextProps {
  text: string;
  direction?: "top" | "bottom" | "left" | "right" | "center";
  animation?: "in" | "out";
  interval?: number;
  layers: string[];
  mode?: "default" | "fade" | "pulse";
  shadowSize?: number;
  fontSize?: string;
  className?: string;
}

export const ShadowText = ({
  text,
  direction = "bottom",
  animation,
  interval,
  layers,
  mode = "default",
  shadowSize = 20,
  fontSize = "4rem",
  className,
}: ShadowTextProps) => {
  const layerCount = layers.length;
  const totalSteps = layerCount + 1;
  const [step, setStep] = useState(animation ? 0 : totalSteps);
  const phaseRef = useRef<"in-f" | "in-r" | "out-f" | "out-r">(
    animation === "out" ? "out-f" : "in-f"
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const runPhase = (direction: "forward" | "reverse", onDone: () => void) => {
    const isForward = direction === "forward";
    const duration = (interval || 4000) * (isForward ? 0.2 : 0.1);
    const frameDuration = duration / totalSteps;

    let current = isForward ? 0 : totalSteps;

    const animate = () => {
      setStep(current);
      if (isForward ? current >= totalSteps : current <= 0) {
        onDone();
        return;
      }
      current += isForward ? 1 : -1;
      timeoutRef.current = setTimeout(animate, frameDuration);
    };

    animate();
  };

  useEffect(() => {
    if (!animation || !interval) return;

    const runLoop = () => {
      const phase = phaseRef.current;
      runPhase("forward", () => {
        timeoutRef.current = setTimeout(() => {
          runPhase("reverse", () => {
            phaseRef.current =
              phase === "in-f"
                ? "in-f"
                : phase === "in-r"
                ? "in-f"
                : phase === "out-f"
                ? "out-f"
                : "out-f";
            runLoop();
          });
        }, interval * 0.7);
      });
    };

    runLoop();
    return () => clearTimers();
  }, [animation, interval]);

  const getOffset = (i: number) => {
    const unit = shadowSize / layerCount;
    const offset = unit * (i + 1);
    switch (direction) {
      case "top":
        return `translateY(-${offset}px)`;
      case "bottom":
        return `translateY(${offset}px)`;
      case "left":
        return `translateX(-${offset}px)`;
      case "right":
        return `translateX(${offset}px)`;
      case "center":
        const scale = 1 + offset / 50;
        return `scale(${scale})`;
    }
  };

  const getOpacity = (i: number) => {
    switch (mode) {
      case "fade":
        return 1 - i / layerCount;
      case "pulse":
        return 0.5 + 0.5 * Math.sin((i / layerCount) * Math.PI);
      default:
        return 1;
    }
  };

  const getVisibleLayers = () => {
    const phase = phaseRef.current;
    const indexes: number[] = [];

    if (phase === "in-f") {
      for (let i = layerCount - 1; i >= 0; i--) {
        if (step > layerCount - 1 - i) indexes.push(i);
      }
    }

    if (phase === "in-r") {
      for (let i = layerCount - 1; i >= 0; i--) {
        if (step <= layerCount - 1 - i) indexes.push(i);
      }
    }

    if (phase === "out-f") {
      for (let i = 0; i < layerCount; i++) {
        if (step > i + 1) indexes.push(i);
      }
    }

    if (phase === "out-r") {
      for (let i = layerCount - 1; i >= 0; i--) {
        if (step > layerCount - i) indexes.push(i);
      }
    }

    return indexes;
  };

  const isTextVisible = () => {
    if (!animation) return true;
    const phase = phaseRef.current;
    if (phase.startsWith("out")) return true;
    if (phase === "in-f") return step > layerCount;
    if (phase === "in-r") return step <= layerCount;
    return true;
  };

  const chars = [...text];
  const visibleLayers = getVisibleLayers();

  return (
    <span
      className="relative inline-block whitespace-nowrap"
      style={{ fontSize }}
    >
      {/* Sombras (capas) */}
      {layers.map((color, i) =>
        visibleLayers.includes(i) ? (
          <span
            key={`layer-${i}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: layerCount - i, // ✅ capa más cercana encima, más profunda abajo
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {chars.map((char, j) => (
              <span
                key={`char-${i}-${j}`}
                className={className}
                aria-hidden
                style={{
                  display: "inline-block",
                  color,
                  opacity: getOpacity(i),
                  transform: getOffset(i),
                  zIndex: layerCount - i,
                  fontSize,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ) : null
      )}

      {/* Texto principal */}
      <span
        className={className}
        style={{
          position: "relative",
          zIndex: layerCount + 1,
          opacity: isTextVisible() ? 1 : 0,
          visibility: isTextVisible() ? "visible" : "hidden",
          transition: "opacity 0.2s ease",
        }}
      >
        {chars.map((char, i) => (
          <span key={`main-char-${i}`} className="inline-block">
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};
