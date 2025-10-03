import { Cart, Product } from '../models/cart_model.js'
import { readJsonFile, writeJsonFile } from '../utils/json_file_operations.js';

const PATH = 'src/data/data.json';

export class CartController {

    static getAllCarts(req, res) {
        const DATA = readJsonFile(PATH)
        const cartsData = DATA["carts"];
        if (cartsData) return res.status(200).json({ data: cartsData })
    }

    static getCart(req, res) {
        const DATA = readJsonFile(PATH)
        // Logic to get cart details
        const id = req.body["id"];
        const cartData = DATA["carts"][id];
        if (cartData) {
            return res.status(200).json({ message: 'Cart details retrieved successfully', data: cartData });
        } res.status(404).json({ message: 'Carrito no encontrado' })
    }

    static addToCart(req, res) {
        const DATA = readJsonFile(PATH)
        // Logic to add item to cart
        const id = req.body["id"];
        const productID = req.body["productId"]
        const cartData = DATA["carts"][id];

        if (!cartData) return res.status(404).json({ message: 'Carrito no encontrado' })

        const productData = DATA["products"][productID]
        const newCartData = new Cart(cartData);

        newCartData.addToCart(productData)

        // Persistir el archivo completo, no solo el carrito
        DATA["carts"][id] = newCartData;
        writeJsonFile(PATH, DATA)

        res.status(200).json({ message: 'Item added to cart successfully' });
    }

    static removeFromCart(req, res) {
        const DATA = readJsonFile(PATH)
        // Logic to remove item from cart
        const id = req.body["id"];
        const productID = req.body["productId"]
        const cartData = DATA["carts"][id];

        if (!cartData) return res.status(404).json({ message: 'Carrito no encontrado' })

        const productData = DATA["products"][productID]
        const newCartData = new Cart(cartData);

        newCartData.removeFromCart(productData)

        // Persistir el archivo completo, no solo el carrito
        DATA["carts"][id] = newCartData;
        writeJsonFile(PATH, DATA)

        res.status(200).json({ message: 'Item removed from cart successfully' });
    }
} 

export default { CartController };