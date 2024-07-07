import { HasMany, Sequelize } from "sequelize";
import db from "../config/database.js";
import Atividade from "../models/atividade_model.js"

const Associado = db.define('associado', {
    id_associado: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    }, 

    nome_associado: {
        type: Sequelize.VARCHAR(100)
    },

    dta_nascimento: {
        type: Sequelize.DATE
    }, 

    idade_associado: {
        type: Sequelize.INTEGER
    }, 

    telefone: {
        type: Sequelize.VARCHAR(15)
    }, 

    nome_responsavel: {
        type: Sequelize.VARCHAR(100)
    },

    endereco: {
        type: Sequelize.VARCHAR(50)
    }, 

    bairro: {
        type: Sequelize.VARCHAR(50)
    }, 

    numero: {
        type: Sequelize.INTEGER
    }, 

    CEP: {
        type: Sequelize.INTEGER
    }, 

    observacoes: {
        type: Sequelize.VARCHAR(100)
    }, 

    atividade: {
        type: Sequelize.INTEGER
    },
},
{
    timestamps: false, 
    freezeTableName: true
})

Associado.associate = (models) => {
    Associado.hasMany(models.Atividade, 
        {
            foreignKey: 'atividade', as: 'atividade'
        }
    )
}

Associado.belongsTo(Atividade, {foreignKey:'id_atividade', allowNull:true})

export default Associado