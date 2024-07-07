import { DataTypes } from "sequelize";
import db from "../config/database.js";
import Atividade from "./atividade_model.js";

const Associado = db.define('Associado', {
    id_associado: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 

    nome_associado: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    dta_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }, 

    idade_associado: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false
    }, 

    nome_responsavel: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    endereco: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 

    bairro: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 

    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    CEP: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    observacoes: {
        type: DataTypes.STRING(100)
    }, 

    atividade: {
        type: DataTypes.INTEGER,
        references: {
            model: Atividade,
            key: 'id_atividade'
        }
    }
},
{
    timestamps: false, 
    freezeTableName: true
});

Atividade.hasMany(Associado, {
    foreignKey: 'atividade',
    as: 'associados'
});

Associado.belongsTo(Atividade, {
    foreignKey: 'atividade',
    as: 'atividade'
});

export default Associado;
