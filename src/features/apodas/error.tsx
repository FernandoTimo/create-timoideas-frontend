'use client'

export default function ApodasError({ error, reset }: { error: Error, reset: () => void }) {
	return (
		<div className="error">
			<h2>Ocurrió un error en apodas</h2>
			<p>{error.message}</p>
			<button onClick={reset}>Reintentar</button>
		</div>
	);
}
