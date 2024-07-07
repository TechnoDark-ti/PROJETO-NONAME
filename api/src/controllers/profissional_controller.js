import profissional from "../../models/profissional_model.js";

export const getProfissionais = async (req, res) => {
    try {
        const profissionais = await profissional.findAll()
        res.send(profissionais)
    } catch (erro) {
        console.log("Erro ao acessar a tabela profissional")
    }
}


export const createProfissionais = async(req, res) => {
    try {
        await profissional.create(req.body)
        res.json({ "message":"Um novo registro foi inserido na tabela profissional"})
    } catch (erro) {
       console.log("Erro ao inserir um novo profissional", erro) 
    }
}


export const updateProfissional = async (req, res) => {
    try {
        await profissional.update(req.body, {
            where: {
                id_profissional: req.params.id
            }
        })
        res.json({
            "message": "Profissional " + req.params.id + "foi atualizado"
        })
    } catch (erro) {
        console.log("Erro ao atualizar registro Profissional", erro)
        
    }
}


export const deleteProfissional = async (req, res) => {
    try {
        await profissional.destroy({
            where: {
                id_profissional: req.params.id
            }
        })
        res.json({
            "message": "Profissional " + req.params.id + "foi Excluido"
        })
    } catch (erro) {
        console.log("Erro ao excluir registro Profissional", erro)
        
    }
}