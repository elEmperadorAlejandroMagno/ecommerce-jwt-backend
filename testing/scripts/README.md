# Scripts de Productos

Esta carpeta contiene scripts para poblar la base de datos con productos de ejemplo usando la clase `Product` del sistema.

## 📁 Archivos

### Scripts principales
- `populate-products.js` - Script principal que ejecuta todos los scripts de productos
- `list-products.js` - Lista todos los productos del inventario con estadísticas

### Scripts por categoría
- `add-electronics.js` - Agrega productos electrónicos (laptops, smartphones, componentes PC, etc.)
- `add-clothing.js` - Agrega productos de ropa (camisetas, zapatos, accesorios, etc.)
- `add-home.js` - Agrega productos de hogar (muebles, electrodomésticos, decoración, etc.)

### Utilidades
- `product-utils.js` - Funciones de utilidad para manejo de productos

## 🚀 Uso

### Agregar todos los productos
```bash
node scripts/populate-products.js
```

### Agregar productos por categoría
```bash
# Solo electrónicos
node scripts/add-electronics.js

# Solo ropa
node scripts/add-clothing.js

# Solo hogar
node scripts/add-home.js
```

### Ver el inventario
```bash
node scripts/list-products.js
```

## 📊 Productos incluidos

### Electrónicos (~16 productos)
- **Laptops**: MacBook Air M2, Dell XPS 13, Lenovo ThinkPad X1
- **Smartphones**: iPhone 15 Pro, Samsung Galaxy S24 Ultra, Google Pixel 8
- **Tablets**: iPad Pro, Samsung Galaxy Tab S9
- **Componentes PC**: NVIDIA RTX 4070, AMD Ryzen 7, Corsair RAM
- **Periféricos**: Logitech Mouse, Keychron Teclado, Sony Audífonos
- **Almacenamiento**: Samsung SSD, WD HDD

### Ropa (~20 productos)
- **Camisetas y polos**: Nike Dri-FIT, Uniqlo básica, Ralph Lauren polo
- **Pantalones**: Levi's 501, Dockers chinos, Adidas joggers
- **Zapatos**: Nike Air Force 1, Adidas Stan Smith, Converse, Dr. Martens
- **Ropa formal**: Hugo Boss camisa, Calvin Klein traje, corbata italiana
- **Deportiva**: Champion sudadera, Under Armour shorts, Lululemon leggings
- **Accesorios**: Gorras, cinturones, bufandas, ropa interior

### Hogar (~21 productos)
- **Muebles**: Sofá IKEA, mesa de roble, estantería, cama Queen
- **Electrodomésticos**: Refrigerador LG, microondas Samsung, cafetera Nespresso
- **Decoración**: Lámparas, cuadros, alfombras, plantas artificiales
- **Textiles**: Sábanas egipcias, edredón nórdico, cojines decorativos
- **Organización**: Organizadores de closet, canastas de mimbre
- **Limpieza**: Roomba, purificador Dyson
- **Exterior**: Muebles de patio, parrilla Weber, macetas

## 🔧 Personalización

Para agregar más productos, puedes:

1. **Editar los scripts existentes** y agregar productos al array correspondiente
2. **Crear nuevos scripts** usando la misma estructura
3. **Usar las funciones de utilidad** para operaciones individuales:

```javascript
import { addProduct, addMultipleProducts } from './product-utils.js';

// Agregar un producto individual
addProduct("Mi Producto", "Descripción", 99.99, "categoria");

// Agregar múltiples productos
addMultipleProducts([
    {
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        type: "categoria"
    },
    // ... más productos
]);
```

## 📋 Estructura de un producto

Cada producto sigue la estructura de la clase `Product`:

```javascript
{
    name: "Nombre del producto",           // string
    description: "Descripción detallada",  // string
    price: 99.99,                         // number
    type: "categoria"                     // string
}
```

Los productos se almacenan en `src/data/data.json` bajo la clave `products`.

## ✅ Verificación

Después de ejecutar los scripts, puedes verificar que los productos se agregaron correctamente:

1. Revisando el archivo `src/data/data.json`
2. Ejecutando `node scripts/list-products.js`
3. Usando los endpoints de tu API para consultar productos