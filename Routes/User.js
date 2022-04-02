const express = require('express')
const { SignUp, SignIn, GetUsers, DeleteUsers} = require('../Controllers/User')
const { IsAuth } = require('../Midlewares/IsAuth')
const { registervalidation, Validation, loginvalidation } = require('../Midlewares/Validator')

const userRouter = express.Router()
userRouter.get('/GetUsers',GetUsers)
userRouter.post('/SignUp',registervalidation,Validation,SignUp)
userRouter.post('/SignIn',loginvalidation,Validation,SignIn)
userRouter.get('/GetUser',IsAuth,(req,res)=>res.send(req.user))
userRouter.delete('/DeleteUsers',DeleteUsers)
module.exports = userRouter


