import { HasMany, Sequelize } from "sequelize";
import db from "../config/database.js";

const Profissional = db.define('profissional', {
    id_profissional: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    }, 

    nome_profissional: {
        type: Sequelize.VARCHAR(100)
    }, 

    profissao: {
        type: Sequelize.VARCHAR(100)
    },
}, 
{
    timestamps: false, 
    freezeTableName: true
}
)

export default Profissional