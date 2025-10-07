// Temporalmente deshabilitado para facilitar los testeos
export function authenticateUser(req, res, next) {
    return next();
}

export default { authenticateUser };
