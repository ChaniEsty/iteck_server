const jwt = require('jsonwebtoken');
const verifyJWT = (req, res, next) => {
   console.log(req.headers,"yyyyyyyyyyyyyyyyyyyyyy");
    const authHeader = req.headers.authorization || req.headers.Authorization
    console.log(authHeader);
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.JWT_PASSWORD,
        (err, decoded) => {
        15
        if (err) return res.status(403).json({ message: 'Forbidden' })
        req.user = decoded
        next()
        }
    )
        
}
module.exports = verifyJWT