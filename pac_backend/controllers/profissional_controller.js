import Profissional from "../models/profissional_model.js";

export const getProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.findAll();
        res.json(profissionais);
    } catch (error) {
        console.error("Erro ao acessar a tabela profissional:", error.message);
        res.status(500).json({ error: "Erro ao buscar profissionais." });
    }
};

export const createProfissional = async (req, res) => {
    try {
        const novoProfissional = await Profissional.create(req.body);
        res.status(201).json({ message: "Novo profissional inserido com sucesso.", novoProfissional });
    } catch (error) {
        console.error("Erro ao inserir um novo profissional:", error.message);
        res.status(400).json({ error: "Erro ao inserir um novo profissional." });
    }
};

export const updateProfissional = async (req, res) => {
    try {
        const profissionalAtualizado = await Profissional.update(req.body, {
            where: {
                id_profissional: req.params.id
            }
        });
        if (profissionalAtualizado[0] === 0) {
            return res.status(404).json({ error: "Profissional não encontrado." });
        }
        res.json({ message: `Profissional ${req.params.id} atualizado com sucesso.` });
    } catch (error) {
        console.error("Erro ao atualizar registro do profissional:", error.message);
        res.status(400).json({ error: "Erro ao atualizar registro do profissional." });
    }
};

export const deleteProfissional = async (req, res) => {
    try {
        const profissionalExcluido = await Profissional.destroy({
            where: {
                id_profissional: req.params.id
            }
        });
        if (!profissionalExcluido) {
            return res.status(404).json({ error: "Profissional não encontrado." });
        }
        res.json({ message: `Profissional ${req.params.id} excluído com sucesso.` });
    } catch (error) {
        console.error("Erro ao excluir registro do profissional:", error.message);
        res.status(400).json({ error: "Erro ao excluir registro do profissional." });
    }
};
