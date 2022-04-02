const jwt = require('jsonwebtoken')
const User = require('../Models/User')

exports.IsAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorization')
        var decoded = jwt.verify(token,process.env.private_key)
        if (!decoded){return res.status(400).send({errors:[{msg:'invalid token'}]})}
        const user = await User.findById(decoded.id)
        req.user = user
        next()
    } catch (error) {
        res.status(500).send({errors:[{msg:'Not Authorized'}]})
    }
}