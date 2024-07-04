import associado from "../models/associado_model.js";


export const getAssociados= async (req, res) => {
    try {
        const associados = await associado.findAll()
        res.send(associados)
    } catch (erro) {
        console.log("Erro ao acessar a tabela associado")
    }
}


export const createAssociados = async(req, res) => {
    try {
        await associado.create(req.body)
        res.json({ "message":"Um novo registro foi inserido na tabela associado"})
    } catch (erro) {
       console.log("Erro ao inserir um novo associado", erro) 
    }
}


export const updateAssociado = async (req, res) => {
    try {
        await associado.update(req.body, {
            where: {
                id_associado: req.params.id
            }
        })
        res.json({
            "message": "Associado " + req.params.id + "foi atualizado"
        })
    } catch (erro) {
        console.log("Erro ao atualizar registro associado", erro)
        
    }
}


export const deleteAssociado = async (req, res) => {
    try {
        await associado.destroy({
            where: {
                id_associado: req.params.id
            }
        })
        res.json({
            "message": "Associado " + req.params.id + "foi Excluido"
        })
    } catch (erro) {
        console.log("Erro ao excluir registro associado", erro)
        
    }
}