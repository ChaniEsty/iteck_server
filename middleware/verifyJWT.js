const jwt = require('jsonwebtoken');
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(
        token,
        process.env.JWT_PASSWORD,
        (err, decoded) => {
        15
        if (err) return res.status(403).json({ message: 'Forbidden' })
        req.user = decoded
        console.log(req.user)
        next()
        }
    )
        
}
module.exports = verifyJWT