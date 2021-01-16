const express=require('express');
const bpdyparser=require('body-parser');
const bodyParser = require('body-parser');
const db=require('./Database/db')
const URouter=require('./Routes/UserRoutes')
const app=express();
app.use(express.json());
app.use(URouter)
app.use(bodyParser.urlencoded({extended:false}))
app.listen(3000)