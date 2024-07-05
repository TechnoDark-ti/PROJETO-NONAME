import express from "express"

import { getAtividades, createAtividades, updateAtividade, deleteAtividade } from "../controllers/atividade_controller.js"

const router = express.Router()

router.get('/atividade', getAtividades)
router.post('/atividade', createAtividades)
router.put('/atividade/:id', updateAtividade)
router.delete('/atividade/:id', deleteAtividade)

export default router