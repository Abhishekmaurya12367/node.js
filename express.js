const express=require('express');
const app=express();// make it execitable state 
//app.get()// the get methode are provide routing the routing may be get and post it
app.get('',(req,resp)=>{
   // console.log("the data is comming from the fronted we can fetch",req.query.name);
    resp.send("hello this the home page");

});
app.get('/about',(req,resp)=>{
    resp.send("hello guys this is my about page so dont worry if you have any doubt you cam clear here");
});

app.get('/home',(req,resp)=>{
    resp.send("this is the my helping page that any one can asked about the help");
})