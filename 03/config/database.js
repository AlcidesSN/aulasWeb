const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('api-node', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize; // Certifique-se de exportar a instância corretamente
