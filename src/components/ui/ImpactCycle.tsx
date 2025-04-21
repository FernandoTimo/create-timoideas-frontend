"use client";

/**
 * @module ImpactCycle
 * @description Componente cíclico animado con dirección personalizable
 */

import {
  useEffect,
  useState,
  cloneElement,
  isValidElement,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Direcciones válidas para la animación
 */
type SlideDirection = "top" | "bottom" | "left" | "right";

/**
 * Props que acepta el componente ImpactCycle
 */
interface ImpactCycleProps {
  children: ReactNode;
  interval?: number;
  className?: string;

  /**
   * Dirección desde la cual aparece y desaparece el contenido
   * @default "bottom"
   */
  direction?: SlideDirection;
}

/**
 * 📦 ImpactCycle
 * — Muestra elementos con animaciones de caída (o slide) y ciclo infinito
 */
export const ImpactCycle = ({
  children,
  interval = 3000,
  direction = "bottom",
  className,
}: ImpactCycleProps) => {
  const allChildren = Array.isArray(children) ? children : [children];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % allChildren.length);
    }, interval);
    return () => clearInterval(timer);
  }, [allChildren.length, interval]);

  /**
   * Retorna las variantes de animación según la dirección
   */
  const getVariants = (dir: SlideDirection) => {
    const offset = 20;

    switch (dir) {
      case "top":
        return {
          enter: { y: offset, opacity: 0, scale: 0.98 },
          center: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              y: { type: "spring", stiffness: 1000, damping: 22 },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 },
            },
          },
          exit: {
            y: -offset / 2,
            opacity: 0,
            scale: 0.95,
            transition: {
              y: { type: "spring", stiffness: 500, damping: 30 },
              opacity: { duration: 0.25 },
            },
          },
        };
      case "bottom":
        return {
          enter: { y: -offset, opacity: 0, scale: 0.98 },
          center: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              y: { type: "spring", stiffness: 1000, damping: 22 },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 },
            },
          },
          exit: {
            y: offset / 2,
            opacity: 0,
            scale: 0.95,
            transition: {
              y: { type: "spring", stiffness: 500, damping: 30 },
              opacity: { duration: 0.25 },
            },
          },
        };
      case "left":
        return {
          enter: { x: offset, opacity: 0, scale: 0.98 },
          center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
              x: { type: "spring", stiffness: 1000, damping: 22 },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 },
            },
          },
          exit: {
            x: -offset / 2,
            opacity: 0,
            scale: 0.95,
            transition: {
              x: { type: "spring", stiffness: 500, damping: 30 },
              opacity: { duration: 0.25 },
            },
          },
        };
      case "right":
        return {
          enter: { x: -offset, opacity: 0, scale: 0.98 },
          center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
              x: { type: "spring", stiffness: 1000, damping: 22 },
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 },
            },
          },
          exit: {
            x: offset / 2,
            opacity: 0,
            scale: 0.95,
            transition: {
              x: { type: "spring", stiffness: 500, damping: 30 },
              opacity: { duration: 0.25 },
            },
          },
        };
    }
  };

  const current = allChildren[index];
  const wrapped =
    isValidElement(current) && current.key == null
      ? cloneElement(current, { key: `wheel-${index}` })
      : current;

  const variants = getVariants(direction);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        minHeight: "2rem",
      }}
    >
      <AnimatePresence custom={dir}>
        <motion.div
          key={`wheel-${index}`}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
          }}
        >
          {wrapped}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
