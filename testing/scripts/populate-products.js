#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function runScript(scriptPath) {
    return new Promise((resolve, reject) => {
        const child = spawn('node', [scriptPath], { stdio: 'inherit' });
        
        child.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Script ${scriptPath} failed with code ${code}`));
            }
        });
    });
}

async function main() {
    log('', colors.bright);
    log('🛒 POBLANDO BASE DE DATOS DE PRODUCTOS 🛒', colors.cyan);
    log('=========================================', colors.cyan);
    log('');
    
    const scripts = [
        { 
            path: join(__dirname, 'add-electronics.js'), 
            name: 'Productos Electrónicos',
            emoji: '🔌'
        },
        { 
            path: join(__dirname, 'add-clothing.js'), 
            name: 'Productos de Ropa',
            emoji: '👕'
        },
        { 
            path: join(__dirname, 'add-home.js'), 
            name: 'Productos de Hogar',
            emoji: '🏠'
        }
    ];

    let successCount = 0;
    let totalProducts = 0;

    for (const script of scripts) {
        try {
            log(`${script.emoji} Ejecutando: ${script.name}...`, colors.yellow);
            log('');
            
            await runScript(script.path);
            successCount++;
            
            log('');
            log(`✅ ${script.name} agregados exitosamente!`, colors.green);
            log('─'.repeat(50));
            log('');
            
        } catch (error) {
            log(`❌ Error al ejecutar ${script.name}:`, colors.red);
            log(error.message, colors.red);
            log('─'.repeat(50));
            log('');
        }
    }

    // Resumen final
    log('', colors.bright);
    log('📊 RESUMEN FINAL', colors.magenta);
    log('===============', colors.magenta);
    log(`Scripts ejecutados exitosamente: ${successCount}/${scripts.length}`, colors.cyan);
    
    if (successCount === scripts.length) {
        log('');
        log('🎉 ¡Todos los productos han sido agregados exitosamente!', colors.green);
        log('');
        log('Para verificar los productos agregados, puedes ejecutar:', colors.yellow);
        log('node scripts/list-products.js', colors.bright);
    } else {
        log('');
        log('⚠️ Algunos scripts fallaron. Revisa los errores arriba.', colors.yellow);
    }
    
    log('');
}

// Ejecutar el script principal
main().catch((error) => {
    log('❌ Error fatal:', colors.red);
    log(error.message, colors.red);
    process.exit(1);
});