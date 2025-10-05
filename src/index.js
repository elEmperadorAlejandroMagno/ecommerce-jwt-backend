import express from 'express';
import router from './routes/routes.js';
import dotenv from "dotenv";
import cors from 'cors';

const app = express();
dotenv.config({ path: '.env.example'});

export const JWT_SECRET = process.env.JWT_SECRET;
export const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

const routes = router;

const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// Middleware
app.use(express.json());

// Middleware temporal para ver la IP de las peticiones
// app.use((req, res, next) => {
//   const clientIP = req.ip || 
//                    req.connection.remoteAddress || 
//                    req.socket.remoteAddress ||
//                    req.headers['x-forwarded-for'];
  
//   console.log(`🔍 Petición desde IP: ${clientIP}`);
//   console.log(`📍 Headers relevantes:`, {
//     'x-forwarded-for': req.headers['x-forwarded-for'],
//     'x-real-ip': req.headers['x-real-ip'],
//     'user-agent': req.headers['user-agent']
//   });
//   next();
// });

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'E-commerce JWT Backend API' });
});

app.use('/home', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
