import { DataTypes } from "sequelize";
import db from "../config/database.js";
import Profissional from "./profissional_model.js";

const Atividade = db.define('Atividade', {
    id_atividade: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 

    nome_atividade: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 

    horario: {
        type: DataTypes.TIME,
        allowNull: false
    }, 

    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
            key: 'id_profissional'
        }
    }
}, 
{
    timestamps: false, 
    freezeTableName: true
});

Profissional.hasMany(Atividade, {
    foreignKey: 'id_profissional',
    as: 'atividades'
});

Atividade.belongsTo(Profissional, {
    foreignKey: 'id_profissional',
    as: 'profissional'
});

export default Atividade;
