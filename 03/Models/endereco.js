const {Sequelize, DataType, DataTypes, STRING} = require('sequelize');

class Endereco extends Model {}

Endereco.init({

    Id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Cep:
    {
        type: DataType.STRING,
        allowNull:false
    },
    Logradouro:{
        type: DataType.STRING,
        allowNull:false
    },
    Numero:{
        type: DataType.INTEGER,
        allowNull:false
    },
    Complemento:{
        type: DataType.STRING,
        allowNull:false
    },
    Bairro:{
        type: DataType.STRING,
        allowNull:false
    },
    Cidade:{
        type: DataType.STRING,
        allowNull:false
    },
    Estado:{
        type: DataType.STRING,
        allowNull:false
    },
    MunicipioIBGE:{
        type: DataType.STRING,
        allowNull:false
    },
})