import atividade from "../models/atividade_model.js";


export const getAtividades = async (req, res) => {
    try {
        const atividades = await atividade.findAll()
        res.send(atividades)
    } catch (erro) {
        console.log("Erro ao acessar a tabela atividade")
    }
}


export const createAtividades = async(req, res) => {
    try {
        await atividade.create(req.body)
        res.json({ "message":"Um novo registro foi inserido na tabela atividade"})
    } catch (erro) {
       console.log("Erro ao inserir uma nova atividade", erro) 
    }
}


export const updateAtividade = async (req, res) => {
    try {
        await atividade.update(req.body, {
            where: {
                id_atividade: req.params.id
            }
        })
        res.json({
            "message": "Atividade " + req.params.id + "foi atualizada"
        })
    } catch (erro) {
        console.log("Erro ao atualizar registro atividade", erro)
        
    }
}


export const deleteAtividade = async (req, res) => {
    try {
        await atividade.destroy({
            where: {
                id_atividade: req.params.id
            }
        })
        res.json({
            "message": "Atividade " + req.params.id + "foi Excluida"
        })
    } catch (erro) {
        console.log("Erro ao excluir registro atividade", erro)
        
    }
}