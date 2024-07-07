import { HasMany, Sequelize } from "sequelize";
import db from "../config/database.js";
import Profissional from "./profissional_model";

const Atividade = db.define('atividade', {
    id_atividade: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    }, 

    nome_atividade: {
        type: Sequelize.VARCHAR(100)
    }, 

    horario: {
        type: Sequelize.TIME
    }, 

    profissional: {
        type: Sequelize.INTEGER
    }
}, 
{
    timestamps: false, 
    freezeTableName: true
})

Atividade.associate = (models) => {
    Atividade.hasMany(models.Profissional, 
        {
            foreignKey: 'profissional', as: 'profissional'
        }
    )
}

Atividade.belongsTo(Profissional, {foreignKey:'id_profissional', allowNull:true})


export default Atividade