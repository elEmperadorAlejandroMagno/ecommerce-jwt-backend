import express from 'express';
import router from './routes/routes.js';
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: '.env.example'});

export const JWT_SECRET = process.env.JWT_SECRET

const routes = router;

const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'E-commerce JWT Backend API' });
});

app.use('/home', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
