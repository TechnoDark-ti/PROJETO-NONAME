import Atividade from "../models/atividade_model.js";

export const getAtividades = async (req, res) => {
    try {
        const atividades = await Atividade.findAll();
        res.json(atividades);
    } catch (error) {
        console.error("Erro ao acessar a tabela atividade:", error.message);
        res.status(500).json({ error: "Erro ao buscar atividades." });
    }
};

export const createAtividade = async (req, res) => {
    try {
        const novaAtividade = await Atividade.create(req.body);
        res.status(201).json({ message: "Nova atividade inserida com sucesso.", novaAtividade });
    } catch (error) {
        console.error("Erro ao inserir uma nova atividade:", error.message);
        res.status(400).json({ error: "Erro ao inserir uma nova atividade." });
    }
};

export const updateAtividade = async (req, res) => {
    try {
        const atividadeAtualizada = await Atividade.update(req.body, {
            where: {
                id_atividade: req.params.id
            }
        });
        if (atividadeAtualizada[0] === 0) {
            return res.status(404).json({ error: "Atividade não encontrada." });
        }
        res.json({ message: `Atividade ${req.params.id} atualizada com sucesso.` });
    } catch (error) {
        console.error("Erro ao atualizar registro da atividade:", error.message);
        res.status(400).json({ error: "Erro ao atualizar registro da atividade." });
    }
};

export const deleteAtividade = async (req, res) => {
    try {
        const atividadeExcluida = await Atividade.destroy({
            where: {
                id_atividade: req.params.id
            }
        });
        if (!atividadeExcluida) {
            return res.status(404).json({ error: "Atividade não encontrada." });
        }
        res.json({ message: `Atividade ${req.params.id} excluída com sucesso.` });
    } catch (error) {
        console.error("Erro ao excluir registro da atividade:", error.message);
        res.status(400).json({ error: "Erro ao excluir registro da atividade." });
    }
};
