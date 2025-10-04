import ProductModel from '../models/local/productModel.js'

export class ProductController {

  static getProducts(req, res) {
    ProductModel.getProducts(req, res)
  }

  static createProduct(req, res) {
    ProductModel.createProduct(req,res)
  }

  static getProductById(req, res) {
    ProductModel.getProductById(req, res)
  }

  static updateProduct(req, res) {
    ProductModel.updateProduct(req, res)
  }

  static deleteProduct(req, res) {
    ProductModel.deleteProduct(req, res)
  }
}
