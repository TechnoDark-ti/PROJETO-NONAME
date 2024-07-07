import Associado from "../models/associado_model.js";

export const getAssociados = async (req, res) => {
    try {
        const associados = await Associado.findAll();
        res.json(associados);
    } catch (error) {
        console.error("Erro ao acessar a tabela associado:", error.message);
        res.status(500).json({ error: "Erro ao buscar associados." });
    }
};

export const createAssociado = async (req, res) => {
    try {
        const novoAssociado = await Associado.create(req.body);
        res.status(201).json({ message: "Novo associado inserido com sucesso.", novoAssociado });
    } catch (error) {
        console.error("Erro ao inserir um novo associado:", error.message);
        res.status(400).json({ error: "Erro ao inserir um novo associado." });
    }
};

export const updateAssociado = async (req, res) => {
    try {
        const associadoAtualizado = await Associado.update(req.body, {
            where: {
                id_associado: req.params.id
            }
        });
        if (associadoAtualizado[0] === 0) {
            return res.status(404).json({ error: "Associado não encontrado." });
        }
        res.json({ message: `Associado ${req.params.id} atualizado com sucesso.` });
    } catch (error) {
        console.error("Erro ao atualizar registro do associado:", error.message);
        res.status(400).json({ error: "Erro ao atualizar registro do associado." });
    }
};

export const deleteAssociado = async (req, res) => {
    try {
        const associadoExcluido = await Associado.destroy({
            where: {
                id_associado: req.params.id
            }
        });
        if (!associadoExcluido) {
            return res.status(404).json({ error: "Associado não encontrado." });
        }
        res.json({ message: `Associado ${req.params.id} excluído com sucesso.` });
    } catch (error) {
        console.error("Erro ao excluir registro do associado:", error.message);
        res.status(400).json({ error: "Erro ao excluir registro do associado." });
    }
};
