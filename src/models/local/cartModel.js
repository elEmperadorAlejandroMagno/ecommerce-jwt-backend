import { Cart } from '../../schema/class/cart.js'
import { readJsonFile, writeJsonFile } from '../../utils/json_file_operations.js';

const PATH = 'src/data/data.json';

export class CartModel {

    static getAllCarts(req, res) {
      try {
        const DATA = readJsonFile(PATH)
        const cartsData = DATA["carts"];
        if (cartsData) return res.status(200).json({ data: cartsData })
      } catch {
        return res.status(500).json({ message: "Error al intentar obtener todos los carritos" })
      }
    }

    static getCart(req, res) {
      try {
        const DATA = readJsonFile(PATH)
        // Logic to get cart details
        const id = req.params.id;
        const cartData = DATA["carts"][id];
        if (cartData) {
            return res.status(200).json({ message: 'Cart details retrieved successfully', data: cartData });
        } res.status(404).json({ message: 'Carrito no encontrado' })
      } catch {
        return res.status(500).json({ message: "Error al intentar obtener el carrito" })
      }
    }

    static addToCart(req, res) {
      try {
        const DATA = readJsonFile(PATH)
        // Logic to add item to cart
        const id = req.params.id;
        const { productId, quantity } = req.body;
        
        // Validar que productId y quantity estén presentes
        if (!productId || quantity == null) {
          return res.status(400).json({ message: 'productId y quantity son requeridos' });
        }
        
        const cartData = DATA["carts"][id];
        
        // Obtener información del producto para el precio
        const productData = DATA["products"][productId];
        if (!productData) return res.status(404).json({ message: 'Producto no encontrado' });

        if (!cartData) return res.status(404).json({ message: 'Carrito no encontrado' })

        const newCartData = new Cart(cartData.products, cartData.total);

        newCartData.addToCart(productId, quantity, productData.price);

        // Persistir el archivo completo, no solo el carrito
        DATA["carts"][id] = newCartData;
        writeJsonFile(PATH, DATA)

        res.status(200).json({ message: 'Item added to cart successfully' });
      } catch {
        return res.status(500).json({ message: "Error al intentar agregar un item al carrito"})
      }
    }
    static removeFromCart(req, res) {
      try {
        const DATA = readJsonFile(PATH)
        // Logic to remove item from cart
        const id = req.params.id;
        const productId = req.body["productId"]
        const cartData = DATA["carts"][id];
        const productData = DATA["products"][productId]

        if (!cartData) return res.status(404).json({ message: 'Carrito no encontrado' })
        if (cartData.products.findIndex(p => p.productId === productId) === -1) return res.status(404).json({ message: "Producto no encontrado dentro del carrito" })

        const newCartData = new Cart(cartData.products, cartData.total);

        newCartData.removeItemComplete(productId, productData.price);

        // Persistir el archivo completo, no solo el carrito
        DATA["carts"][id] = newCartData;
        writeJsonFile(PATH, DATA)

        res.status(200).json({ message: 'Item removed from cart successfully' });
      } catch(e) {
        return res.status(500).json({ message: "Error al intentar remover un item del carrito", error: e.message })
      }
    }
    static removeUnitFromCart(req, res) {
      try {
        const DATA = readJsonFile(PATH)
        // Logic to remove item from cart
        const id = req.params.id;
        const productId = req.body["productId"]
        const cartData = DATA["carts"][id];
        const productData = DATA["products"][productId]

        if (!cartData) return res.status(404).json({ message: 'Carrito no encontrado' })
        if (cartData.products.findIndex(p => p.productId === productId) === -1) return res.status(404).json({ message: "Producto no encontrado dentro del carrito" })

        const newCartData = new Cart(cartData.products, cartData.total);

        newCartData.removeItemUnit(productId, productData.price);

        // Persistir el archivo completo, no solo el carrito
        DATA["carts"][id] = newCartData;
        writeJsonFile(PATH, DATA)

        res.status(200).json({ message: 'Item removed from cart successfully' });
      } catch(e) {
        return res.status(500).json({ message: "Error al intentar remover un item del carrito", error: e.message })
      }
    }
    static deleteCart(req, res) {
      try {
      const cartId = req.params.id;
      const DATA = readJsonFile(PATH).carts;

      if (!DATA[cartId]) return res.status(404).json({ message: "Carrito no encontrado"})
      
      delete DATA[cartId]

      res.status(200).json({ message: "Carrito borrado correctamente"})
      } catch {
        return res.status(500).json({ message: "Error al intentar borrar el carrito" })
      }
    }
}

export default CartModel;