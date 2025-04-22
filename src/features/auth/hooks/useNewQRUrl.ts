import { useEffect, useState } from "react";

type GeneratorFn = () => string;

/**
 * 📦 useNewQRUrl
 * Genera una nueva URL cada X segundos usando una función generadora.
 *
 * @param intervalSeconds - cada cuántos segundos actualizar
 * @param generator - función que retorna una nueva URL
 */
export const useNewQRUrl = (
  intervalSeconds: number,
  generator: GeneratorFn
) => {
  const [url, setUrl] = useState(generator);

  useEffect(() => {
    const interval = setInterval(() => {
      setUrl(generator());
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [intervalSeconds, generator]);

  return url;
};
