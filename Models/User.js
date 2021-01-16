const mongoose=require('mongoose')
const User=mongoose.model('User',{
    name:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports=User;