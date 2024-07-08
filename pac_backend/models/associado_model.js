import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';
import Atividade from './atividade_model.js';

const Associado = sequelize.define('associado', {
    id_associado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_associado: {
        type: Sequelize.STRING
    },
    dta_nascimento: {
        type: Sequelize.DATE
    },
    idade_associado: {
        type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.STRING
    },
    nome_responsavel: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.INTEGER
    },
    CEP: {
        type: Sequelize.INTEGER
    },
    observacoes: {
        type: Sequelize.STRING
    },
    atividadeId: {
        type: Sequelize.INTEGER,
        references: {
            model: Atividade,
            key: 'id_atividade'
        }
    }
}, {
    timestamps: false,
    tableName: 'Associado'
});

Associado.belongsTo(Atividade, { foreignKey: 'atividadeId', as: 'atividade' });

export default Associado;
