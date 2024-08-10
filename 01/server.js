const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res)=> {
    res.send('<a href="/rota">hello world</a>');
});

app.get('/rota',(req,res)=> {
    res.send('Minha primeira rota');
});

app.listen(port, ()=> {
    console.log(`servidor rodando em http://localhost:${port}`);
});