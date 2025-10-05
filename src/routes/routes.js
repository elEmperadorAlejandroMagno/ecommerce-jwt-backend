import express from 'express';
import { getUserSession, createUserSession, renewUserSession, getAllSessions } from '../controllers/userSessionController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { CartController } from '../controllers/cartController.js';
import { ProductController } from '../controllers/productController.js';

const router = express.Router();

// Home
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the E-commerce JWT Backend API' });
});

// User routes
router.get('/usersSessions', getAllSessions);
router.post('/userSession', createUserSession);
router.get('/userSession/:id', authenticateUser, getUserSession);
router.post('/renewUserSession/:id', renewUserSession);

// Product routes
router.get('/products', ProductController.getProducts);
router.post('/products', ProductController.createProduct);
router.get('/products/:id', ProductController.getProductById);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

// Cart routes (requieren autenticación)
router.get('/carts', CartController.getAllCarts);
router.get('/cart/:id', CartController.getCartById);
router.delete('/cart/:id', CartController.deleteCart);
router.post('/addToCart/:id', CartController.addToCart);
router.delete('/removeFromCart/:id', CartController.removeFromCart);
router.delete('/removeUnitFromCart/:id', CartController.removeUnitFromCart);

export default router;
