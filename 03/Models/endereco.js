const { DataTypes, Model } = require('sequelize');
const conexao = require('../config/database');

module.exports = (sequelize) => { // Aceitando a instância do Sequelize como argumento
  class Endereco extends Model {}

  Endereco.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      Cep: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'cep',

      },
      Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'logradouro',

      },
      Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'numero',

      },
      Complemento: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'complemento',

      },
      Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'bairro',

      },
      Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'cidade',

      },
      Estado: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'estado',

      },
      MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'municipioibge',

      },
    },
    {
      sequelize,  // Usando a instância do Sequelize passada para o método
      modelName: 'Endereco',
      tableName: 'enderecos',
      timestamps: false,
    }
  );

  return Endereco;
};
