const route=require('express').Router();
const user=require('./database');

route.post('/addUser',(req,res)=>{
    user.addUser(req.body,res);
})

route.post('/demoUser',(req,res)=>{
    user.demoUser(req.body,res);
})

route.get('/getUsers',(req,res)=>{
    user.getUsers(res);
})

route.post('/getOneUser',(req,res)=>{
    user.getOneUser(req.body,res);
})
module.exports=route;