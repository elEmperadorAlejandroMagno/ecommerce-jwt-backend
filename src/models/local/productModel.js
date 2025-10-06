import { randomUUID as rUUID } from 'crypto';
import { readJsonFile, writeJsonFile } from '../../utils/json_file_operations.js';
import { Product } from '../../schema/class/product.js';

const PATH = 'src/data/data.json';

export class ProductModel {
  static getProducts(req, res) {
    try {
    const DATA = readJsonFile(PATH);
    const products = DATA.products || {};
    res.status(200).json({ data: products });
    } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  }
  static createProduct(req, res) {
    try {
      const { name, description = '', price } = req.body;
      
      // Validar campos requeridos
      if (!name || !price) {
        return res.status(400).json({ 
          message: 'Name and price are required fields' 
        });
      }
      
      const productID = rUUID();
      const DATA = readJsonFile(PATH);
      
      // Asegurar que existe la sección products
      if (!DATA.products) {
        DATA.products = {};
      }
      
      // Crear nuevo producto usando la clase Product
      const newProduct = new Product(productID, name, description, parseFloat(price));
      
      // Agregar timestamp manualmente ya que no está en el constructor
      newProduct.timestamp = new Date().toISOString();
      
      // Guardar en la estructura de datos
      DATA.products[productID] = newProduct;
      
      // Guardar el archivo completo
      writeJsonFile(PATH, DATA);
      
      res.status(201).json({ 
        message: 'Product created successfully', 
        product: DATA.products[productID] 
      });
    } catch (error) {
      res.status(500).json({ message: 'Error creating product', error: error.message });
    }
  }
  static getProductById(req, res) {
    try {
      const productID = req.params.id;
      const DATA = readJsonFile(PATH);
      
      const product = DATA.products?.[productID];
      if (product) {
        res.status(200).json({ data: product });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
  }
  static updateProduct(req, res) {
    try {
      const productID = req.params.id;
      const { name, description, price } = req.body;
      
      const DATA = readJsonFile(PATH);
      
      if (!DATA.products?.[productID]) {
        return res.status(404).json({ message: 'Product not found' });
      }
      
      // Obtener el producto existente
      const existingProduct = DATA.products[productID];
      
      // Crear una nueva instancia de Product con los datos actuales
      const updatedProduct = new Product(
        existingProduct.productID || productID,
        existingProduct.name,
        existingProduct.description || '',
        existingProduct.price
      );
      
      // Usar los métodos de la clase para actualizar
      if (name) {
        updatedProduct.updateProductName(name);
      }
      if (description !== undefined) {
        // Para description usamos asignación directa ya que el método hace += 
        updatedProduct.updateProductDescription(description);
      }
      if (price) {
        updatedProduct.updateProductPrice(parseFloat(price));
      }
      
      // Mantener timestamp actualizado
      updatedProduct.timestamp = new Date().toISOString();
      
      // Guardar el producto actualizado
      DATA.products[productID] = updatedProduct;
      
      writeJsonFile(PATH, DATA);
      
      res.status(200).json({ 
        message: 'Product updated successfully', 
        product: DATA.products[productID] 
      });
    } catch (error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
    }
  }
  static deleteProduct(req, res) {
    try {
      const productID = req.params.id;
      const DATA = readJsonFile(PATH);
      
      if (!DATA.products?.[productID]) {
        return res.status(404).json({ message: 'Product not found' });
      }
      
      delete DATA.products[productID];
      writeJsonFile(PATH, DATA);
      
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  }
}

export default ProductModel;
