
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Text/html; charset = utf-8'});
    res.write('<h1> Node.js Server02 </h1>')
    //응답 종료 코드 
    res.end('<p> The End </p>');
}).listen(8080,()=>{
    console.log("8080 port listen");
});


