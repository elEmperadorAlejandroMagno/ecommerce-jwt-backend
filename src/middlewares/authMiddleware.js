import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from "../index.js";


export function authenticateUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }
    
    jsonwebtoken.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        // Agregar user al request y continuar al siguiente middleware/ruta
        req.user = user;
        next();
    });
}

export default { authenticateUser };