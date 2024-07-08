import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

const Profissional = sequelize.define('profissional', {
    id_profissional: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_profissional: {
        type: Sequelize.STRING
    },
    profissao: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: 'Profissional'
});

export default Profissional;
