import '../data/products.json';
import { randomUUID as rUUID } from 'crypto';

export function getProducts(req, res) {
  next();
}

export function createProduct(req, res) {
  const { name, description, price } = req.body;
  const productID = rUUID();
  next();
}

export function getProductById(req, res) {
  const productID = req.params.id;
  next();
}

export function updateProduct(req, res) {
  const productID = req.params.id;
  const { name, description, price } = req.body;
  next();
}

export function deleteProduct(req, res) {
  const productID = req.params.id;
  next();
}
