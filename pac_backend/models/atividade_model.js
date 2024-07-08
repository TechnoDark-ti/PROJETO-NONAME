import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';
import Profissional from './profissional_model.js';

const Atividade = sequelize.define('atividade', {
    id_atividade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_atividade: {
        type: Sequelize.STRING
    },
    horario: {
        type: Sequelize.TIME
    },
    id_profissional: {
        type: Sequelize.INTEGER,
        references: {
            model: Profissional,
            key: 'id_profissional'
        }
    }
}, {
    timestamps: false,
    tableName: 'Atividade'
});

Atividade.belongsTo(Profissional, { foreignKey: 'id_profissional', as: 'profissional' });

export default Atividade;
