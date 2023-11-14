const express = require('express');
const app = express();

app.set('port',process.env.PORT || 8080);

app.get('/main',(req,res)=>{
    res.sendFile(__dirname + '/Express.html');
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'port listen');
});