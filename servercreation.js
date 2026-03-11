const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>hello i am not good please look this momment and suggest me any changes if required ok i hope you doing </h1>");
    resp.end();

}).listen(4500);
console.log("100")

