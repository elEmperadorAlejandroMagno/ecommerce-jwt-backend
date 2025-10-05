import { Product } from '../../src/schema/cart_model.js';
import { readJsonFile, writeJsonFile } from '../../src/utils/json_file_operations.js';
import { randomUUID } from 'crypto';

const DATA_PATH = 'src/data/data.json';

/**
 * Lee los productos existentes del archivo JSON
 */
export function getProducts() {
    try {
        const data = readJsonFile(DATA_PATH);
        return data.products || {};
    } catch (error) {
        console.error('Error reading products:', error);
        return {};
    }
}

/**
 * Guarda los productos en el archivo JSON
 */
export function saveProducts(products) {
    try {
        const data = readJsonFile(DATA_PATH);
        data.products = products;
        writeJsonFile(DATA_PATH, data);
        console.log('✅ Productos guardados exitosamente');
    } catch (error) {
        console.error('❌ Error saving products:', error);
    }
}

/**
 * Agrega un producto al inventario
 */
export function addProduct(name, description, price, type = "otro") {
    const productId = randomUUID();
    const product = new Product(productId, name, description, price, type);
    
    const products = getProducts();
    products[productId] = product;
    
    saveProducts(products);
    console.log(`✨ Producto agregado: ${name} - $${price}`);
    
    return { id: productId, product };
}

/**
 * Agrega múltiples productos de una vez
 */
export function addMultipleProducts(productList) {
    const products = getProducts();
    let addedCount = 0;
    
    console.log('🚀 Agregando múltiples productos...\n');
    
    productList.forEach(({ name, description, price, type }) => {
        const productId = randomUUID();
        const product = new Product(productId, name, description, price, type);
        products[productId] = product;
        console.log(`   ✨ ${name} - $${price} (${type})`);
        addedCount++;
    });
    
    saveProducts(products);
    console.log(`\n✅ Se agregaron ${addedCount} productos exitosamente!`);
}

/**
 * Lista todos los productos
 */
export function listProducts() {
    const products = getProducts();
    const productArray = Object.values(products);
    
    if (productArray.length === 0) {
        console.log('📦 No hay productos en el inventario');
        return;
    }
    
    console.log(`📦 Productos en inventario (${productArray.length} total):\n`);
    
    productArray.forEach(product => {
        console.log(`🛍️  ${product.name}`);
        console.log(`   ID: ${product.productID}`);
        console.log(`   Precio: $${product.price}`);
        console.log(`   Tipo: ${product.type}`);
        console.log(`   Descripción: ${product.description}`);
        console.log('   ---');
    });
}

export default {
    getProducts,
    saveProducts,
    addProduct,
    addMultipleProducts,
    listProducts
};