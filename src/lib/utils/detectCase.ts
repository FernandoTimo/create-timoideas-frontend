/**
 * 🔠 Detecta el tipo de casing del texto
 */
export function detectCase(
  text: string
): "uppercase" | "capitalized" | "mixed" {
  if (text === text.toUpperCase()) return "uppercase";

  const isCapitalized =
    text[0] === text[0].toUpperCase() &&
    text.slice(1) === text.slice(1).toLowerCase();

  console.log("isCapitalized", isCapitalized);
  return isCapitalized ? "capitalized" : "mixed";
}
