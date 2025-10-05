import { addMultipleProducts } from './product-utils.js';

const electronicsProducts = [
    // Laptops
    {
        name: "MacBook Air M2",
        description: "Laptop ultraligera con chip M2 de Apple, pantalla Liquid Retina de 13.6 pulgadas, 8GB RAM, 256GB SSD",
        price: 1199.99,
        type: "laptop"
    },
    {
        name: "Dell XPS 13",
        description: "Laptop premium con procesador Intel Core i7, 16GB RAM, 512GB SSD, pantalla InfinityEdge 4K",
        price: 1299.99,
        type: "laptop"
    },
    {
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Laptop empresarial con Intel Core i5, 8GB RAM, 256GB SSD, certificación MIL-STD-810G",
        price: 1449.99,
        type: "laptop"
    },

    // Smartphones
    {
        name: "iPhone 15 Pro",
        description: "Smartphone con chip A17 Pro, cámara triple de 48MP, pantalla Super Retina XDR de 6.1 pulgadas, 128GB",
        price: 999.99,
        type: "smartphone"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        description: "Smartphone Android con S Pen, cámara de 200MP, pantalla Dynamic AMOLED 2X de 6.8 pulgadas, 256GB",
        price: 1199.99,
        type: "smartphone"
    },
    {
        name: "Google Pixel 8",
        description: "Smartphone con Google Tensor G3, cámara computacional avanzada, 6.2 pulgadas, 128GB",
        price: 699.99,
        type: "smartphone"
    },

    // Tablets
    {
        name: "iPad Pro 11 pulgadas",
        description: "Tablet con chip M2, pantalla Liquid Retina de 11 pulgadas, compatible con Apple Pencil, 128GB WiFi",
        price: 799.99,
        type: "tablet"
    },
    {
        name: "Samsung Galaxy Tab S9",
        description: "Tablet Android con S Pen incluido, pantalla AMOLED de 11 pulgadas, 128GB, resistente al agua",
        price: 649.99,
        type: "tablet"
    },

    // Componentes de PC
    {
        name: "NVIDIA GeForce RTX 4070",
        description: "Tarjeta gráfica con arquitectura Ada Lovelace, 12GB GDDR6X, Ray Tracing de 3ra generación",
        price: 599.99,
        type: "gpu"
    },
    {
        name: "AMD Ryzen 7 7700X",
        description: "Procesador de 8 núcleos, 16 hilos, frecuencia base 4.5GHz, socket AM5, arquitectura Zen 4",
        price: 329.99,
        type: "cpu"
    },
    {
        name: "Corsair Vengeance LPX 32GB",
        description: "Memoria RAM DDR4-3200, kit de 2x16GB, baja latencia, disipador de aluminio",
        price: 149.99,
        type: "ram"
    },

    // Periféricos
    {
        name: "Logitech MX Master 3S",
        description: "Mouse inalámbrico ergonómico, sensor 8K DPI, scroll magnético, batería de 70 días",
        price: 99.99,
        type: "mouse"
    },
    {
        name: "Keychron K8 Pro",
        description: "Teclado mecánico inalámbrico 87 teclas, switches Gateron Pro, hotswap, layout en español",
        price: 149.99,
        type: "teclado"
    },
    {
        name: "Sony WH-1000XM5",
        description: "Audífonos inalámbricos con cancelación de ruido adaptativa, 30h de batería, llamadas HD",
        price: 399.99,
        type: "audifonos"
    },

    // Almacenamiento
    {
        name: "Samsung 980 PRO 1TB",
        description: "SSD NVMe M.2, velocidad de lectura hasta 7000 MB/s, interfaz PCIe 4.0",
        price: 179.99,
        type: "ssd"
    },
    {
        name: "WD Black 2TB HDD",
        description: "Disco duro interno SATA 7200 RPM, optimizado para gaming, cache de 64MB",
        price: 89.99,
        type: "hdd"
    }
];

console.log('🔌 AGREGANDO PRODUCTOS ELECTRÓNICOS 🔌');
console.log('=====================================\n');

addMultipleProducts(electronicsProducts);