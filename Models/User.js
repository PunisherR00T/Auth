const mongoose = require('mongoose')

const Userschema = new mongoose.Schema ({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,requird:true}
})

module.exports = mongoose.model('Utilisateur',Userschema)