import { addMultipleProducts } from './product-utils.js';

const homeProducts = [
    // Muebles de sala
    {
        name: "Sofá seccional IKEA KIVIK",
        description: "Sofá de esquina de 4 plazas, tapizado en tela Hillared, estructura de pino macizo, cojines extraíbles",
        price: 899.99,
        type: "sofa"
    },
    {
        name: "Mesa de centro de roble",
        description: "Mesa de café de madera de roble macizo, acabado natural, diseño minimalista escandinavo, 120x60cm",
        price: 449.99,
        type: "mesa"
    },
    {
        name: "Estantería Hemnes IKEA",
        description: "Librería de pino macizo con 5 estantes ajustables, acabado blanco, 90x197cm, perfecta para libros y decoración",
        price: 179.99,
        type: "estanteria"
    },

    // Muebles de dormitorio
    {
        name: "Cama Queen con cabecera acolchada",
        description: "Cama matrimonial con cabecera tapizada en tela gris, estructura de madera, diseño elegante y moderno",
        price: 699.99,
        type: "cama"
    },
    {
        name: "Cómoda 6 cajones",
        description: "Cómoda de madera con 6 cajones amplios, manijas metálicas, perfecta para organizar ropa y accesorios",
        price: 329.99,
        type: "comoda"
    },
    {
        name: "Espejo de pie con marco dorado",
        description: "Espejo de cuerpo entero 50x150cm, marco metálico dorado, base estable, ideal para dormitorio o vestidor",
        price: 149.99,
        type: "espejo"
    },

    // Electrodomésticos de cocina
    {
        name: "Refrigerador LG French Door",
        description: "Refrigerador de 28 pies cúbicos, tecnología inverter, dispensador de agua y hielo, eficiencia energética A+",
        price: 2199.99,
        type: "refrigerador"
    },
    {
        name: "Microondas Samsung 1.2 cu ft",
        description: "Horno microondas de acero inoxidable, 1200W, plato giratorio de cerámica, 10 niveles de potencia",
        price: 159.99,
        type: "microondas"
    },
    {
        name: "Cafetera Nespresso Vertuo",
        description: "Máquina de café con tecnología Centrifusion, compatible con cápsulas Vertuo, espuma cremosa automática",
        price: 199.99,
        type: "cafetera"
    },
    {
        name: "Licuadora Vitamix A3500",
        description: "Licuadora de alta velocidad, motor de 2.2 HP, vaso Tritan de 64oz, controles táctiles, 5 programas preestablecidos",
        price: 529.99,
        type: "licuadora"
    },

    // Decoración
    {
        name: "Lámpara de pie moderna",
        description: "Lámpara de piso con trípode de madera, pantalla de tela beige, luz LED regulable, altura 150cm",
        price: 129.99,
        type: "lampara"
    },
    {
        name: "Cuadro abstracto canvas",
        description: "Arte de pared impreso en canvas de alta calidad, marco flotante incluido, 80x60cm, colores neutros",
        price: 89.99,
        type: "cuadro"
    },
    {
        name: "Alfombra persa vintage",
        description: "Alfombra de área 200x300cm, diseño persa tradicional, colores tierra, fibra sintética resistente",
        price: 299.99,
        type: "alfombra"
    },
    {
        name: "Plantas artificiales set x3",
        description: "Set de 3 plantas artificiales realistas: monstera, ficus y eucalipto, macetas de cerámica incluidas",
        price: 79.99,
        type: "plantas"
    },

    // Textiles para hogar
    {
        name: "Juego de sábanas algodón egipcio",
        description: "Set completo Queen: sábana, fundas de almohada, algodón egipcio 400 hilos, suave y transpirable",
        price: 149.99,
        type: "sabanas"
    },
    {
        name: "Edredón nórdico plumas de ganso",
        description: "Edredón Queen relleno 90% plumas de ganso, funda de algodón percal, cálido y ligero",
        price: 249.99,
        type: "edredon"
    },
    {
        name: "Cojines decorativos set x4",
        description: "Set de 4 cojines 45x45cm, fundas de terciopelo en tonos neutros, relleno de fibra sintética",
        price: 59.99,
        type: "cojines"
    },

    // Organización y almacenamiento
    {
        name: "Organizador de closet modular",
        description: "Sistema de organización con estantes, barras y cajones, instalación sin herramientas, expandible",
        price: 199.99,
        type: "organizador"
    },
    {
        name: "Canastas de mimbre set x3",
        description: "Set de 3 canastas tejidas en diferentes tamaños, con manijas, perfectas para almacenaje decorativo",
        price: 69.99,
        type: "canastas"
    },

    // Artículos de limpieza y mantenimiento
    {
        name: "Aspiradora robot Roomba i7+",
        description: "Aspiradora robótica con mapeo inteligente, auto-vaciado, compatible con Alexa y Google Assistant",
        price: 799.99,
        type: "aspiradora"
    },
    {
        name: "Purificador de aire Dyson",
        description: "Purificador y ventilador 2 en 1, filtro HEPA, sensor de calidad de aire, control por app",
        price: 549.99,
        type: "purificador"
    },

    // Jardín y exterior
    {
        name: "Set de muebles de patio",
        description: "Conjunto de ratán sintético: mesa, 4 sillas y cojines resistentes al agua, ideal para exterior",
        price: 899.99,
        type: "muebles_exterior"
    },
    {
        name: "Parrilla a gas Weber",
        description: "Parrilla de 3 quemadores, parrillas de hierro fundido, termómetro integrado, carrito con ruedas",
        price: 449.99,
        type: "parrilla"
    },
    {
        name: "Macetas de cerámica set x5",
        description: "Set de macetas de diferentes tamaños con platillos, drenaje incluido, diseño moderno minimalista",
        price: 89.99,
        type: "macetas"
    }
];

console.log('🏠 AGREGANDO PRODUCTOS DE HOGAR 🏠');
console.log('=================================\n');

addMultipleProducts(homeProducts);