/**
 * 📏 Ajusta el tamaño del texto según el casing
 */
export function adjustFontSize(
  baseSize: string,
  casing: "uppercase" | "capitalized" | "mixed"
): string {
  const numeric = parseFloat(baseSize);
  const unit = baseSize.replace(String(numeric), "");

  switch (casing) {
    case "uppercase":
      return `${numeric * 0.95}${unit}`;
    case "capitalized":
    case "mixed":
      return `${numeric * 1.05}${unit}`;
  }
}
