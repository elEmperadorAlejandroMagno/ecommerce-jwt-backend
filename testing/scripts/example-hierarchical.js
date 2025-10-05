import { addMultipleProducts } from './product-utils.js';

const hierarchicalProducts = [
    // Tecnología > Smartphones
    {
        name: "iPhone 15 Pro",
        description: "Smartphone con chip A17 Pro, cámara triple de 48MP",
        price: 999.99,
        type: "tecnologia/smartphone"
    },
    {
        name: "Samsung Galaxy S24 Ultra", 
        description: "Smartphone Android con S Pen, cámara de 200MP",
        price: 1199.99,
        type: "tecnologia/smartphone"
    },

    // Tecnología > Laptops
    {
        name: "MacBook Air M2",
        description: "Laptop ultraligera con chip M2 de Apple",
        price: 1199.99,
        type: "tecnologia/laptop"
    },
    {
        name: "Dell XPS 13",
        description: "Laptop premium con procesador Intel Core i7",
        price: 1299.99,
        type: "tecnologia/laptop"
    },

    // Ropa > Camisetas
    {
        name: "Camiseta Nike Dri-FIT",
        description: "Camiseta deportiva con tecnología Dri-FIT",
        price: 29.99,
        type: "ropa/camiseta"
    },
    {
        name: "Camiseta básica Uniqlo",
        description: "Camiseta de algodón 100% orgánico",
        price: 14.99,
        type: "ropa/camiseta"
    },

    // Ropa > Zapatos
    {
        name: "Nike Air Force 1",
        description: "Sneakers icónicos de cuero",
        price: 119.99,
        type: "ropa/zapatos"
    },
    {
        name: "Adidas Stan Smith",
        description: "Tenis minimalistas de cuero blanco",
        price: 89.99,
        type: "ropa/zapatos"
    },

    // Hogar > Muebles
    {
        name: "Sofá seccional IKEA KIVIK",
        description: "Sofá de esquina de 4 plazas",
        price: 899.99,
        type: "hogar/muebles"
    },
    {
        name: "Mesa de centro de roble",
        description: "Mesa de café de madera de roble macizo",
        price: 449.99,
        type: "hogar/muebles"
    },

    // Hogar > Electrodomésticos
    {
        name: "Refrigerador LG French Door",
        description: "Refrigerador de 28 pies cúbicos",
        price: 2199.99,
        type: "hogar/electrodomesticos"
    }
];

console.log('🏗️ EJEMPLO DE CATEGORÍAS JERÁRQUICAS');
console.log('===================================\n');

addMultipleProducts(hierarchicalProducts);

// Funciones de utilidad para trabajar con jerarquías
export function getMainCategory(type) {
    return type.split('/')[0];
}

export function getSubCategory(type) {
    return type.split('/')[1] || null;
}

export function getProductsByMainCategory(products, mainCategory) {
    return Object.values(products).filter(product => 
        getMainCategory(product.type) === mainCategory
    );
}

export function getProductsBySubCategory(products, subCategory) {
    return Object.values(products).filter(product => 
        getSubCategory(product.type) === subCategory
    );
}

// Ejemplo de uso de las funciones
console.log('\n🔍 FUNCIONES DE UTILIDAD:');
console.log('========================');
console.log('getMainCategory("tecnologia/smartphone") =>', getMainCategory("tecnologia/smartphone"));
console.log('getSubCategory("tecnologia/smartphone") =>', getSubCategory("tecnologia/smartphone"));