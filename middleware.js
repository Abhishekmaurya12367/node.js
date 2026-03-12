// aplication middleware;
const express=require('express');
const app=express();
const reqFilter=(req,resp,next)=>{
    if(!req.quesry.age){
        resp.send("please enter the proper age");
    }
    else if(req.quesry.age<=18){
        console.log("the person are not allowed inthe whose age are less then 18");
    }
    else{
        next();
    }

}
app.use(reqFilter);
app.get('',(req,resp)=>{
    resp.send('this is the home page where you can see all property of each student dont look the other page');

});
app.get('/user',()=>{
    resp.send("welcome the user file ");

});