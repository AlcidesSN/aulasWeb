const express = require('express');
const app = express();
const routes = require('./routes'); // Ajuste o caminho se necessário

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// Usando as rotas do seu arquivo routes.js
app.use(routes);


// Definindo a porta e iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
