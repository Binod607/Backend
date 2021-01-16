const express=require('express');
const router=express.Router();
const User=require('../Models/User')

router.post('/insert',(req,res)=>{
    var data=new User(req.body);
    data.save().then(function(){
        res.send("Inserted")
    }).catch(function(e){
        res.send(e)
    })
})
module.exports=router