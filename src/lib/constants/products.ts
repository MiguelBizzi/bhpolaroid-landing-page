export interface Product {
	name: string;
	description: string;
	image: string;
	minimum?: number;
	price: number;
}

export const products: Product[] = [
	{
		name: 'Mini Polaroid',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Capture suas memórias favoritas em um formato compacto e charmoso com a Mini Polaroid!',
		minimum: 10,
		price: 1.3
	},
	{
		name: 'Mini Polaroid com Ímã',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Leve suas fotos para qualquer lugar! Mini Polaroid com ímã para decorar sua geladeira ou quadro de metal.',
		minimum: 10,
		price: 1.5
	},
	{
		name: 'Mini Polaroid Adesiva',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Adesive suas recordações com estilo! Mini Polaroid adesiva, perfeita para personalizar seus itens.',
		minimum: 10,
		price: 1.5
	},
	{
		name: 'Polaroid Normal',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Fotos em tamanho clássico com a qualidade Polaroid que você ama!',
		minimum: 5,
		price: 2.3
	},
	{
		name: 'Polaroid Normal com Ímã',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Transforme suas fotos clássicas em ímãs personalizados e decore seu espaço com suas lembranças mais queridas.',
		minimum: 5,
		price: 3.0
	},
	{
		name: 'Polaroid Normal Adesiva',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Adicione um toque pessoal a qualquer superfície com a Polaroid clássica em formato adesivo.',
		minimum: 5,
		price: 3.5
	},
	{
		name: 'Mini Polaroid Retrô',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Dê um toque vintage às suas fotos com a Mini Polaroid Retrô, perfeita para amantes do retrô.',
		minimum: 20,
		price: 0.9
	},
	{
		name: 'Mini Polaroid Retrô com Ímã',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Combine o charme retrô com a praticidade dos ímãs para suas fotos favoritas.',
		minimum: 20,
		price: 1.1
	},
	{
		name: 'Mini Polaroid Retrô Adesiva',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Para os fãs do vintage: adesivos de fotos com o toque retrô que você adora!',
		minimum: 20,
		price: 1.3
	},
	{
		name: 'Polaroid Retrô',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Clássico e atemporal, o formato Polaroid Retrô é perfeito para qualquer ocasião.',
		minimum: 15,
		price: 1.5
	},
	{
		name: 'Polaroid Retrô com Ímã',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Fotos retrô que também são ímãs! Perfeito para decorar qualquer superfície metálica.',
		minimum: 15,
		price: 2.0
	},
	{
		name: 'Polaroid Retrô Adesiva',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Leve o visual retrô para o próximo nível com estes adesivos de fotos!',
		minimum: 15,
		price: 1.8
	},
	{
		name: 'Marcador de Página',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Nunca perca sua página favorita com nossos elegantes marcadores de página.',
		price: 8.0
	},
	{
		name: 'Marcador de Página Personalizado',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description:
			'Deixe sua marca com nossos marcadores de página personalizados! Ideal para presentes.',
		price: 15.0
	},
	{
		name: 'Capa para Kindle',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Proteja seu Kindle com estilo! Nossas capas oferecem durabilidade e elegância.',
		price: 15.0
	},
	{
		name: 'Caderno Digital',
		image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		description: 'Anote todas as suas ideias em um caderno digital moderno e prático.',
		price: 20.0
	}
];

export const polaroid_products: Product[] = products
	.filter((product) => product.name.includes('Polaroid') && !product.name.includes('Mini Polaroid'))
	.slice(0, 4);

export const mini_polaroid_products: Product[] = products
	.filter((product) => product.name.includes('Mini Polaroid'))
	.slice(0, 4);

export const other_products: Product[] = products
	.filter(
		(product) => !product.name.includes('Polaroid') && !product.name.includes('Mini Polaroid')
	)
	.slice(0, 4);
