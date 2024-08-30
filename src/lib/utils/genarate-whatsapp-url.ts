export function generateWhatsAppUrl(message: string) {
	const phoneNumber = '5531995904648';
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
