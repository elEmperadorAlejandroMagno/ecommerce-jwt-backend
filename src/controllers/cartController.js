import CartModel from '../models/local/cartModel.js'

export class CartController {

    static getAllCarts(req, res) {
        CartModel.getAllCarts(req, res)
    }
    static getCartById(req, res) {
        CartModel.getCart(req, res)
    }
    static addToCart(req, res) {
        CartModel.addToCart(req, res)
    }
    static removeFromCart(req, res) {
        CartModel.removeFromCart(req, res)
    }
    static removeUnitFromCart(req, res) {
        CartModel.removeUnitFromCart(req, res)
    }
    static deleteCart(req, res) {  
        CartModel.deleteCart(req, res)
    }
} 

export default { CartController };