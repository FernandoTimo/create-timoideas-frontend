type ParticleTarget = {
  x: number;
  y: number;
};

/**
 * 📦 getQRCoordinatesFromMatrix
 * Convierte una matriz QR en coordenadas absolutas para el canvas,
 * con tamaño real del QR más pequeño (zoom) y centrado perfecto.
 *
 * @param matrix - Matriz binaria del QR (1 = negro, 0 = blanco)
 * @param canvasSize - Tamaño total del canvas (ej: 320)
 * @param qrRenderSize - Tamaño *real* del QR dentro del canvas (ej: 180)
 * @param spacingRatio - Porcentaje de padding interno entre celdas (0 = pegadas)
 */
export const getQRCoordinatesFromMatrix = (
  matrix: number[][],
  canvasSize: number,
  qrRenderSize = 180,
  spacingRatio = 0
): ParticleTarget[] => {
  const coords: ParticleTarget[] = [];

  const qrSize = matrix.length;
  const cellSize = qrRenderSize / qrSize;

  const offset = (canvasSize - qrRenderSize) / 2;
  const cellPadding = cellSize * spacingRatio;

  for (let row = 0; row < qrSize; row++) {
    for (let col = 0; col < qrSize; col++) {
      if (matrix[row][col] === 1) {
        const x = offset + col * cellSize + cellPadding;
        const y = offset + row * cellSize + cellPadding;
        coords.push({ x, y });
      }
    }
  }

  return coords;
};
