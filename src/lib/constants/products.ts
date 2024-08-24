export interface Product {
    name: string;
    description: string;
    image: string;
    minimum?: number;
    price: number;
}

export const products: Product[] = [
    {
        name: "Mini Polaroid",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Capture suas memórias favoritas em um formato compacto e charmoso com a Mini Polaroid!",
        minimum: 10,
        price: 1.30
    },
    {
        name: "Mini Polaroid Magnet",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Leve suas fotos para qualquer lugar! Mini Polaroid com imã para decorar sua geladeira ou quadro de metal.",
        minimum: 10,
        price: 1.50
    },
    {
        name: "Mini Polaroid Sticker",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Adesive suas recordações com estilo! Mini Polaroid adesiva, perfeita para personalizar seus itens.",
        minimum: 10,
        price: 1.50
    },
    {
        name: "Normal Polaroid",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Fotos em tamanho clássico com a qualidade Polaroid que você ama!",
        minimum: 5,
        price: 2.30
    },
    {
        name: "Normal Polaroid Magnet",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Transforme suas fotos clássicas em ímãs personalizados e decore seu espaço com suas lembranças mais queridas.",
        minimum: 5,
        price: 3.00
    },
    {
        name: "Normal Polaroid Sticker",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Adicione um toque pessoal a qualquer superfície com a Polaroid clássica em formato adesivo.",
        minimum: 5,
        price: 3.50
    },
    {
        name: "Mini Retro Polaroid",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Dê um toque vintage às suas fotos com a Mini Retro Polaroid, perfeita para amantes do retrô.",
        minimum: 20,
        price: 0.90
    },
    {
        name: "Mini Retro Polaroid Magnet",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Combine o charme retrô com a praticidade dos ímãs para suas fotos favoritas.",
        minimum: 20,
        price: 1.10
    },
    {
        name: "Mini Retro Polaroid Sticker",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Para os fãs do vintage: adesivos de fotos com o toque retrô que você adora!",
        minimum: 20,
        price: 1.30
    },
    {
        name: "Retro Polaroid",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Clássico e atemporal, o formato Retro Polaroid é perfeito para qualquer ocasião.",
        minimum: 15,
        price: 1.50
    },
    {
        name: "Retro Polaroid Magnet",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Fotos retrô que também são ímãs! Perfeito para decorar qualquer superfície metálica.",
        minimum: 15,
        price: 2.00
    },
    {
        name: "Retro Polaroid Sticker",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Leve o visual retrô para o próximo nível com estes adesivos de fotos!",
        minimum: 15,
        price: 1.80
    },
    {
        name: "Bookmark",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Nunca perca sua página favorita com nossos elegantes marcadores de página.",
        price: 8.00
    },
    {
        name: "Personalized Bookmark",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Deixe sua marca com nossos marcadores de página personalizados! Ideal para presentes.",
        price: 15.00
    },
    {
        name: "Kindle Case",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Proteja seu Kindle com estilo! Nossas capas oferecem durabilidade e elegância.",
        price: 15.00
    },
    {
        name: "Digital Notebook",
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        description: "Anote todas as suas ideias em um notebook digital moderno e prático.",
        price: 20.00
    }
];