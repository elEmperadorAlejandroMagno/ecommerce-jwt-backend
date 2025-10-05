// Versión extendida de la clase Product con soporte para categorías jerárquicas

export class EnhancedProduct {
    constructor(id, name, description = "", price, category, subCategory = null, tags = []) {
        this.productID = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;          // Categoría principal: "tecnologia", "ropa", "hogar"
        this.subCategory = subCategory;    // Subcategoría: "smartphone", "camiseta", "muebles"
        this.type = subCategory ? `${category}/${subCategory}` : category;  // Para compatibilidad
        this.tags = tags;                  // Array de etiquetas adicionales
        this.createdAt = new Date();
    }

    // Métodos de actualización existentes
    updateProductName(newValue) {
        this.name = newValue;
    }

    updateProductPrice(newValue) {
        this.price = newValue;
    }

    updateProductDescription(newValue = "") {
        this.description += newValue;
    }

    // Métodos nuevos para categorías
    updateCategory(newCategory, newSubCategory = null) {
        this.category = newCategory;
        this.subCategory = newSubCategory;
        this.type = newSubCategory ? `${newCategory}/${newSubCategory}` : newCategory;
    }

    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    }

    removeTag(tag) {
        this.tags = this.tags.filter(t => t !== tag);
    }

    // Métodos de consulta
    hasTag(tag) {
        return this.tags.includes(tag);
    }

    isInCategory(category) {
        return this.category === category;
    }

    isInSubCategory(subCategory) {
        return this.subCategory === subCategory;
    }

    // Método para obtener la jerarquía completa
    getCategoryPath() {
        return this.subCategory ? `${this.category}/${this.subCategory}` : this.category;
    }
}

// Funciones de utilidad para trabajar con productos jerárquicos
export class ProductCatalog {
    constructor(products = {}) {
        this.products = products;
    }

    // Obtener productos por categoría principal
    getByCategory(category) {
        return Object.values(this.products).filter(product => 
            product.category === category
        );
    }

    // Obtener productos por subcategoría
    getBySubCategory(subCategory) {
        return Object.values(this.products).filter(product => 
            product.subCategory === subCategory
        );
    }

    // Obtener productos por tag
    getByTag(tag) {
        return Object.values(this.products).filter(product => 
            product.tags && product.tags.includes(tag)
        );
    }

    // Obtener estructura de categorías
    getCategoryStructure() {
        const structure = {};
        
        Object.values(this.products).forEach(product => {
            if (!structure[product.category]) {
                structure[product.category] = {
                    count: 0,
                    subCategories: {},
                    totalValue: 0
                };
            }
            
            structure[product.category].count++;
            structure[product.category].totalValue += product.price;
            
            if (product.subCategory) {
                if (!structure[product.category].subCategories[product.subCategory]) {
                    structure[product.category].subCategories[product.subCategory] = {
                        count: 0,
                        totalValue: 0
                    };
                }
                structure[product.category].subCategories[product.subCategory].count++;
                structure[product.category].subCategories[product.subCategory].totalValue += product.price;
            }
        });
        
        return structure;
    }

    // Buscar productos por texto
    search(query) {
        const lowerQuery = query.toLowerCase();
        return Object.values(this.products).filter(product => 
            product.name.toLowerCase().includes(lowerQuery) ||
            product.description.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            (product.subCategory && product.subCategory.toLowerCase().includes(lowerQuery)) ||
            (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
        );
    }
}

// Ejemplo de uso
const exampleProducts = {
    "1": new EnhancedProduct("1", "iPhone 15 Pro", "Smartphone premium", 999.99, "tecnologia", "smartphone", ["apple", "5g", "premium"]),
    "2": new EnhancedProduct("2", "Camiseta Nike", "Camiseta deportiva", 29.99, "ropa", "camiseta", ["deportiva", "nike", "algodon"]),
    "3": new EnhancedProduct("3", "Sofá IKEA", "Sofá cómodo", 699.99, "hogar", "muebles", ["ikea", "salon", "comodo"])
};

console.log('📦 EJEMPLO DE PRODUCTO MEJORADO:');
console.log('================================');

const catalog = new ProductCatalog(exampleProducts);

console.log('Estructura de categorías:');
console.log(JSON.stringify(catalog.getCategoryStructure(), null, 2));

console.log('\nProductos en categoría "tecnologia":');
console.log(catalog.getByCategory("tecnologia"));

console.log('\nProductos con tag "premium":');
console.log(catalog.getByTag("premium"));

export default { EnhancedProduct, ProductCatalog };