import express from 'express';
import { getUserSession, createUserSession, renewUserSession } from '../controllers/userSessionController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import cartController, { CartController } from '../controllers/cartController.js';
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// Home
router.get('/', authenticateUser, (req, res) => {
    res.json({ message: 'Welcome to the E-commerce JWT Backend API' });
});

// User routes
router.get('/userSession', getUserSession, (req, res) => {
    res.json({ message: 'User session retrieved successfully' });
});
router.post('/userSession', createUserSession, (req, res) => {
    res.json({ message: 'User session created successfully' });
});
router.post('/renewUserSession', renewUserSession, (req, res) => {
    res.json({ message: 'User session renewed successfully' });
});

// Product routes
router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Cart routes (requieren autenticación)
router.get('/carts', CartController.getAllCarts)
router.get('/cart', CartController.getCart);
router.post('/cart', CartController.addToCart);
router.delete('/cart/:itemId', CartController.removeFromCart);

export default router;
