import { useEffect, useRef, useState } from "react";
import { getQRMatrix } from "../lib/getQRMatrix";
import { getQRCoordinatesFromMatrix } from "../lib/getQRCoordinatesFromMatrix";

/**
 * 📦 useQRCoordinates
 * Calcula puntos coordenados para ensamblar QR dentro del tamaño del contenedor.
 *
 * @param value - texto o URL para generar el QR
 * @returns `{ containerRef, points }`
 */
export const useQRCoordinates = (value: string) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[] | null>(null);

  useEffect(() => {
    const run = async () => {
      const matrix = await getQRMatrix(value);

      const containerSize =
        containerRef.current?.getBoundingClientRect().width ?? 200;

      const qrRenderSize = containerSize * 0.8;
      const coords = getQRCoordinatesFromMatrix(
        matrix,
        containerSize,
        qrRenderSize
      );

      setPoints(coords);
    };

    run();
  }, [value]);

  return { containerRef, points };
};
