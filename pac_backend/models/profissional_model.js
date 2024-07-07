import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Profissional = db.define('Profissional', {
    id_profissional: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 

    nome_profissional: {
        type: DataTypes.STRING(100),
        allowNull: false
    }, 

    profissao: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{
    timestamps: false, 
    freezeTableName: true
});

export default Profissional;
