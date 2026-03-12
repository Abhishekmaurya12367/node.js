const express=require('express');
const path=require('path');
const filepath=path.join(__dirpath,'template');
const app=express();
//app.use(exptress.static(filepath));
// first we set the dynammic page 
app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${filepath}/hello.html`);
});
// it used when we dont want find any file with th name .html then in that case i used this ; 
app.get('/about',(_,resp)=>{
    resp.sendFile(`${filepath}/about.html`);
});
// you can search without using the hello.html just search there by name such as hello or about ;
app.get('/hello',(_,resp)=>{
   resp.sendFile(`${filepath}/hello.html`);

})
app.get('/hello',(_,resp)=>{
   resp.sendFile(`${filepath}/hello.html`);

})
app.get('/profile',(_,resp)=>{
   resp.render('profile');

})
// it is used in that condition when we search any things in the urls
app.get('*',(_,resp)=>{
   resp.sendFile(`${filepath}/404_error.html`);
})
//this used to run the localhost in the 5000 hundred host;

app.listen(5000);