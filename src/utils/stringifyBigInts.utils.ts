// Función para convertir BigInt a cadena en todo el objeto
export default function stringifyBigInts(obj: any): any {
	return JSON.parse(
		JSON.stringify(obj, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
	);
}