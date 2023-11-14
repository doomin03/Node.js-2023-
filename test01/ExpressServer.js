const express = require('express');
const app = express();

//주소창에 loaclhost:8080/abc 일때 
app.get('/abc',(req,res)=>{
    res.send('hello express');
});

app.listen(8080,()=>console.log('8080 express server'));