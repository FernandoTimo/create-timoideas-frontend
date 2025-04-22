import QRCode from "qrcode";

/**
 * 📦 getQRMatrix
 * Retorna una matriz de 0s y 1s representando el código QR de un texto
 */
export const getQRMatrix = async (text: string): Promise<number[][]> => {
  const segments = await QRCode.create(text, { errorCorrectionLevel: "L" });
  const modules = segments.modules;
  const matrix = [];

  for (let row = 0; row < modules.size; row++) {
    const currentRow: number[] = [];
    for (let col = 0; col < modules.size; col++) {
      currentRow.push(modules.get(col, row) ? 1 : 0);
    }
    matrix.push(currentRow);
  }

  return matrix;
};
