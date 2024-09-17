export function formatStringUnaccent(str: string) {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\r?\n/g, '')
		.toLowerCase();
}
