const express = require('express');
const axio = require('axios');

const app = express();
const port = 3000;


app.get('/',(req,res)=> {
    res.send('<a href="/rota">hello world</a>');
});

app.get('/rota',(req,res)=> {
    res.send('Minha primeira rota');
});

app.get('/consulta-cep/:cep', async (req,res)=> {
    const cep = req.params.cep;

    try{
        const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
        if(!cepRegex.test(cep)){
<<<<<<< HEAD
            res.status(400).send('CEP invalidp');
=======
            res.status(400).send("CEP inválido. Formato: XXXXX-XXX");
>>>>>>> eb44a291529ade9f142ab6bed043d4a9b611a1b2
            return;
        }
        const response = await axio.get(`http://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    } catch (error){
        console.error('Erro ao fazer Requisição: ', error);

        res.status(500).send('Erro ao consultar Cep');
    }
});

app.listen(port, ()=> {
    console.log(`servidor rodando em http://localhost:${port}`);
});