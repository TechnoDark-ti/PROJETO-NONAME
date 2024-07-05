import express from "express"

import { getAssociados, createAssociados, updateAssociado, deleteAssociado } from "../controllers/associado_controller.js"

const router = express.Router()

router.get('/associado', getAssociados)
router.post('/associado', createAssociados)
router.put('/associado/:id', updateAssociado)
router.delete('/associado/:id', deleteAssociado)

export default router