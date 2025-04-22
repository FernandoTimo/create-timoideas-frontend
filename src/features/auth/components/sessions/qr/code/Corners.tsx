export function Corners() {
  const size = "w-4 h-4"; // tamaño de los indicadores
  const border = "border-purple-900/50";
  return (
    <>
      <div
        className={`absolute top-0 left-0 ${size} border-t-2 border-l-2 ${border}`}
      />
      <div
        className={`absolute top-0 right-0 ${size} border-t-2 border-r-2 ${border}`}
      />
      <div
        className={`absolute bottom-0 left-0 ${size} border-b-2 border-l-2 ${border}`}
      />
      <div
        className={`absolute bottom-0 right-0 ${size} border-b-2 border-r-2 ${border}`}
      />
    </>
  );
}
