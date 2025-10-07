import ProductModel from '../models/local/productModel.js'
import { validateProduct, validatePartialProduct } from '../schema/validation/controller_validators.js'

export class ProductController {

  static getProducts(req, res) {
    ProductModel.getProducts(req, res)
  }

  static createProduct(req, res) {
    const result = validateProduct(req.body)
    if (!result.success) {
      return res.status(400).json({ message: 'Invalid product', issues: result.error.issues })
    }
    ProductModel.createProductWithData(res, result.data)
  }

  static getProductById(req, res) {
    ProductModel.getProductById(req, res)
  }

  static updateProduct(req, res) {
    const id = req.params.id
    const existing = ProductModel.findById(id)
    if (!existing) return res.status(404).json({ message: 'Product not found' })

    const result = validatePartialProduct(existing.category, req.body)
    if (!result.success) {
      return res.status(400).json({ message: 'Invalid product update', issues: result.error.issues })
    }

    ProductModel.updateProductWithPatch(res, id, result.data)
  }

  static deleteProduct(req, res) {
    ProductModel.deleteProduct(req, res)
  }
}
