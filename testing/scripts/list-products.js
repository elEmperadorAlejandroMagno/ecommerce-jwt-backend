#!/usr/bin/env node

import { listProducts, getProducts } from './product-utils.js';

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m'
};

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function main() {
    log('', colors.bright);
    log('📋 INVENTARIO DE PRODUCTOS', colors.cyan);
    log('========================', colors.cyan);
    log('');
    
    const products = getProducts();
    const productArray = Object.values(products);
    
    if (productArray.length === 0) {
        log('📦 No hay productos en el inventario', colors.yellow);
        log('');
        log('Para agregar productos, ejecuta:', colors.yellow);
        log('node scripts/populate-products.js', colors.bright);
        return;
    }
    
    // Mostrar estadísticas por tipo
    const typeStats = {};
    let totalValue = 0;
    
    productArray.forEach(product => {
        if (!typeStats[product.type]) {
            typeStats[product.type] = { count: 0, value: 0 };
        }
        typeStats[product.type].count++;
        typeStats[product.type].value += product.price;
        totalValue += product.price;
    });
    
    log(`📊 ESTADÍSTICAS`, colors.green);
    log(`Total de productos: ${productArray.length}`, colors.bright);
    log(`Valor total del inventario: $${totalValue.toFixed(2)}`, colors.bright);
    log('');
    
    log('📈 Por categorías:', colors.green);
    Object.entries(typeStats)
        .sort(([,a], [,b]) => b.count - a.count)
        .forEach(([type, stats]) => {
            log(`  ${type}: ${stats.count} productos ($${stats.value.toFixed(2)})`);
        });
    
    log('');
    log('─'.repeat(60));
    log('');
    
    // Listar todos los productos
    listProducts();
}

main();