import jsonwebtoken from "jsonwebtoken";
import { ADMIN_TOKEN } from "../index.js";
import { randomUUID as rUUID } from "crypto";
import { JWT_SECRET } from "../index.js";
import { readJsonFile, writeJsonFile } from "../utils/json_file_operations.js";

const PATH = 'src/data/session_data.json';

export function createUserSession(req, res) {
    try {
        const DATA = readJsonFile(PATH);
        const anonymousId = rUUID();
        const payload = {
            "userId": anonymousId,
            "role": "anonymous"
        };

        const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        DATA[anonymousId] = { createdAt: new Date(), role: 'anonymous' };

        writeJsonFile(PATH, DATA);

        res.json({ anonymousId, token, message: 'Anonymous session created' });
    } catch (e) {
        res.status(500).json({ message: "Error al intentar crear una nueva sesión", error: e.message })
    }
}

export function getAllSessions(req, res) {
    try {
        const authAdmin = req.headers["authorization"].split(' ')[1];

        if (!authAdmin) return res.status(400).json({ message: "Para acceder debe presentar el token de Admin"});
        if (authAdmin != ADMIN_TOKEN) return res.status(401).json({ message: "Sin autorización para acceder"})
        
        const DATA = readJsonFile(PATH);
        res.status(200).json({ message: "Sesiones encontradas", data: DATA})
    } catch(e) {
        res.status(500).json({ message: "Error al consultar las sesiones", error: e.message })
    }
}

export function getUserSession(req, res) {
    try {
        const sessionId = req.params.id;

        if (!sessionId) res.status(400).json({ message: "Para obtener una sesión se debe proveer ID"})

        const DATA = readJsonFile(PATH);
        const session = DATA[sessionId];
        if (!session) return res.status(404).json({ message: "Sesión no encontrada" });

        res.status(200).json({ message: "Sesión encontrada y enviada", data: session });
    } catch (e) {
        res.status(500).json({ message: "Error al intentar consultar la sesión", error: e.message })
    }
}

export function renewUserSession(req, res) {
    try {
        const sessionID = req.params.id;

        if (!sessionID) return res.status(404).json({ message: 'Session id required to renew access token' });

        const DATA = readJsonFile(PATH);
        
        const oldSessionData = DATA[sessionID];
            if (!oldSessionData) {
                return res.status(404).json({ message: 'Session not found' });
            }
        
        const newPayload = {
            userId: sessionID,
            role: oldSessionData.role
        }
        
        const newToken = jsonwebtoken.sign(newPayload, JWT_SECRET, { expiresIn: '4d' });

        DATA[oldSessionData.userId] = { ...oldSessionData };

        writeJsonFile(PATH, DATA)

        res.json({ token: newToken, message: 'Session renewed' });
    } catch (e) {
        res.status(500).json({ message: "Error al intentar renovar la sesión con nuevo token", error: e.message })
    }
}

function clearExpiredSessions() {
    try {
        const DATA = readJsonFile(PATH);
        const now = new Date();

        for (const sessionId in DATA) {
            const session = DATA[sessionId];
            const sessionIndex = DATA.findIndex(s => s === sessionId);

            const sessionAgeDays = (now - new Date(session.createdAt)) / (1000 * 60 * 60 * 24); // in days
            if (sessionAgeDays > 30) { // Sessions expire after 30 days
                DATA.splice(sessionIndex, 1);
            }
        }
        writeJsonFile(PATH, DATA);
        res.status(200).json({ message: "Sesiones expiradas eliminadas"})
    }catch (e) {
        res.status(500).json({ message: "Error al intentar limpiar las sesiones expiradas", error: e.message })
    }
}

// Clear expired sessions every hour
setInterval(clearExpiredSessions, 60 * 60 * 1000 * 24);
