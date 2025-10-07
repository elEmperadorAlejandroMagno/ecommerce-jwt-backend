import { randomUUID as rUUID } from 'crypto';
import { readJsonFile, writeJsonFile } from '../../utils/json_file_operations.js';

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
  // Crear con data ya validada por el controlador
  static createProductWithData(res, data) {
    try {
      const productID = rUUID();
      const DATA = readJsonFile(PATH);
      if (!DATA.products) DATA.products = {};

      const toSave = {
        ...data,
        productID,
        timestamp: new Date().toISOString(),
      };

      DATA.products[productID] = toSave;
      writeJsonFile(PATH, DATA);

      res.status(201).json({
        message: 'Product created successfully',
        product: toSave,
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
  // Buscar por id (para uso en el controlador)
  static findById(productID) {
    try {
      const DATA = readJsonFile(PATH);
      return DATA.products?.[productID] || null;
    } catch (_) {
      return null;
    }
  }

  // Actualizar con patch ya validado por el controlador
  static updateProductWithPatch(res, productID, patch) {
    try {
      const DATA = readJsonFile(PATH);
      if (!DATA.products?.[productID]) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const existing = DATA.products[productID];
      const merged = {
        ...existing,
        ...patch,
        timestamp: new Date().toISOString(),
        productID: existing.productID, // preserva
        category: existing.category,   // no se cambia por patch
      };

      DATA.products[productID] = merged;
      writeJsonFile(PATH, DATA);

      res.status(200).json({
        message: 'Product updated successfully',
        product: merged,
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
