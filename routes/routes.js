import express from 'express';
import { getUserSession, createUserSession, renewUserSession } from '../controllers/userSessionController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { CartController } from '../controllers/cartController.js';

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
// router.get('/products', getProducts);
// router.post('/products', createProduct);
// router.post('/products', updateProduct);
// router.delete('/products', deleteProduct);

// Cart routes (requieren autenticación)
router.get('/cart', authenticateUser, CartController.getCart);
router.post('/cart', authenticateUser, CartController.addToCart);
router.delete('/cart/:itemId', authenticateUser, CartController.removeFromCart);

export default router;
