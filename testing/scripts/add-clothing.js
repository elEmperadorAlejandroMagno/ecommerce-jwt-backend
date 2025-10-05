import { addMultipleProducts } from './product-utils.js';

const clothingProducts = [
    // Camisetas
    {
        name: "Camiseta Nike Dri-FIT",
        description: "Camiseta deportiva con tecnología Dri-FIT, tela transpirable, ajuste atlético, disponible en varios colores",
        price: 29.99,
        type: "camiseta"
    },
    {
        name: "Camiseta básica Uniqlo",
        description: "Camiseta de algodón 100% orgánico, corte regular, perfecta para uso diario, tacto suave",
        price: 14.99,
        type: "camiseta"
    },
    {
        name: "Polo Ralph Lauren",
        description: "Camisa polo clásica de algodón piqué, bordado del jinete, ajuste regular, elegante y casual",
        price: 89.99,
        type: "polo"
    },

    // Pantalones
    {
        name: "Jeans Levi's 501",
        description: "Jeans clásicos de corte recto, 100% algodón, diseño atemporal, cintura media",
        price: 79.99,
        type: "jeans"
    },
    {
        name: "Chinos Dockers Alpha",
        description: "Pantalones chinos ajustados, mezcla de algodón y elastano, perfectos para look smart-casual",
        price: 59.99,
        type: "pantalon"
    },
    {
        name: "Joggers Adidas",
        description: "Pantalones deportivos con puños elásticos, tecnología Climalite, cómodos para entrenar",
        price: 49.99,
        type: "joggers"
    },

    // Zapatos
    {
        name: "Nike Air Force 1",
        description: "Sneakers icónicos de cuero, suela de goma resistente, plantilla acolchada, estilo urbano clásico",
        price: 119.99,
        type: "zapatos"
    },
    {
        name: "Adidas Stan Smith",
        description: "Tenis minimalistas de cuero blanco, detalles verdes, suela de goma, diseño atemporal",
        price: 89.99,
        type: "zapatos"
    },
    {
        name: "Converse Chuck Taylor All Star",
        description: "Zapatillas de lona clásicas, suela de goma vulcanizada, estilo vintage, disponibles en múltiples colores",
        price: 64.99,
        type: "zapatos"
    },
    {
        name: "Dr. Martens 1460",
        description: "Botas de cuero con cordones, suela AirWair resistente, plantilla acolchada, estilo rebelde",
        price: 179.99,
        type: "botas"
    },

    // Ropa formal
    {
        name: "Camisa Hugo Boss",
        description: "Camisa de vestir de algodón premium, corte slim fit, cuello clásico, perfecta para oficina",
        price: 149.99,
        type: "camisa"
    },
    {
        name: "Traje Calvin Klein",
        description: "Traje de dos piezas, lana merino, corte moderno, ideal para eventos formales y negocios",
        price: 599.99,
        type: "traje"
    },
    {
        name: "Corbata de seda italiana",
        description: "Corbata 100% seda, patrón clásico, fabricada en Italia, ancho tradicional de 8.5cm",
        price: 79.99,
        type: "corbata"
    },

    // Ropa deportiva
    {
        name: "Sudadera Champion",
        description: "Sudadera con capucha, mezcla algodón-poliéster, logo bordado, interior afelpado",
        price: 69.99,
        type: "sudadera"
    },
    {
        name: "Shorts Under Armour",
        description: "Shorts deportivos con tecnología HeatGear, secado rápido, cintura elástica con cordón",
        price: 34.99,
        type: "shorts"
    },
    {
        name: "Leggings Lululemon",
        description: "Mallas deportivas de alta compresión, tela Luon, cintura alta, perfectas para yoga y running",
        price: 118.99,
        type: "leggings"
    },

    // Accesorios
    {
        name: "Gorra New Era 59FIFTY",
        description: "Gorra de béisbol ajustada, corona estructurada, visera plana, logo bordado en 3D",
        price: 39.99,
        type: "gorra"
    },
    {
        name: "Cinturón de cuero Fossil",
        description: "Cinturón de cuero genuino, hebilla metálica, diseño reversible negro/marrón, estilo clásico",
        price: 49.99,
        type: "cinturon"
    },
    {
        name: "Bufanda de lana",
        description: "Bufanda tejida 100% lana merino, suave y cálida, patrón de espiga, perfecta para invierno",
        price: 89.99,
        type: "bufanda"
    },

    // Ropa interior y calcetines
    {
        name: "Pack Calvin Klein Underwear",
        description: "Set de 3 boxers de algodón elástico, cintura con logo, ajuste cómodo, colores básicos",
        price: 39.99,
        type: "ropa_interior"
    },
    {
        name: "Calcetines Stance",
        description: "Calcetines de algodón peinado, diseños únicos, refuerzo en talón y punta, talla universal",
        price: 16.99,
        type: "calcetines"
    }
];

console.log('👕 AGREGANDO PRODUCTOS DE ROPA 👕');
console.log('=================================\n');

addMultipleProducts(clothingProducts);