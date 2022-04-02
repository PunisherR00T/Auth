const {body,validationResult} = require('express-validator')

exports.registervalidation = [
    body('email','Please enter a valid email').isEmail(),
    body('password','Password must have at least 6 Characters').isLength({min:6})
]

exports.loginvalidation = [
    body('email','Please enter a valid email').isEmail()
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });
    }
    next()
}