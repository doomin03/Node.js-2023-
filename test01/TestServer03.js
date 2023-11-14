const http = require('http');
const fs = require('fs').promises;
//async 비동기 실행시 파일읽기와 서버 실행을 따로 해주는 기능
const server = http.createServer(async (req,res)=>{
    try{
        //await:파일 읽기를 기달리는 코드
        const f = await fs.readFile('./hello.html');
        res.writeHead(200,{'Content-Type':'Text/html; charset = utf-8'});
        //200 ok / 300 400 500
        res.end(f);
    }
    catch(err){
        console.log(err);
        res.writeHead(500,{'Content-Type':'Text/html; charset = utf-8'});
        res.end(err.message);
    } 
}).listen(8080);

// 이벤트 리스닝

server.on('listening',()=>{
    console.log('8080 port liten')
});

server.on('error',()=>{
    console.log('error');
});


