import Associado from '../models/associado_model.js';

export const getAssociados = async (req, res) => {
    try {
        const associados = await Associado.findAll();
        res.send(associados);
    } catch (error) {
        console.log("Erro ao acessar a tabela associado", error);
    }
};

export const createAssociados = async (req, res) => {
    try {
        await Associado.create(req.body);
        res.json({ message: "Um novo registro foi inserido na tabela associado" });
    } catch (error) {
        console.log("Erro ao inserir um novo associado", error);
    }
};

export const updateAssociado = async (req, res) => {
    try {
        await Associado.update(req.body, {
            where: {
                id_associado: req.params.id
            }
        });
        res.json({ message: `Associado ${req.params.id} foi atualizado` });
    } catch (error) {
        console.log("Erro ao atualizar registro associado", error);
    }
};

export const deleteAssociado = async (req, res) => {
    try {
        await Associado.destroy({
            where: {
                id_associado: req.params.id
            }
        });
        res.json({ message: `Associado ${req.params.id} foi excluído` });
    } catch (error) {
        console.log("Erro ao excluir registro associado", error);
    }
};
