'use client'

export default function PoseidonError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen text-center">
      <h2 className="text-xl font-bold text-red-500">Ocurrió un error en poseidon</h2>
      <p className="text-neutral-400">{error.message}</p>
      <button onClick={reset} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition">Reintentar</button>
    </div>
  );
}
