const {verifyToken} = require('../services/authService')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        res.status(401).send({error: 'Unauthorized'});
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        res.status(401).send({error: 'Unauthorized'});
    }

    try {
        const user = verifyToken(token);
        req.user = user;
        console.log(user)
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).send({error: 'Invalid token'});
    }
}

module.exports = authenticateToken;