const jwt = require("jsonwebtoken") //IMPORTED AS A MODULE
//Function that receives the REQ, RES & next function, that calls the next middleware. The own route, in this case.
async function validateToken(req,res, next) {
    const token = req.reader('auth-token') //There's a token in this session?
    if(!token) return res.status(400).send({error: 'Access denied.'})

    try {
        const verified = jwt.verify(token,
            process.env.JWT_SECRET) //Check if token is valid
        req.user = verified

        next() //Call next middleware.
    } catch (error) {
        res.status(400).send({error: 'Invalid token.'})
    }
}
module.exports = validateToken