import jsonwebtoken from "jsonwebtoken";
import { randomUUID as rUUID } from "crypto";
import { JWT_SECRET } from "../index.js";

let dbApp = {}; // In-memory session store

export function createUserSession(req, res) {
    const anonymousId = rUUID();
    const payload = {
        "userId": anonymousId,
        "role": "anonymous"
    };
    const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    dbApp[anonymousId] = { createdAt: new Date(), role: 'anonymous' };

    res.json({ anonymousId, token, message: 'Anonymous session created' });
}

export function getUserSession(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jsonwebtoken.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.json({ user });
    });
}

export function renewUserSession(req, res) {
    const sessionID = req.body.id;
    
    if (!sessionID) return res.status(404).json({ message: 'Session id required to renew access token' });
    
    const oldSessionData = dbApp[sessionID];
        if (!oldSessionData) {
            return res.status(404).json({ message: 'Session not found' });
        }
    
    const newPayload = {
        userId: sessionID,
        role: oldSessionData.role
    }
    
    const newToken = jsonwebtoken.sign(newPayload, JWT_SECRET, { expiresIn: '4d' });

    dbApp[oldSessionData.userId] = { ...oldSessionData };

    res.json({ token: newToken, message: 'Session renewed' });
}

function clearExpiredSessions() {
    const now = new Date();
    for (const sessionId in dbApp) {
        const session = dbApp[sessionId];
        const sessionAgeDays = (now - new Date(session.createdAt)) / (1000 * 60 * 60 * 24); // in days
        if (sessionAgeDays > 30) { // Sessions expire after 30 days
            delete dbApp[sessionId];
        }
    }
}

// Clear expired sessions every hour
setInterval(clearExpiredSessions, 60 * 60 * 1000 * 24);
